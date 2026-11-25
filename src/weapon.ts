import * as THREE from 'three';
import { SoundEngine } from './audio';
import { TargetsSystem } from './targets';

export interface WeaponState {
  mag: number;
  magSize: number;
  reserve: number;
  isReloading: boolean;
  isAiming: boolean;
}

export interface ShotOutcome {
  fired: boolean;
  hitTarget: boolean;
  targetDestroyed: boolean;
  pitchKick: number;
  yawKick: number;
}

interface Tracer {
  line: THREE.Line;
  life: number;
  maxLife: number;
}

interface ShellCasing {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  rotVelocity: THREE.Vector3;
  life: number;
}

interface ImpactSpark {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
}

export class WeaponSystem {
  private readonly camera: THREE.PerspectiveCamera;
  private readonly worldScene: THREE.Scene;
  private readonly audio: SoundEngine;
  private readonly targets: TargetsSystem;
  private readonly environmentObjects: THREE.Object3D[];

  private readonly root = new THREE.Group();
  private readonly recoilGroup = new THREE.Group();
  private readonly magGroup = new THREE.Group();
  private readonly muzzleTip = new THREE.Object3D();
  private readonly ejectionPort = new THREE.Object3D();
  private readonly muzzleFlashGroup = new THREE.Group();
  private readonly muzzleLight = new THREE.PointLight(0xffb347, 0, 7);

  private readonly raycaster = new THREE.Raycaster();
  private readonly screenCenter = new THREE.Vector2(0, 0);

  private readonly hipPos = new THREE.Vector3(0.26, -0.24, -0.48);
  private readonly adsPos = new THREE.Vector3(0.0, -0.145, -0.34);
  private readonly baseFov = 75;
  private readonly adsFov = 54;

  private readonly magSize = 30;
  private mag = 30;
  private reserve = 120;
  private readonly fireInterval = 0.105;
  private fireCooldown = 0;

  private isFiringHeld = false;
  private pendingTrigger = false;
  private isAiming = false;
  private isReloading = false;
  private reloadTimer = 0;
  private readonly reloadDuration = 1.5;

  private emptyClickCooldown = 0;
  private muzzleFlashTimer = 0;
  private adsBlend = 0;

  // Recoil & sway springs
  private recoilZ = 0;
  private recoilPitch = 0;
  private recoilYaw = 0;
  private swayX = 0;
  private swayY = 0;
  private bobPhase = 0;
  private idleTime = 0;

  // Active world-space FX
  private readonly tracers: Tracer[] = [];
  private readonly casings: ShellCasing[] = [];
  private readonly sparks: ImpactSpark[] = [];

