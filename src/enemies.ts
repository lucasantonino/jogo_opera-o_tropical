import * as THREE from 'three';
import { SoundEngine } from './audio';
import { HelicopterSystem } from './helicopter';
import {
  Collider,
  getIslandCenter,
  getTerrainHeight,
  ISLAND_RADIUS,
  ISLAND2_RADIUS,
  IslandId,
  MAX_WALK_DEPTH,
  SPAWN_X,
  SPAWN_Z,
} from './island';

export interface EnemyHitResult {
  hit: boolean;
  killed: boolean;
  headshot: boolean;
}

export interface EnemyProgress {
  wave: number;
  alive: number;
  totalInWave: number;
  kills: number;
}

export interface EnemyUpdateResult {
  waveCleared: boolean;
  clearedWave: number;
  lastKillPos: THREE.Vector3 | null;
}

interface EnemyUnit {
  id: number;
  root: THREE.Group;
  bodyGroup: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  muzzleTip: THREE.Object3D;
  muzzleFlash: THREE.Mesh;
  hpBarGroup: THREE.Group;
  hpFill: THREE.Mesh;
  hpFillMat: THREE.MeshBasicMaterial;
  flashMaterials: THREE.MeshStandardMaterial[];
  meshes: THREE.Object3D[];
  hp: number;
  maxHp: number;
  dead: boolean;
  dropping: boolean;
  deathTimer: number;
  hitFlashTimer: number;
  muzzleFlashTimer: number;
  knockbackVel: THREE.Vector3;
  walkPhase: number;
  strafeDir: number;
  strafeTimer: number;
  burstCooldown: number;
  burstRemaining: number;
  burstShotTimer: number;
  hasLos: boolean;
  losCheckTimer: number;
}

interface EnemyBolt {
  mesh: THREE.Mesh;
  pos: THREE.Vector3;
  prevPos: THREE.Vector3;
  vel: THREE.Vector3;
  life: number;
}

export interface EnemySystem {
  group: THREE.Group;
  shootableObjects: THREE.Object3D[];
  hitEnemy(object: THREE.Object3D, point: THREE.Vector3, bodyDamage?: number): EnemyHitResult;
  getProgress(): EnemyProgress;
  setActiveIsland(id: IslandId, playerPos: THREE.Vector3): void;
  reset(): void;
  update(
    dt: number,
    isPlaying: boolean,
    camera: THREE.Camera,
    playerPos: THREE.Vector3,
    onPlayerHit: (damage: number) => void
  ): EnemyUpdateResult;
}

function closestDistSqPointToSegmentY(
  p0: THREE.Vector3,
  p1: THREE.Vector3,
  cx: number,
  cz: number,
  yMin: number,
  yMax: number
): number {
  // Sample 3 points along the short frame step segment against the vertical player capsule axis
  let minSq = Infinity;
  for (let i = 0; i <= 2; i++) {
    const t = i * 0.5;
    const sx = p0.x + (p1.x - p0.x) * t;
    const sy = p0.y + (p1.y - p0.y) * t;
    const sz = p0.z + (p1.z - p0.z) * t;
    const clampedY = Math.max(yMin, Math.min(yMax, sy));
    const dx = sx - cx;
    const dy = sy - clampedY;
    const dz = sz - cz;
    const dSq = dx * dx + dy * dy + dz * dz;
    if (dSq < minSq) minSq = dSq;
  }
  return minSq;
}

function normalizeAngleDiff(target: number, current: number): number {
  let diff = (target - current) % (Math.PI * 2);
  if (diff > Math.PI) diff -= Math.PI * 2;
  if (diff < -Math.PI) diff += Math.PI * 2;
  return diff;
}

