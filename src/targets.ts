import * as THREE from 'three';
import { Collider, createSeededRandom, getTerrainHeight, SPAWN_X, SPAWN_Z } from './island';

export interface HitResult {
  hit: boolean;
  destroyed: boolean;
  wasAlreadyCleared: boolean;
}

export interface TargetProgress {
  total: number;
  hitCount: number;
}

interface DebrisPiece {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  rotVelocity: THREE.Vector3;
  life: number;
}

interface BullseyeTarget {
  kind: 'bullseye';
  id: number;
  root: THREE.Group;
  hinge: THREE.Group;
  meshes: THREE.Object3D[];
  hp: number;
  maxHp: number;
  cleared: boolean;
  angle: number;
  angularVel: number;
}

interface CrateTarget {
  kind: 'crate';
  id: number;
  root: THREE.Group;
  body: THREE.Group;
  meshes: THREE.Object3D[];
  hp: number;
  maxHp: number;
  cleared: boolean;
  shakeTime: number;
  shakeIntensity: number;
  baseY: number;
}

type InteractiveTarget = BullseyeTarget | CrateTarget;

export interface TargetsSystem {
  group: THREE.Group;
  shootableObjects: THREE.Object3D[];
  hitTarget(object: THREE.Object3D, point: THREE.Vector3, normal?: THREE.Vector3): HitResult;
  getProgress(): TargetProgress;
  resetAll(): void;
  update(dt: number): void;
}

function createBullseyeTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const c = size / 2;
    ctx.fillStyle = '#e8dcc4';
    ctx.fillRect(0, 0, size, size);

    const rings: Array<[number, string]> = [
      [118, '#d93829'],
      [92, '#f8fafc'],
      [66, '#d93829'],
      [40, '#f8fafc'],
      [18, '#b91c1c'],
    ];
    for (const [r, color] of rings) {
      ctx.beginPath();
      ctx.arc(c, c, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createCrateTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#a47148';
    ctx.fillRect(0, 0, size, size);

    // Outer border planks
    ctx.strokeStyle = '#6f4523';
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, size - 14, size - 14);

    // Cross brace
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(14, 14);
    ctx.lineTo(size - 14, size - 14);
    ctx.moveTo(size - 14, 14);
    ctx.lineTo(14, size - 14);
    ctx.stroke();

    // Inner plank seams
    ctx.strokeStyle = 'rgba(62, 36, 16, 0.45)';
    ctx.lineWidth = 2;
    for (let y = 32; y < size; y += 24) {
      ctx.beginPath();
      ctx.moveTo(14, y);
      ctx.lineTo(size - 14, y);
      ctx.stroke();
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function findValidSpot(
  preferredX: number,
  preferredZ: number,
  colliders: Collider[],
  existing: Array<{ x: number; z: number }>
): { x: number; y: number; z: number } | null {
  for (let radius = 0; radius <= 14; radius += 1.5) {
    const steps = radius === 0 ? 1 : 12;
    for (let s = 0; s < steps; s++) {
      const a = (s / steps) * Math.PI * 2;
      const x = preferredX + Math.cos(a) * radius;
      const z = preferredZ + Math.sin(a) * radius;

      if (Math.hypot(x - SPAWN_X, z - SPAWN_Z) < 9) continue;
      const y = getTerrainHeight(x, z);
      if (y < 0.85 || y > 12.5) continue;

      let blocked = false;
      for (const col of colliders) {
        if (Math.hypot(x - col.x, z - col.z) < col.radius + 1.5) {
          blocked = true;
          break;
        }
      }
      if (blocked) continue;

      for (const other of existing) {
        if (Math.hypot(x - other.x, z - other.z) < 4.5) {
          blocked = true;
          break;
        }
      }
      if (blocked) continue;

      return { x, y, z };
    }
  }
  return null;
}

export function createTargets(scene: THREE.Scene, colliders: Collider[]): TargetsSystem {
  const group = new THREE.Group();
  const shootableObjects: THREE.Object3D[] = [];
  const targets: InteractiveTarget[] = [];
  const debris: DebrisPiece[] = [];
  const rng = createSeededRandom(77331);

  const bullseyeTex = createBullseyeTexture();
  const crateTex = createCrateTexture();

  const postMat = new THREE.MeshStandardMaterial({ color: 0x5c3d24, roughness: 0.9 });
  const boardRimMat = new THREE.MeshStandardMaterial({ color: 0xc29b6b, roughness: 0.85 });
  const faceMat = new THREE.MeshStandardMaterial({ map: bullseyeTex, roughness: 0.65 });
  const centerZoneMat = new THREE.MeshBasicMaterial({
    color: 0xb91c1c,
    transparent: true,
    opacity: 0.01,
  });
  const crateMat = new THREE.MeshStandardMaterial({ map: crateTex, roughness: 0.82 });
  const debrisMat = new THREE.MeshStandardMaterial({ color: 0x9c6b43, roughness: 0.88 });

  // Curated sightline anchors around the island (first 3 visible straight ahead from spawn)
  const candidateCoords: Array<{ x: number; z: number; kind: 'bullseye' | 'crate' }> = [
    { x: -6, z: 30, kind: 'bullseye' },
    { x: 5, z: 27, kind: 'crate' },
    { x: 14, z: 33, kind: 'bullseye' },
    { x: -18, z: 24, kind: 'crate' },
    { x: -28, z: 8, kind: 'bullseye' },
    { x: 26, z: 14, kind: 'bullseye' },
    { x: 34, z: -8, kind: 'crate' },
    { x: -24, z: -22, kind: 'bullseye' },
    { x: 12, z: -32, kind: 'crate' },
    { x: -4, z: -12, kind: 'bullseye' },
    { x: 6, z: 4, kind: 'bullseye' },
    { x: -12, z: -38, kind: 'crate' },
  ];

  const placedCoords: Array<{ x: number; z: number }> = [];

  candidateCoords.forEach((spec, index) => {
    const spot = findValidSpot(spec.x, spec.z, colliders, placedCoords);
    if (!spot) return;

    placedCoords.push({ x: spot.x, z: spot.z });
    const id = index + 1;

    // Face roughly toward player spawn or island path for clear visibility
    const faceAngle = Math.atan2(SPAWN_X - spot.x, SPAWN_Z - spot.z);

    if (spec.kind === 'bullseye') {
      const root = new THREE.Group();
      root.position.set(spot.x, spot.y - 0.05, spot.z);
      root.rotation.y = faceAngle;

      // Ground support stake
      const basePost = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.55, 0.16), postMat);
      basePost.position.set(0, 0.275, 0);
      basePost.castShadow = true;
      basePost.receiveShadow = true;
      root.add(basePost);

      // Hinge pivots backward when knocked down
      const hinge = new THREE.Group();
      hinge.position.set(0, 0.45, 0);
      root.add(hinge);

      const neck = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.75, 0.12), postMat);
      neck.position.set(0, 0.38, 0);
      neck.castShadow = true;
      hinge.add(neck);

      // Circular wooden board + textured face
      const board = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 0.1, 20), boardRimMat);
      board.rotation.x = Math.PI / 2;
      board.position.set(0, 1.05, 0);
      board.castShadow = true;
      board.receiveShadow = true;
      board.userData.targetId = id;
      hinge.add(board);

      const frontFace = new THREE.Mesh(new THREE.CircleGeometry(0.65, 24), faceMat);
      frontFace.position.set(0, 1.05, 0.055);
      frontFace.userData.targetId = id;
      hinge.add(frontFace);

      const backFace = new THREE.Mesh(new THREE.CircleGeometry(0.65, 24), faceMat);
      backFace.rotation.y = Math.PI;
      backFace.position.set(0, 1.05, -0.055);
      backFace.userData.targetId = id;
      hinge.add(backFace);

      // Invisible center bullseye collider disc for instant 1-shot knockdown
      const bullseyeZone = new THREE.Mesh(new THREE.CircleGeometry(0.22, 16), centerZoneMat);
      bullseyeZone.position.set(0, 1.05, 0.062);
      bullseyeZone.userData.targetId = id;
      bullseyeZone.userData.isBullseye = true;
      hinge.add(bullseyeZone);

      const meshes = [board, frontFace, backFace, bullseyeZone];
      shootableObjects.push(...meshes);
      group.add(root);

      targets.push({
        kind: 'bullseye',
        id,
        root,
        hinge,
        meshes,
        hp: 2,
        maxHp: 2,
        cleared: false,
        angle: 0,
        angularVel: 0,
      });
    } else {
      const root = new THREE.Group();
      root.position.set(spot.x, spot.y - 0.04, spot.z);
      root.rotation.y = faceAngle + (rng() - 0.5) * 0.6;

      const body = new THREE.Group();
      root.add(body);

      const mainSize = 1.08;
      const crateMesh = new THREE.Mesh(new THREE.BoxGeometry(mainSize, mainSize, mainSize), crateMat);
      crateMesh.position.set(0, mainSize * 0.5, 0);
      crateMesh.castShadow = true;
      crateMesh.receiveShadow = true;
      crateMesh.userData.targetId = id;
      body.add(crateMesh);

      // Smaller top crate on half the crate sites for silhouette variety
      const meshes: THREE.Object3D[] = [crateMesh];
      if (index % 2 === 1) {
        const topSize = 0.68;
        const topCrate = new THREE.Mesh(new THREE.BoxGeometry(topSize, topSize, topSize), crateMat);
        topCrate.position.set(0.06, mainSize + topSize * 0.5, -0.04);
        topCrate.rotation.y = 0.35;
        topCrate.castShadow = true;
        topCrate.receiveShadow = true;
        topCrate.userData.targetId = id;
        body.add(topCrate);
        meshes.push(topCrate);
      }

      shootableObjects.push(...meshes);
      group.add(root);

      targets.push({
        kind: 'crate',
        id,
        root,
        body,
        meshes,
        hp: 3,
        maxHp: 3,
        cleared: false,
        shakeTime: 0,
        shakeIntensity: 0,
        baseY: 0,
      });
    }
  });

  scene.add(group);

  function spawnCrateDebris(origin: THREE.Vector3): void {
    const plankGeo = new THREE.BoxGeometry(0.45, 0.08, 0.16);
    for (let i = 0; i < 12; i++) {
      const mesh = new THREE.Mesh(plankGeo, debrisMat);
      mesh.position.set(
        origin.x + (Math.random() - 0.5) * 0.7,
        origin.y + 0.35 + Math.random() * 0.7,
        origin.z + (Math.random() - 0.5) * 0.7
      );
      mesh.castShadow = true;
      group.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 4.5;
      debris.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed,
          3.2 + Math.random() * 4.2,
          Math.sin(angle) * speed
        ),
        rotVelocity: new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 14
        ),
        life: 1.8 + Math.random() * 0.8,
      });
    }
  }

  return {
    group,
    shootableObjects,

    hitTarget(object: THREE.Object3D, point: THREE.Vector3): HitResult {
      const targetId = object.userData.targetId as number | undefined;
      if (targetId === undefined) {
        return { hit: false, destroyed: false, wasAlreadyCleared: false };
      }

      const target = targets.find((t) => t.id === targetId);
      if (!target) {
        return { hit: false, destroyed: false, wasAlreadyCleared: false };
      }

      if (target.cleared) {
        if (target.kind === 'bullseye') {
          target.angularVel -= 2.2;
        }
        return { hit: true, destroyed: false, wasAlreadyCleared: true };
      }

      if (target.kind === 'bullseye') {
        const isBullseyeHit = Boolean(object.userData.isBullseye);
        target.hp -= isBullseyeHit ? 2 : 1;
        target.angularVel -= isBullseyeHit ? 8.5 : 4.2;

        if (target.hp <= 0) {
          target.cleared = true;
          return { hit: true, destroyed: true, wasAlreadyCleared: false };
        }
        return { hit: true, destroyed: false, wasAlreadyCleared: false };
      } else {
        target.hp -= 1;
        target.shakeTime = 0.22;
        target.shakeIntensity = 0.08;

        if (target.hp <= 0) {
          target.cleared = true;
          target.body.visible = false;
          spawnCrateDebris(new THREE.Vector3(target.root.position.x, point.y - 0.2, target.root.position.z));
          return { hit: true, destroyed: true, wasAlreadyCleared: false };
        }
        return { hit: true, destroyed: false, wasAlreadyCleared: false };
      }
    },

    getProgress(): TargetProgress {
      let hitCount = 0;
      for (const t of targets) {
        if (t.cleared) hitCount++;
      }
      return { total: targets.length, hitCount };
    },

    resetAll(): void {
      for (const t of targets) {
        t.cleared = false;
        t.hp = t.maxHp;
        if (t.kind === 'bullseye') {
          t.angle = 0;
          t.angularVel = 0;
          t.hinge.rotation.x = 0;
        } else {
          t.body.visible = true;
          t.body.position.set(0, t.baseY, 0);
          t.body.rotation.set(0, 0, 0);
          t.shakeTime = 0;
        }
      }
    },

    update(dt: number): void {
      for (const t of targets) {
        if (t.kind === 'bullseye') {
          const targetRestAngle = t.cleared ? -Math.PI * 0.46 : 0;
          const stiffness = t.cleared ? 38 : 68;
          const damping = t.cleared ? 7.5 : 9.2;
          const force = (targetRestAngle - t.angle) * stiffness - t.angularVel * damping;
          t.angularVel += force * dt;
          t.angle += t.angularVel * dt;
          if (t.angle < -Math.PI * 0.49) {
            t.angle = -Math.PI * 0.49;
            t.angularVel *= -0.25;
          }
          t.hinge.rotation.x = t.angle;
        } else if (t.shakeTime > 0) {
          t.shakeTime = Math.max(0, t.shakeTime - dt);
          const s = (t.shakeTime / 0.22) * t.shakeIntensity;
          t.body.position.set((Math.random() - 0.5) * s, t.baseY, (Math.random() - 0.5) * s);
          t.body.rotation.z = (Math.random() - 0.5) * s * 1.4;
          if (t.shakeTime === 0) {
            t.body.position.set(0, t.baseY, 0);
            t.body.rotation.set(0, 0, 0);
          }
        }
      }

      // Update tumbling wooden crate debris
      for (let i = debris.length - 1; i >= 0; i--) {
        const piece = debris[i];
        piece.life -= dt;
        if (piece.life <= 0) {
          group.remove(piece.mesh);
          debris.splice(i, 1);
          continue;
        }
        piece.velocity.y -= 16 * dt;
        piece.mesh.position.addScaledVector(piece.velocity, dt);
        piece.mesh.rotation.x += piece.rotVelocity.x * dt;
        piece.mesh.rotation.y += piece.rotVelocity.y * dt;
        piece.mesh.rotation.z += piece.rotVelocity.z * dt;

        const floorY = getTerrainHeight(piece.mesh.position.x, piece.mesh.position.z) + 0.05;
        if (piece.mesh.position.y < floorY) {
          piece.mesh.position.y = floorY;
          piece.velocity.y = Math.abs(piece.velocity.y) * 0.25;
          piece.velocity.x *= 0.65;
          piece.velocity.z *= 0.65;
          piece.rotVelocity.multiplyScalar(0.5);
        }

        if (piece.life < 0.4) {
          piece.mesh.scale.setScalar(Math.max(0.01, piece.life / 0.4));
        }
      }
    },
  };
}
