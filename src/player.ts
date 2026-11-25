import * as THREE from 'three';
import { SoundEngine } from './audio';
import {
  Collider,
  getSurfaceType,
  getTerrainHeight,
  MAX_WALK_DEPTH,
  SPAWN_X,
  SPAWN_Z,
  SurfaceType,
  WATER_LEVEL,
} from './island';

export interface PlayerStatus {
  speedRatio: number;
  isSprinting: boolean;
  isGrounded: boolean;
  inWater: boolean;
  surface: SurfaceType;
}

export interface PlayerHealth {
  current: number;
  max: number;
  isDead: boolean;
  damageFlash: number;
}

export class PlayerController {
  private readonly camera: THREE.PerspectiveCamera;
  private readonly colliders: Collider[];
  private readonly audio: SoundEngine;

  private readonly eyeHeight = 1.72;
  private readonly playerRadius = 0.45;
  private readonly gravity = -18.5;
  private readonly jumpSpeed = 6.8;

  private readonly maxHealth = 100;
  private health = 100;
  private isDead = false;
  private damageFlash = 0;
  private regenCooldown = 0;
  private damageRoll = 0;
  private damagePitch = 0;

  private readonly position = new THREE.Vector3();
  private verticalVel = 0;
  private isGrounded = true;

  private yaw = 0;
  private pitch = -0.05;
  private readonly keys = new Set<string>();
  private touchForward = 0;
  private touchStrafe = 0;
  private touchSprint = false;
  private jumpQueued = false;
  private stepDistance = 0;

  private readonly forward = new THREE.Vector3();
  private readonly right = new THREE.Vector3();
  private readonly moveDir = new THREE.Vector3();

  constructor(
    camera: THREE.PerspectiveCamera,
    colliders: Collider[],
    audio: SoundEngine
  ) {
    this.camera = camera;
    this.colliders = colliders;
    this.audio = audio;

    this.camera.rotation.order = 'YXZ';
    const spawnGroundY = getTerrainHeight(SPAWN_X, SPAWN_Z);
    this.position.set(SPAWN_X, spawnGroundY + this.eyeHeight, SPAWN_Z);
    this.syncCamera();
  }

  handleKeyDown(code: string): void {
    this.keys.add(code);
  }

  handleKeyUp(code: string): void {
    this.keys.delete(code);
  }

  clearInputs(): void {
    this.keys.clear();
    this.touchForward = 0;
    this.touchStrafe = 0;
    this.touchSprint = false;
    this.jumpQueued = false;
  }

  setTouchMove(forward: number, strafe: number, sprint: boolean): void {
    this.touchForward = THREE.MathUtils.clamp(forward, -1, 1);
    this.touchStrafe = THREE.MathUtils.clamp(strafe, -1, 1);
    this.touchSprint = sprint;
  }

  triggerJump(): void {
    this.jumpQueued = true;
  }

  handleMouseLook(movementX: number, movementY: number, isAiming: boolean): { dx: number; dy: number } {
    // Guard against sudden pointer-lock browser jump spikes
    if (Math.abs(movementX) > 250 || Math.abs(movementY) > 250) {
      return { dx: 0, dy: 0 };
    }

    const sensitivity = isAiming ? 0.0014 : 0.0022;
    this.yaw -= movementX * sensitivity;
    this.pitch = THREE.MathUtils.clamp(this.pitch - movementY * sensitivity, -1.48, 1.48);
    this.syncCamera();
    return { dx: movementX, dy: movementY };
  }

  handleTouchLook(deltaX: number, deltaY: number, isAiming: boolean): { dx: number; dy: number } {
    if (Math.abs(deltaX) > 400 || Math.abs(deltaY) > 400) {
      return { dx: 0, dy: 0 };
    }

    const sensitivity = isAiming ? 0.0032 : 0.0052;
    this.yaw -= deltaX * sensitivity;
    this.pitch = THREE.MathUtils.clamp(this.pitch - deltaY * sensitivity, -1.48, 1.48);
    this.syncCamera();
    return { dx: deltaX, dy: deltaY };
  }

  applyRecoilKick(pitchDelta: number, yawDelta: number): void {
    this.pitch = THREE.MathUtils.clamp(this.pitch + pitchDelta, -1.48, 1.48);
    this.yaw += yawDelta;
    this.syncCamera();
  }

  getPosition(): THREE.Vector3 {
    return this.position.clone();
  }

  getHealth(): PlayerHealth {
    return {
      current: Math.ceil(this.health),
      max: this.maxHealth,
      isDead: this.isDead,
      damageFlash: this.damageFlash,
    };
  }

  takeDamage(amount: number): boolean {
    if (this.isDead || amount <= 0) return this.isDead;
    this.health = Math.max(0, this.health - amount);
    this.damageFlash = 1;
    this.regenCooldown = 6.0;
    this.damageRoll = (Math.random() > 0.5 ? 1 : -1) * 0.055;
    this.damagePitch = 0.035;
    this.audio.playPlayerHurt();

    if (this.health <= 0) {
      this.health = 0;
      this.isDead = true;
      this.clearInputs();
    }
    return this.isDead;
  }