export function createEnemySystem(
  scene: THREE.Scene,
  colliders: Collider[],
  environmentObjects: THREE.Object3D[],
  audio: SoundEngine,
  helicopter: HelicopterSystem
): EnemySystem {
  const group = new THREE.Group();
  scene.add(group);

  const shootableObjects: THREE.Object3D[] = [];
  const enemies: EnemyUnit[] = [];
  const bolts: EnemyBolt[] = [];

  const raycaster = new THREE.Raycaster();
  const enemyRadius = 0.5;
  const boltGeo = new THREE.SphereGeometry(0.075, 6, 6);
  boltGeo.scale(1, 1, 3.2);
  const boltMat = new THREE.MeshBasicMaterial({ color: 0xff5a1f });
  const hpBgGeo = new THREE.PlaneGeometry(0.76, 0.09);
  const hpBgMat = new THREE.MeshBasicMaterial({
    color: 0x0f172a,
    transparent: true,
    opacity: 0.78,
    side: THREE.DoubleSide,
  });
  const hpFillGeo = new THREE.PlaneGeometry(0.7, 0.055);
  const rifleMat = new THREE.MeshStandardMaterial({ color: 0x1a1d22, roughness: 0.5, metalness: 0.65 });
  const flashMat = new THREE.MeshBasicMaterial({ color: 0xffb703 });
  const visorMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.2, metalness: 0.8 });

  let nextId = 1;
  let wave = 1;
  let totalInWave = 5;
  let kills = 0;
  let waveTransitionTimer = -1;
  let activeIsland: IslandId = 1;
  let pendingDrops = 0;
  let lastKillPos: THREE.Vector3 | null = null;

  function findDropZone(playerPos: THREE.Vector3): { x: number; y: number; z: number } {
    const center = getIslandCenter(activeIsland);
    const maxRadius = (activeIsland === 1 ? ISLAND_RADIUS : ISLAND2_RADIUS) - 8;

    for (let attempt = 0; attempt < 90; attempt++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 22 + Math.random() * 23; // 22m–45m from player
      const x = playerPos.x + Math.cos(angle) * dist;
      const z = playerPos.z + Math.sin(angle) * dist;

      if (Math.hypot(x - center.x, z - center.z) > maxRadius) continue;
      const y = getTerrainHeight(x, z);
      if (y <= 1.0 || y > 13.5) continue;

      let blocked = false;
      for (const col of colliders) {
        if (Math.hypot(x - col.x, z - col.z) < col.radius + 2.2) {
          blocked = true;
          break;
        }
      }
      if (blocked) continue;

      return { x, y, z };
    }

    // Fallback ring around active island center away from player
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      const x = center.x + Math.cos(a) * 24;
      const z = center.z + Math.sin(a) * 24;
      const y = getTerrainHeight(x, z);
      if (y > 1.0 && Math.hypot(x - playerPos.x, z - playerPos.z) > 15) {
        return { x, y, z };
      }
    }
    return { x: center.x, y: getTerrainHeight(center.x, center.z), z: center.z };
  }

  function buildEnemyUnit(x: number, y: number, z: number, dropping: boolean): EnemyUnit {
    const id = nextId++;
    const root = new THREE.Group();
    root.position.set(x, y, z);

    const bodyGroup = new THREE.Group();
    root.add(bodyGroup);

    // Per-enemy materials for isolated hit flash
    const legsMat = new THREE.MeshStandardMaterial({ color: 0x2a313b, roughness: 0.88 });
    const torsoMat = new THREE.MeshStandardMaterial({ color: 0x3b4834, roughness: 0.84 });
    const armorMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.55, metalness: 0.15 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xc99672, roughness: 0.85 });
    const helmetMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.58, metalness: 0.2 });

    const flashMaterials = [legsMat, torsoMat, armorMat, skinMat, helmetMat];
    const meshes: THREE.Object3D[] = [];

    const registerMesh = (mesh: THREE.Mesh, isHead = false): void => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.enemyId = id;
      if (isHead) mesh.userData.isHead = true;
      meshes.push(mesh);
      shootableObjects.push(mesh);
    };

    // Legs pivoting at hip height (y = 0.82)
    const leftLeg = new THREE.Group();
    leftLeg.position.set(-0.14, 0.82, 0);
    const lLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.82, 0.2), legsMat);
    lLegMesh.position.y = -0.41;
    registerMesh(lLegMesh);
    leftLeg.add(lLegMesh);
    bodyGroup.add(leftLeg);

    const rightLeg = new THREE.Group();
    rightLeg.position.set(0.14, 0.82, 0);
    const rLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.82, 0.2), legsMat);
    rLegMesh.position.y = -0.41;
    registerMesh(rLegMesh);
    rightLeg.add(rLegMesh);
    bodyGroup.add(rightLeg);

    // Torso & crimson tactical plates
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.64, 0.28), torsoMat);
    torso.position.set(0, 1.15, 0);
    registerMesh(torso);
    bodyGroup.add(torso);

    const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.42, 0.32), armorMat);
    chestPlate.position.set(0, 1.2, 0.01);
    registerMesh(chestPlate);
    bodyGroup.add(chestPlate);

    const leftPauldron = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.2, 0.28), armorMat);
    leftPauldron.position.set(-0.34, 1.38, 0);
    registerMesh(leftPauldron);
    bodyGroup.add(leftPauldron);

    const rightPauldron = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.2, 0.28), armorMat);
    rightPauldron.position.set(0.34, 1.38, 0);
    registerMesh(rightPauldron);
    bodyGroup.add(rightPauldron);

    // Arms & rifle facing +Z in local space
    const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.46, 0.14), torsoMat);
    leftArm.position.set(-0.31, 1.16, 0.2);
    leftArm.rotation.x = -Math.PI * 0.36;
    leftArm.rotation.z = 0.16;
    registerMesh(leftArm);
    bodyGroup.add(leftArm);

    const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.46, 0.14), torsoMat);
    rightArm.position.set(0.28, 1.14, 0.18);
    rightArm.rotation.x = -Math.PI * 0.42;
    registerMesh(rightArm);
    bodyGroup.add(rightArm);

    const rifle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.72), rifleMat);
    rifle.position.set(0.16, 1.12, 0.48);
    registerMesh(rifle);
    bodyGroup.add(rifle);

    const muzzleTip = new THREE.Object3D();
    muzzleTip.position.set(0.16, 1.13, 0.86);
    bodyGroup.add(muzzleTip);

    const muzzleFlash = new THREE.Mesh(new THREE.SphereGeometry(0.11, 6, 6), flashMat);
    muzzleFlash.position.copy(muzzleTip.position);
    muzzleFlash.visible = false;
    bodyGroup.add(muzzleFlash);

    // Head, helmet, and tactical visor (headshot hitbox)
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.28), skinMat);
    head.position.set(0, 1.63, 0);
    registerMesh(head, true);
    bodyGroup.add(head);

    const helmet = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.18, 0.34), helmetMat);
    helmet.position.set(0, 1.72, -0.01);
    registerMesh(helmet, true);
    bodyGroup.add(helmet);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.09, 0.06), visorMat);
    visor.position.set(0, 1.64, 0.14);
    registerMesh(visor, true);
    bodyGroup.add(visor);

    // Overhead mini HP bar (hidden at full health)
    const hpBarGroup = new THREE.Group();
    hpBarGroup.position.set(0, 2.15, 0);
    hpBarGroup.visible = false;

    const hpBg = new THREE.Mesh(hpBgGeo, hpBgMat);
    hpBarGroup.add(hpBg);

    const hpFillMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide });
    const hpFill = new THREE.Mesh(hpFillGeo, hpFillMat);
    hpFill.position.z = 0.006;
    hpBarGroup.add(hpFill);
    root.add(hpBarGroup);

    group.add(root);

    return {
      id,
      root,
      bodyGroup,
      leftLeg,
      rightLeg,
      muzzleTip,
      muzzleFlash,
      hpBarGroup,
      hpFill,
      hpFillMat,
      flashMaterials,
      meshes,
      hp: 100,
      maxHp: 100,
      dead: false,
      dropping,
      deathTimer: 0,
      hitFlashTimer: 0,
      muzzleFlashTimer: 0,
      knockbackVel: new THREE.Vector3(),
      walkPhase: Math.random() * Math.PI * 2,
      strafeDir: Math.random() > 0.5 ? 1 : -1,
      strafeTimer: 1.5 + Math.random() * 2.0,
      burstCooldown: 1.2 + Math.random() * 1.4,
      burstRemaining: 0,
      burstShotTimer: 0,
      hasLos: false,
      losCheckTimer: Math.random() * 0.25,
    };
  }

  function removeShootables(enemy: EnemyUnit): void {
    for (const m of enemy.meshes) {
      const idx = shootableObjects.indexOf(m);
      if (idx !== -1) shootableObjects.splice(idx, 1);
    }
  }

  function disposeEnemy(enemy: EnemyUnit): void {
    removeShootables(enemy);
    group.remove(enemy.root);
    for (const mat of enemy.flashMaterials) mat.dispose();
    enemy.hpFillMat.dispose();
  }

  function spawnWave(waveNum: number, playerPos: THREE.Vector3): void {
    wave = waveNum;
    totalInWave = Math.min(14, 5 + (waveNum - 1) * 2);
    pendingDrops = totalInWave;
    lastKillPos = null;

    const dropPt = findDropZone(playerPos);
    helicopter.dispatchDrop(new THREE.Vector3(dropPt.x, dropPt.y, dropPt.z), totalInWave, (chopperPos) => {
      pendingDrops = Math.max(0, pendingDrops - 1);
      const unit = buildEnemyUnit(chopperPos.x, chopperPos.y, chopperPos.z, true);
      enemies.push(unit);
    });
  }

  function spawnBolt(enemy: EnemyUnit, playerPos: THREE.Vector3): void {
    const start = new THREE.Vector3();
    enemy.muzzleTip.getWorldPosition(start);

    // Aim toward player chest/head area with subtle angular inaccuracy
    const aimPoint = playerPos.clone();
    aimPoint.y -= 0.25;
    const dir = aimPoint.sub(start).normalize();
    dir.x += (Math.random() - 0.5) * 0.085;
    dir.y += (Math.random() - 0.5) * 0.055;
    dir.z += (Math.random() - 0.5) * 0.085;
    dir.normalize();

    const mesh = new THREE.Mesh(boltGeo, boltMat);
    mesh.position.copy(start);
    mesh.lookAt(start.clone().add(dir));
    group.add(mesh);

    const speed = 46;
    bolts.push({
      mesh,
      pos: start.clone(),
      prevPos: start.clone(),
      vel: dir.multiplyScalar(speed),
      life: 2.2,
    });

    enemy.muzzleFlashTimer = 0.055;
    enemy.muzzleFlash.visible = true;
    audio.playEnemyShot(start.distanceTo(playerPos));
  }

  // Spawn initial wave facing island interior away from spawn
  spawnWave(1, new THREE.Vector3(SPAWN_X, getTerrainHeight(SPAWN_X, SPAWN_Z) + 1.72, SPAWN_Z));

  const tmpVec = new THREE.Vector3();

  return {
    group,
    shootableObjects,

    hitEnemy(object: THREE.Object3D, point: THREE.Vector3, bodyDamage = 34): EnemyHitResult {
      const enemyId = object.userData.enemyId as number | undefined;
      if (enemyId === undefined) {
        return { hit: false, killed: false, headshot: false };
      }

      const enemy = enemies.find((e) => e.id === enemyId);
      if (!enemy || enemy.dead) {
        return { hit: false, killed: false, headshot: false };
      }

      const headshot = Boolean(object.userData.isHead);
      const damage = headshot ? 100 : bodyDamage;
      enemy.hp = Math.max(0, enemy.hp - damage);
      enemy.hitFlashTimer = 0.12;

      for (const mat of enemy.flashMaterials) {
        mat.emissive.setHex(headshot ? 0xfacc15 : 0xff3b3b);
        mat.emissiveIntensity = 0.85;
      }

      // Small knockback away from shot impact
      const pushDir = enemy.root.position.clone().sub(point);
      pushDir.y = 0;
      if (pushDir.lengthSq() > 0.0001) {
        pushDir.normalize();
        enemy.knockbackVel.addScaledVector(pushDir, headshot ? 4.2 : 2.2);
      }

      // Update overhead HP bar
      const ratio = enemy.hp / enemy.maxHp;
      enemy.hpBarGroup.visible = enemy.hp > 0 && enemy.hp < enemy.maxHp;
      enemy.hpFill.scale.x = Math.max(0.01, ratio);
      enemy.hpFill.position.x = -(1 - ratio) * 0.35;
      enemy.hpFillMat.color.setHex(ratio > 0.5 ? 0x22c55e : ratio > 0.25 ? 0xf59e0b : 0xef4444);

      if (enemy.hp <= 0) {
        enemy.dead = true;
        enemy.dropping = false;
        enemy.deathTimer = 0;
        enemy.hpBarGroup.visible = false;
        enemy.muzzleFlash.visible = false;
        kills++;
        lastKillPos = new THREE.Vector3(
          enemy.root.position.x,
          getTerrainHeight(enemy.root.position.x, enemy.root.position.z),
          enemy.root.position.z
        );
        removeShootables(enemy);
        return { hit: true, killed: true, headshot };
      }

      return { hit: true, killed: false, headshot };
    },

    getProgress(): EnemyProgress {
      let alive = pendingDrops;
      for (const e of enemies) {
        if (!e.dead) alive++;
      }
      return { wave, alive, totalInWave, kills };
    },

    setActiveIsland(id: IslandId, playerPos: THREE.Vector3): void {
      activeIsland = id;
      while (enemies.length > 0) {
        const e = enemies.pop()!;
        disposeEnemy(e);
      }
      while (bolts.length > 0) {
        const b = bolts.pop()!;
        group.remove(b.mesh);
      }
      helicopter.reset();
      pendingDrops = 0;
      waveTransitionTimer = -1;
      spawnWave(wave + 1, playerPos);
    },

    reset(): void {
      while (enemies.length > 0) {
        const e = enemies.pop()!;
        disposeEnemy(e);
      }
      while (bolts.length > 0) {
        const b = bolts.pop()!;
        group.remove(b.mesh);
      }
      helicopter.reset();
      activeIsland = 1;
      kills = 0;
      pendingDrops = 0;
      lastKillPos = null;
      waveTransitionTimer = -1;
      spawnWave(1, new THREE.Vector3(SPAWN_X, getTerrainHeight(SPAWN_X, SPAWN_Z) + 1.72, SPAWN_Z));
    },

    update(
      dt: number,
      isPlaying: boolean,
      camera: THREE.Camera,
      playerPos: THREE.Vector3,
      onPlayerHit: (damage: number) => void
    ): EnemyUpdateResult {
      let waveCleared = false;
      let clearedWave = 0;

      // Update active enemy projectiles even briefly during decay
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.life -= dt;
        if (b.life <= 0 || !isPlaying) {
          if (b.life <= 0) {
            group.remove(b.mesh);
            bolts.splice(i, 1);
          }
          continue;
        }

        b.prevPos.copy(b.pos);
        b.pos.addScaledVector(b.vel, dt);
        b.mesh.position.copy(b.pos);

        // Terrain collision
        if (b.pos.y <= getTerrainHeight(b.pos.x, b.pos.z)) {
          group.remove(b.mesh);
          bolts.splice(i, 1);
          continue;
        }

        // Player hitbox cylinder/capsule check around player eye position
        const distSq = closestDistSqPointToSegmentY(
          b.prevPos,
          b.pos,
          playerPos.x,
          playerPos.z,
          playerPos.y - 1.4,
          playerPos.y + 0.2
        );
        if (distSq <= 0.65 * 0.65) {
          group.remove(b.mesh);
          bolts.splice(i, 1);
          onPlayerHit(12);
        }
      }

      let aliveCount = 0;

      for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];

        // Hit flash decay
        if (e.hitFlashTimer > 0) {
          e.hitFlashTimer -= dt;
          if (e.hitFlashTimer <= 0) {
            for (const mat of e.flashMaterials) {
              mat.emissive.setHex(0x000000);
              mat.emissiveIntensity = 0;
            }
          }
        }

        // Muzzle flash decay
        if (e.muzzleFlashTimer > 0) {
          e.muzzleFlashTimer -= dt;
          if (e.muzzleFlashTimer <= 0) {
            e.muzzleFlash.visible = false;
          }
        }

        if (e.dead) {
          e.deathTimer += dt;
          // Tip backwards cleanly onto ground over 0.55s, then sink after 3.5s
          const fallT = Math.min(1, e.deathTimer / 0.55);
          e.bodyGroup.rotation.x = -fallT * (Math.PI * 0.48);
          e.bodyGroup.position.y = -fallT * 0.25;
          if (e.deathTimer > 3.0) {
            const sink = (e.deathTimer - 3.0) / 0.6;
            e.root.position.y -= sink * dt * 1.6;
          }
          if (e.deathTimer >= 3.6) {
            disposeEnemy(e);
            enemies.splice(i, 1);
          }
          continue;
        }

        aliveCount++;

        if (e.hpBarGroup.visible) {
          e.hpBarGroup.lookAt(camera.position);
        }

        if (!isPlaying) continue;

        if (e.dropping) {
          e.root.position.y -= 9.0 * dt;
          const groundY = getTerrainHeight(e.root.position.x, e.root.position.z);
          if (e.root.position.y <= groundY) {
            e.root.position.y = groundY;
            e.dropping = false;
          }
          continue;
        }

        const ex = e.root.position.x;
        const ez = e.root.position.z;
        const dx = playerPos.x - ex;
        const dz = playerPos.z - ez;
        const dist = Math.hypot(dx, dz) || 0.001;

        // Smoothly rotate to face player
        const desiredYaw = Math.atan2(dx, dz);
        e.root.rotation.y += normalizeAngleDiff(desiredYaw, e.root.rotation.y) * Math.min(1, dt * 7);

        // Strafe direction switching
        e.strafeTimer -= dt;
        if (e.strafeTimer <= 0) {
          e.strafeDir *= -1;
          e.strafeTimer = 1.6 + Math.random() * 2.2;
        }

        const dirX = dx / dist;
        const dirZ = dz / dist;
        const perpX = -dirZ * e.strafeDir;
        const perpZ = dirX * e.strafeDir;

        let moveX = 0;
        let moveZ = 0;
        let moveSpeed = 0;

        if (dist > 24) {
          moveX = dirX + perpX * 0.25;
          moveZ = dirZ + perpZ * 0.25;
          moveSpeed = 3.9;
        } else if (dist >= 8) {
          moveX = perpX + (dist > 16 ? dirX * 0.22 : 0);
          moveZ = perpZ + (dist > 16 ? dirZ * 0.22 : 0);
          moveSpeed = 2.6;
        } else {
          moveX = -dirX * 0.75 + perpX * 0.65;
          moveZ = -dirZ * 0.75 + perpZ * 0.65;
          moveSpeed = 2.4;
        }

        const mLen = Math.hypot(moveX, moveZ);
        if (mLen > 0.001) {
          moveX = (moveX / mLen) * moveSpeed;
          moveZ = (moveZ / mLen) * moveSpeed;
        }

        // Apply movement + knockback decay
        let nextX = ex + (moveX + e.knockbackVel.x) * dt;
        let nextZ = ez + (moveZ + e.knockbackVel.z) * dt;
        e.knockbackVel.multiplyScalar(Math.max(0, 1 - dt * 8));

        // Shoreline depth clamp
        if (getTerrainHeight(nextX, nextZ) < MAX_WALK_DEPTH) {
          if (getTerrainHeight(nextX, ez) >= MAX_WALK_DEPTH) {
            nextZ = ez;
          } else if (getTerrainHeight(ex, nextZ) >= MAX_WALK_DEPTH) {
            nextX = ex;
          } else {
            nextX = ex;
            nextZ = ez;
          }
        }

        // Obstacle collider pushout
        for (const col of colliders) {
          const cx = nextX - col.x;
          const cz = nextZ - col.z;
          const minD = col.radius + enemyRadius;
          const dSq = cx * cx + cz * cz;
          if (dSq < minD * minD) {
            const d = Math.sqrt(dSq) || 0.001;
            const push = minD - d;
            nextX += (cx / d) * push;
            nextZ += (cz / d) * push;
          }
        }

        // Enemy-vs-enemy separation
        for (const other of enemies) {
          if (other === e || other.dead) continue;
          const ox = nextX - other.root.position.x;
          const oz = nextZ - other.root.position.z;
          const minSep = enemyRadius * 2.2;
          const dSq = ox * ox + oz * oz;
          if (dSq < minSep * minSep) {
            const d = Math.sqrt(dSq) || 0.001;
            const push = (minSep - d) * 0.5;
            nextX += (ox / d) * push;
            nextZ += (oz / d) * push;
          }
        }

        const moved = Math.hypot(nextX - ex, nextZ - ez);
        e.root.position.set(nextX, getTerrainHeight(nextX, nextZ), nextZ);

        // Leg walk cycle animation
        if (moved > 0.002) {
          e.walkPhase += dt * moveSpeed * 2.8;
          const swing = Math.sin(e.walkPhase) * 0.55;
          e.leftLeg.rotation.x = swing;
          e.rightLeg.rotation.x = -swing;
        } else {
          e.leftLeg.rotation.x = THREE.MathUtils.lerp(e.leftLeg.rotation.x, 0, Math.min(1, dt * 8));
          e.rightLeg.rotation.x = THREE.MathUtils.lerp(e.rightLeg.rotation.x, 0, Math.min(1, dt * 8));
        }

        // Periodic Line-of-Sight raycast against terrain, trees, and rocks
        e.losCheckTimer -= dt;
        if (e.losCheckTimer <= 0) {
          e.losCheckTimer = 0.25;
          if (dist <= 60) {
            const eyePos = tmpVec.set(nextX, e.root.position.y + 1.45, nextZ);
            const dirToPlayer = playerPos.clone().sub(eyePos);
            const totalDist = dirToPlayer.length();
            if (totalDist > 0.6) {
              dirToPlayer.divideScalar(totalDist);
              raycaster.set(eyePos, dirToPlayer);
              raycaster.far = totalDist - 0.5;
              const hits = raycaster.intersectObjects(environmentObjects, true);
              e.hasLos = hits.length === 0;
            } else {
              e.hasLos = true;
            }
          } else {
            e.hasLos = false;
          }
        }

        // Burst firing logic when having LOS
        if (e.burstRemaining > 0) {
          e.burstShotTimer -= dt;
          if (e.burstShotTimer <= 0) {
            if (e.hasLos) {
              spawnBolt(e, playerPos);
            }
            e.burstRemaining--;
            e.burstShotTimer = 0.16;
            if (e.burstRemaining <= 0) {
              e.burstCooldown = 1.6 + Math.random() * 1.1;
            }
          }
        } else {
          e.burstCooldown -= dt;
          if (e.burstCooldown <= 0 && e.hasLos && dist <= 52) {
            e.burstRemaining = 2 + Math.floor(Math.random() * 2); // 2-3 shots
            e.burstShotTimer = 0;
          }
        }
      }

      // Handle wave clearing and next wave spawn countdown
      let clearedDropPos: THREE.Vector3 | null = null;
      if (isPlaying) {
        if (aliveCount === 0 && pendingDrops === 0 && waveTransitionTimer < 0) {
          waveCleared = true;
          clearedWave = wave;
          clearedDropPos = lastKillPos;
          lastKillPos = null;
          waveTransitionTimer = 1.8;
        } else if (waveTransitionTimer >= 0) {
          waveTransitionTimer -= dt;
          if (waveTransitionTimer <= 0) {
            waveTransitionTimer = -1;
            spawnWave(wave + 1, playerPos);
          }
        }
      }

      return { waveCleared, clearedWave, lastKillPos: clearedDropPos };
    },
  };
}