  private readonly casingGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.032, 6);
  private readonly casingMat = new THREE.MeshStandardMaterial({
    color: 0xd4a84f,
    roughness: 0.35,
    metalness: 0.85,
  });
  private readonly sparkGeo = new THREE.BoxGeometry(0.038, 0.038, 0.038);

  constructor(
    camera: THREE.PerspectiveCamera,
    worldScene: THREE.Scene,
    audio: SoundEngine,
    targets: TargetsSystem,
    environmentObjects: THREE.Object3D[]
  ) {
    this.camera = camera;
    this.worldScene = worldScene;
    this.audio = audio;
    this.targets = targets;
    this.environmentObjects = environmentObjects;

    this.buildViewmodel();
    this.root.position.copy(this.hipPos);
    this.camera.add(this.root);
  }

  private buildViewmodel(): void {
    const gunmetal = new THREE.MeshStandardMaterial({
      color: 0x262a30,
      roughness: 0.42,
      metalness: 0.72,
    });
    const darkAlloy = new THREE.MeshStandardMaterial({
      color: 0x17191d,
      roughness: 0.55,
      metalness: 0.55,
    });
    const polymer = new THREE.MeshStandardMaterial({
      color: 0x1f2329,
      roughness: 0.78,
      metalness: 0.15,
    });
    const gloveMat = new THREE.MeshStandardMaterial({
      color: 0x363a35,
      roughness: 0.85,
      metalness: 0.05,
    });
    const sleeveMat = new THREE.MeshStandardMaterial({
      color: 0x4b5744,
      roughness: 0.9,
      metalness: 0.04,
    });
    const opticGlassMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    const redDotMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a });

    const gun = this.recoilGroup;
    this.root.add(gun);

    // Upper & lower receiver aligned so optic dot sits around (0, 0.145, 0)
    const upperReceiver = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.062, 0.28), gunmetal);
    upperReceiver.position.set(0, 0.042, 0.04);
    gun.add(upperReceiver);

    const lowerReceiver = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.048, 0.2), darkAlloy);
    lowerReceiver.position.set(0, -0.005, 0.06);
    gun.add(lowerReceiver);

    // Top Picatinny rail
    const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.012, 0.48), darkAlloy);
    topRail.position.set(0, 0.079, -0.05);
    gun.add(topRail);

    // Holographic / Red-dot sight centered at y = 0.145 for clean ADS alignment
    const sightBase = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.018, 0.082), darkAlloy);
    sightBase.position.set(0, 0.094, 0.02);
    gun.add(sightBase);

    const sightLeftWall = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.056, 0.068), polymer);
    sightLeftWall.position.set(-0.021, 0.132, 0.02);
    gun.add(sightLeftWall);

    const sightRightWall = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.056, 0.068), polymer);
    sightRightWall.position.set(0.021, 0.132, 0.02);
    gun.add(sightRightWall);

    const sightTopHood = new THREE.Mesh(new THREE.BoxGeometry(0.049, 0.007, 0.068), polymer);
    sightTopHood.position.set(0, 0.162, 0.02);
    gun.add(sightTopHood);

    const sightGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.036, 0.046), opticGlassMat);
    sightGlass.position.set(0, 0.134, 0.02);
    gun.add(sightGlass);

    const redDot = new THREE.Mesh(new THREE.SphereGeometry(0.0024, 8, 8), redDotMat);
    redDot.position.set(0, 0.145, 0.02);
    gun.add(redDot);

    // Slotted tactical handguard
    const handguard = new THREE.Mesh(new THREE.BoxGeometry(0.054, 0.058, 0.3), polymer);
    handguard.position.set(0, 0.042, -0.25);
    gun.add(handguard);

    for (let i = 0; i < 4; i++) {
      const ventL = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.014, 0.032), darkAlloy);
      ventL.position.set(-0.028, 0.046, -0.15 - i * 0.058);
      gun.add(ventL);

      const ventR = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.014, 0.032), darkAlloy);
      ventR.position.set(0.028, 0.046, -0.15 - i * 0.058);
      gun.add(ventR);
    }

    // Barrel + gas block + muzzle brake
    const barrelGeo = new THREE.CylinderGeometry(0.011, 0.012, 0.24, 10);
    barrelGeo.rotateX(Math.PI / 2);
    const barrel = new THREE.Mesh(barrelGeo, darkAlloy);
    barrel.position.set(0, 0.044, -0.49);
    gun.add(barrel);

    const muzzleBrakeGeo = new THREE.CylinderGeometry(0.016, 0.015, 0.055, 8);
    muzzleBrakeGeo.rotateX(Math.PI / 2);
    const muzzleBrake = new THREE.Mesh(muzzleBrakeGeo, gunmetal);
    muzzleBrake.position.set(0, 0.044, -0.625);
    gun.add(muzzleBrake);

    // Front iron post
    const frontPost = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.034, 0.016), darkAlloy);
    frontPost.position.set(0, 0.088, -0.37);
    gun.add(frontPost);

    // Collapsible stock
    const bufferTubeGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.18, 8);
    bufferTubeGeo.rotateX(Math.PI / 2);
    const bufferTube = new THREE.Mesh(bufferTubeGeo, darkAlloy);
    bufferTube.position.set(0, 0.038, 0.25);
    gun.add(bufferTube);

    const stockBody = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.11, 0.16), polymer);
    stockBody.position.set(0, 0.01, 0.34);
    gun.add(stockBody);

    // Pistol grip
    const pistolGrip = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.11, 0.046), polymer);
    pistolGrip.position.set(0, -0.072, 0.13);
    pistolGrip.rotation.x = 0.28;
    gun.add(pistolGrip);

    // Angled detachable magazine
    this.magGroup.position.set(0, -0.025, 0.01);
    const magUpper = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.095, 0.062), darkAlloy);
    magUpper.position.set(0, -0.045, 0);
    magUpper.rotation.x = -0.14;
    this.magGroup.add(magUpper);

    const magLower = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.075, 0.06), darkAlloy);
    magLower.position.set(0, -0.115, -0.016);
    magLower.rotation.x = -0.28;
    this.magGroup.add(magLower);
    gun.add(this.magGroup);

    // Stylized gloved hands & forearms
    // Right trigger hand + arm
    const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.068, 0.075), gloveMat);
    rightHand.position.set(0.012, -0.068, 0.135);
    rightHand.rotation.x = 0.24;
    gun.add(rightHand);

    const rightForearm = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.074, 0.24), sleeveMat);
    rightForearm.position.set(0.065, -0.115, 0.28);
    rightForearm.rotation.set(0.28, -0.26, 0.12);
    gun.add(rightForearm);

    // Left support hand + arm
    const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.062, 0.064, 0.088), gloveMat);
    leftHand.position.set(-0.018, 0.016, -0.22);
    leftHand.rotation.z = 0.2;
    gun.add(leftHand);

    const leftForearm = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.074, 0.34), sleeveMat);
    leftForearm.position.set(-0.13, -0.09, -0.03);
    leftForearm.rotation.set(-0.34, -0.45, -0.2);
    gun.add(leftForearm);

    // Muzzle tip & ejection port anchors
    this.muzzleTip.position.set(0, 0.044, -0.66);
    gun.add(this.muzzleTip);

    this.ejectionPort.position.set(0.032, 0.048, 0.02);
    gun.add(this.ejectionPort);

    // 3D star muzzle flash
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffd275,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.18, 4), flashMat);
      fin.rotation.z = (i * Math.PI) / 3;
      fin.rotation.x = Math.PI / 2;
      fin.position.z = -0.06;
      this.muzzleFlashGroup.add(fin);
    }
    const coreFlash = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    this.muzzleFlashGroup.add(coreFlash);
    this.muzzleFlashGroup.position.copy(this.muzzleTip.position);
    this.muzzleFlashGroup.visible = false;
    gun.add(this.muzzleFlashGroup);

    this.muzzleLight.position.set(0, 0.06, -0.7);
    gun.add(this.muzzleLight);

    // Disable shadow casting on all viewmodel meshes so it never casts artifacts onto the terrain
    this.root.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
      }
    });
  }

  setFiringHeld(held: boolean): void {
    if (held && !this.isFiringHeld) {
      this.pendingTrigger = true;
    }
    this.isFiringHeld = held;
    if (!held) {
      this.emptyClickCooldown = 0;
    }
  }

  setAiming(aiming: boolean): void {
    this.isAiming = aiming;
  }

  startReload(): void {
    if (this.isReloading || this.mag >= this.magSize || this.reserve <= 0) return;
    this.isReloading = true;
    this.reloadTimer = 0;
    this.audio.playReload();
  }

  refillReserve(): void {
    this.reserve = 120;
  }

  addMouseSway(dx: number, dy: number): void {
    const limit = 0.035;
    this.swayX = THREE.MathUtils.clamp(this.swayX - dx * 0.00018, -limit, limit);
    this.swayY = THREE.MathUtils.clamp(this.swayY + dy * 0.00018, -limit, limit);
  }

  getState(): WeaponState {
    return {
      mag: this.mag,
      magSize: this.magSize,
      reserve: this.reserve,
      isReloading: this.isReloading,
      isAiming: this.isAiming && !this.isReloading,
    };
  }

  private fireShot(): ShotOutcome {
    if (this.mag <= 0) {
      if (this.emptyClickCooldown <= 0) {
        this.audio.playEmptyClick();
        this.emptyClickCooldown = 0.28;
        if (this.reserve > 0) {
          this.startReload();
        }
      }
      return { fired: false, hitTarget: false, targetDestroyed: false, pitchKick: 0, yawKick: 0 };
    }

    this.mag--;
    this.fireCooldown = this.fireInterval;
    this.audio.playShot();

    // Recoil kick
    const adsScale = this.isAiming ? 0.55 : 1.0;
    this.recoilZ = Math.min(this.recoilZ + 0.055 * adsScale, 0.11);
    this.recoilPitch = Math.min(this.recoilPitch + 0.048 * adsScale, 0.12);
    this.recoilYaw += (Math.random() - 0.5) * 0.025 * adsScale;

    const pitchKick = 0.011 * adsScale;
    const yawKick = (Math.random() - 0.5) * 0.006 * adsScale;

    // Muzzle flash
    this.muzzleFlashTimer = 0.045;
    this.muzzleFlashGroup.visible = true;
    this.muzzleFlashGroup.rotation.z = Math.random() * Math.PI * 2;
    this.muzzleFlashGroup.scale.setScalar(0.85 + Math.random() * 0.35);
    this.muzzleLight.intensity = 3.2;

    this.spawnShellCasing();

    // Hitscan raycast from exact screen center
    this.raycaster.setFromCamera(this.screenCenter, this.camera);
    const allTargets = [...this.targets.shootableObjects, ...this.environmentObjects];
    const hits = this.raycaster.intersectObjects(allTargets, true);

    const muzzleWorld = new THREE.Vector3();
    this.muzzleTip.getWorldPosition(muzzleWorld);

    let hitPoint: THREE.Vector3;
    let hitTarget = false;
    let targetDestroyed = false;

    if (hits.length > 0) {
      const first = hits[0];
      hitPoint = first.point.clone();

      const res = this.targets.hitTarget(first.object, hitPoint, first.face?.normal);
      if (res.hit) {
        hitTarget = true;
        targetDestroyed = res.destroyed;
        this.audio.playHit(res.destroyed);
        this.spawnImpactParticles(hitPoint, first.face?.normal, 0xdeb887, 7);
      } else {
        this.spawnImpactParticles(hitPoint, first.face?.normal, 0xe7d39f, 5);
      }
    } else {
      const dir = new THREE.Vector3();
      this.camera.getWorldDirection(dir);
      hitPoint = muzzleWorld.clone().addScaledVector(dir, 170);
    }

    this.spawnTracer(muzzleWorld, hitPoint);
    return { fired: true, hitTarget, targetDestroyed, pitchKick, yawKick };
  }

  private spawnTracer(start: THREE.Vector3, end: THREE.Vector3): void {
    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    const mat = new THREE.LineBasicMaterial({
      color: 0xfff3b0,
      transparent: true,
      opacity: 0.75,
    });
    const line = new THREE.Line(geo, mat);
    this.worldScene.add(line);
    this.tracers.push({ line, life: 0.055, maxLife: 0.055 });
  }

  private spawnShellCasing(): void {
    const mesh = new THREE.Mesh(this.casingGeo, this.casingMat);
    const start = new THREE.Vector3();
    this.ejectionPort.getWorldPosition(start);
    mesh.position.copy(start);

    const camQuat = new THREE.Quaternion();
    this.camera.getWorldQuaternion(camQuat);

    const right = new THREE.Vector3(1, 0.6, -0.1).normalize().applyQuaternion(camQuat);
    const vel = right.multiplyScalar(2.4 + Math.random() * 0.9);
    vel.y += 1.4 + Math.random() * 0.6;

    this.worldScene.add(mesh);
    this.casings.push({
      mesh,
      velocity: vel,
      rotVelocity: new THREE.Vector3(16, 22, 14),
      life: 0.9,
    });
  }

  private spawnImpactParticles(
    point: THREE.Vector3,
    normal: THREE.Vector3 | undefined,
    colorHex: number,
    count: number
  ): void {
    const mat = new THREE.MeshBasicMaterial({ color: colorHex });
    const n = normal ? normal.clone().normalize() : new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < count; i++) {
      const spark = new THREE.Mesh(this.sparkGeo, mat);
      spark.position.copy(point);
      this.worldScene.add(spark);

      const vel = n.clone().multiplyScalar(2.2 + Math.random() * 2.5);
      vel.x += (Math.random() - 0.5) * 3.2;
      vel.y += Math.random() * 2.4;
      vel.z += (Math.random() - 0.5) * 3.2;

      this.sparks.push({
        mesh: spark,
        velocity: vel,
        life: 0.25 + Math.random() * 0.18,
      });
    }
  }

  update(dt: number, isPlaying: boolean, moveSpeedRatio: number, isSprinting: boolean): ShotOutcome {
    this.idleTime += dt;
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.emptyClickCooldown = Math.max(0, this.emptyClickCooldown - dt);

    // Muzzle flash decay
    if (this.muzzleFlashTimer > 0) {
      this.muzzleFlashTimer -= dt;
      if (this.muzzleFlashTimer <= 0) {
        this.muzzleFlashGroup.visible = false;
        this.muzzleLight.intensity = 0;
      }
    }

    // Reload timer
    if (this.isReloading) {
      this.reloadTimer += dt;
      const t = Math.min(1, this.reloadTimer / this.reloadDuration);

      // Magazine drop/re-insert animation
      if (t < 0.35) {
        const drop = t / 0.35;
        this.magGroup.position.y = -0.025 - drop * 0.24;
      } else if (t < 0.72) {
        const insert = (t - 0.35) / 0.37;
        this.magGroup.position.y = -0.265 + insert * 0.24;
      } else {
        this.magGroup.position.y = -0.025;
      }

      if (this.reloadTimer >= this.reloadDuration) {
        const needed = this.magSize - this.mag;
        const transfer = Math.min(needed, this.reserve);
        this.mag += transfer;
        this.reserve -= transfer;
        this.isReloading = false;
        this.magGroup.position.y = -0.025;
      }
    }

    let shotOutcome: ShotOutcome = {
      fired: false,
      hitTarget: false,
      targetDestroyed: false,
      pitchKick: 0,
      yawKick: 0,
    };
    if (isPlaying && (this.isFiringHeld || this.pendingTrigger) && !this.isReloading && this.fireCooldown <= 0) {
      this.pendingTrigger = false;
      shotOutcome = this.fireShot();
    } else if (!isPlaying) {
      this.pendingTrigger = false;
    }

    // ADS interpolation & dynamic FOV
    const wantAds = isPlaying && this.isAiming && !this.isReloading;
    this.adsBlend = THREE.MathUtils.lerp(this.adsBlend, wantAds ? 1 : 0, Math.min(1, dt * 14));
    const targetFov = THREE.MathUtils.lerp(this.baseFov, this.adsFov, this.adsBlend);
    if (Math.abs(this.camera.fov - targetFov) > 0.02) {
      this.camera.fov = targetFov;
      this.camera.updateProjectionMatrix();
    }

    // Walk bob & gentle idle breathing
    const bobAmp = isPlaying && moveSpeedRatio > 0.05 ? (isSprinting ? 0.016 : 0.009) * (1 - this.adsBlend * 0.75) : 0;
    this.bobPhase += dt * (isSprinting ? 12.5 : 8.5) * Math.max(0.2, moveSpeedRatio);
    const bobX = Math.cos(this.bobPhase * 0.5) * bobAmp;
    const bobY = Math.abs(Math.sin(this.bobPhase)) * bobAmp * 1.25;
    const breatheY = Math.sin(this.idleTime * 1.9) * 0.0022 * (1 - this.adsBlend * 0.7);

    // Smooth sway recovery
    this.swayX = THREE.MathUtils.lerp(this.swayX, 0, Math.min(1, dt * 10));
    this.swayY = THREE.MathUtils.lerp(this.swayY, 0, Math.min(1, dt * 10));

    // Apply reload tilt & hip->ADS position
    const reloadDip = this.isReloading ? Math.sin((this.reloadTimer / this.reloadDuration) * Math.PI) : 0;
    const basePos = this.hipPos.clone().lerp(this.adsPos, this.adsBlend);
    this.root.position.set(
      basePos.x + bobX + this.swayX * (1 - this.adsBlend * 0.65),
      basePos.y - bobY + breatheY + this.swayY * (1 - this.adsBlend * 0.65) - reloadDip * 0.09,
      basePos.z
    );

    // Spring-recover recoil
    this.recoilZ = THREE.MathUtils.lerp(this.recoilZ, 0, Math.min(1, dt * 16));
    this.recoilPitch = THREE.MathUtils.lerp(this.recoilPitch, 0, Math.min(1, dt * 14));
    this.recoilYaw = THREE.MathUtils.lerp(this.recoilYaw, 0, Math.min(1, dt * 14));

    this.recoilGroup.position.set(0, 0, this.recoilZ);
    this.recoilGroup.rotation.set(
      this.recoilPitch - reloadDip * 0.42,
      this.recoilYaw + reloadDip * 0.35,
      reloadDip * 0.48
    );

    // Update world-space tracers, brass casings, and sparks
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const tr = this.tracers[i];
      tr.life -= dt;
      if (tr.life <= 0) {
        this.worldScene.remove(tr.line);
        tr.line.geometry.dispose();
        (tr.line.material as THREE.Material).dispose();
        this.tracers.splice(i, 1);
      } else {
        (tr.line.material as THREE.LineBasicMaterial).opacity = (tr.life / tr.maxLife) * 0.8;
      }
    }

    for (let i = this.casings.length - 1; i >= 0; i--) {
      const c = this.casings[i];
      c.life -= dt;
      if (c.life <= 0) {
        this.worldScene.remove(c.mesh);
        this.casings.splice(i, 1);
      } else {
        c.velocity.y -= 13.5 * dt;
        c.mesh.position.addScaledVector(c.velocity, dt);
        c.mesh.rotation.x += c.rotVelocity.x * dt;
        c.mesh.rotation.y += c.rotVelocity.y * dt;
        c.mesh.rotation.z += c.rotVelocity.z * dt;
      }
    }

    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const s = this.sparks[i];
      s.life -= dt;
      if (s.life <= 0) {
        this.worldScene.remove(s.mesh);
        this.sparks.splice(i, 1);
      } else {
        s.velocity.y -= 12 * dt;
        s.mesh.position.addScaledVector(s.velocity, dt);
        s.mesh.scale.setScalar(Math.max(0.05, s.life / 0.35));
      }
    }

    return shotOutcome;
  }
}