  heal(amount: number): void {
    if (this.isDead || amount <= 0) return;
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  reset(): void {
    const spawnGroundY = getTerrainHeight(SPAWN_X, SPAWN_Z);
    this.position.set(SPAWN_X, spawnGroundY + this.eyeHeight, SPAWN_Z);
    this.verticalVel = 0;
    this.isGrounded = true;
    this.yaw = 0;
    this.pitch = -0.05;
    this.health = this.maxHealth;
    this.isDead = false;
    this.damageFlash = 0;
    this.regenCooldown = 0;
    this.damageRoll = 0;
    this.damagePitch = 0;
    this.stepDistance = 0;
    this.clearInputs();
    this.syncCamera();
  }

  setPose(position: THREE.Vector3, yaw: number, pitch: number): void {
    this.position.copy(position);
    this.yaw = yaw;
    this.pitch = THREE.MathUtils.clamp(pitch, -1.48, 1.48);
    this.verticalVel = 0;
    this.isGrounded = true;
    this.syncCamera();
  }

  private syncCamera(): void {
    this.camera.position.copy(this.position);
    this.camera.rotation.set(
      THREE.MathUtils.clamp(this.pitch + this.damagePitch, -1.48, 1.48),
      this.yaw,
      this.damageRoll,
      'YXZ'
    );
  }

  private isWalkable(x: number, z: number): boolean {
    if (Math.abs(x) > 260 || z > 120 || z < -320) return false;
    return getTerrainHeight(x, z) >= MAX_WALK_DEPTH;
  }

  update(dt: number, isPlaying: boolean, isAiming: boolean): PlayerStatus {
    this.damageFlash = Math.max(0, this.damageFlash - dt * 2.4);
    const flinchDecay = Math.min(1, dt * 10);
    this.damageRoll = THREE.MathUtils.lerp(this.damageRoll, 0, flinchDecay);
    this.damagePitch = THREE.MathUtils.lerp(this.damagePitch, 0, flinchDecay);

    if (isPlaying && !this.isDead) {
      if (this.regenCooldown > 0) {
        this.regenCooldown = Math.max(0, this.regenCooldown - dt);
      } else if (this.health < this.maxHealth) {
        this.health = Math.min(this.maxHealth, this.health + 5 * dt);
      }
    }

    const curGroundY = getTerrainHeight(this.position.x, this.position.z);
    const inWater = curGroundY < WATER_LEVEL;
    const surface = getSurfaceType(this.position.x, this.position.z);

    if (!isPlaying || this.isDead) {
      this.syncCamera();
      return { speedRatio: 0, isSprinting: false, isGrounded: this.isGrounded, inWater, surface };
    }

    // Read combined keyboard + analog touch movement input
    let inputForward = this.touchForward;
    let inputStrafe = this.touchStrafe;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) inputForward += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) inputForward -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) inputStrafe += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) inputStrafe -= 1;

    inputForward = THREE.MathUtils.clamp(inputForward, -1, 1);
    inputStrafe = THREE.MathUtils.clamp(inputStrafe, -1, 1);

    this.forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    this.right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    this.moveDir.set(0, 0, 0);
    this.moveDir.addScaledVector(this.forward, inputForward);
    this.moveDir.addScaledVector(this.right, inputStrafe);

    const rawMag = this.moveDir.length();
    const hasMove = rawMag > 0.001;
    const inputMag = Math.min(1, rawMag);
    if (hasMove) this.moveDir.divideScalar(rawMag);

    const keySprint = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
    const wantSprint =
      (keySprint || this.touchSprint) &&
      inputForward > 0.2 &&
      !isAiming &&
      !inWater;

    const maxSpeed = (inWater || isAiming ? 3.4 : wantSprint ? 9.5 : 5.8) * inputMag;

    const prevX = this.position.x;
    const prevZ = this.position.z;

    const targetX = prevX + this.moveDir.x * maxSpeed * dt;
    const targetZ = prevZ + this.moveDir.z * maxSpeed * dt;

    // Ocean depth clamp with smooth shoreline sliding
    if (this.isWalkable(targetX, targetZ)) {
      this.position.x = targetX;
      this.position.z = targetZ;
    } else if (this.isWalkable(targetX, prevZ)) {
      this.position.x = targetX;
    } else if (this.isWalkable(prevX, targetZ)) {
      this.position.z = targetZ;
    }

    // Circle-vs-circle pushout against palm trunks and rocks
    for (const col of this.colliders) {
      const dx = this.position.x - col.x;
      const dz = this.position.z - col.z;
      const minDist = col.radius + this.playerRadius;
      const distSq = dx * dx + dz * dz;
      if (distSq < minDist * minDist) {
        const dist = Math.sqrt(distSq) || 0.0001;
        const push = minDist - dist;
        this.position.x += (dx / dist) * push;
        this.position.z += (dz / dist) * push;
      }
    }

    // Jump & gravity
    if (this.isGrounded && (this.keys.has('Space') || this.jumpQueued)) {
      this.verticalVel = this.jumpSpeed;
      this.isGrounded = false;
    }
    this.jumpQueued = false;

    this.verticalVel += this.gravity * dt;
    this.position.y += this.verticalVel * dt;

    const newGroundY = getTerrainHeight(this.position.x, this.position.z);
    const minEyeY = newGroundY + this.eyeHeight;
    if (this.position.y <= minEyeY) {
      this.position.y = minEyeY;
      this.verticalVel = 0;
      this.isGrounded = true;
    } else {
      this.isGrounded = false;
    }

    const movedDist = Math.hypot(this.position.x - prevX, this.position.z - prevZ);
    const speedRatio = THREE.MathUtils.clamp(movedDist / (5.8 * dt || 1), 0, 1.65);

    if (this.isGrounded && movedDist > 0.001) {
      this.stepDistance += movedDist;
      const stepStride = wantSprint ? 2.65 : 2.15;
      if (this.stepDistance >= stepStride) {
        this.stepDistance = 0;
        this.audio.playFootstep(getSurfaceType(this.position.x, this.position.z));
      }
    }

    // Sync camera position & look rotation including damage flinch
    this.syncCamera();

    return {
      speedRatio,
      isSprinting: wantSprint && hasMove,
      isGrounded: this.isGrounded,
      inWater: newGroundY < WATER_LEVEL,
      surface,
    };
  }
}
