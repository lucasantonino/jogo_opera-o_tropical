import * as THREE from 'three';
import { SoundEngine } from './audio';
import { getTerrainHeight, ISLAND2_CENTER_Z, IslandId } from './island';

export interface BoatState {
  partsCollected: number;
  partsRequired: number;
  activeDrops: number;
  isRepaired: boolean;
  isSailing: boolean;
  currentIsland: IslandId;
  nearbyPrompt: string | null;
}

export interface PartPickupEvent {
  collected: boolean;
  partName: string;
}

export interface BoatSystem {
  group: THREE.Group;
  spawnPartDrop(worldPos: THREE.Vector3): void;
  canBoard(playerPos: THREE.Vector3): boolean;
  startVoyage(onArrive: (newIsland: IslandId, landingPos: THREE.Vector3) => void): boolean;
  getVoyagePose(): { position: THREE.Vector3; yaw: number; pitch: number } | null;
  getState(): BoatState;
  reset(): void;
  update(dt: number, isPlaying: boolean, playerPos: THREE.Vector3): PartPickupEvent;
}

interface PartDrop {
  group: THREE.Group;
  partMesh: THREE.Group;
  pos: THREE.Vector3;
  name: string;
  age: number;
}

interface SmokePuff {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  maxLife: number;
}

const PART_NAMES = ['Motor', 'Hélice', 'Bateria', 'Timão', 'Tanque'] as const;

function findShoreZ(startZ: number, endZ: number, step: number): number {
  for (let z = startZ; step < 0 ? z >= endZ : z <= endZ; z += step) {
    if (getTerrainHeight(0, z) < -0.25) {
      return z;
    }
  }
  return startZ;
}

export function createBoatSystem(scene: THREE.Scene, audio: SoundEngine): BoatSystem {
  const group = new THREE.Group();
  scene.add(group);

  const dock1Z = findShoreZ(-44, -95, -0.5);
  const dock2Z = findShoreZ(ISLAND2_CENTER_Z + 40, ISLAND2_CENTER_Z + 88, 0.5);

  const dock1Pos = new THREE.Vector3(0, 0.08, dock1Z - 1.2);
  const dock2Pos = new THREE.Vector3(0, 0.08, dock2Z + 1.2);

  // Build 3D Speedboat (local forward = -Z when yaw = 0, or build facing +Z and orient cleanly)
  const boatRoot = new THREE.Group();
  boatRoot.position.copy(dock1Pos);
  group.add(boatRoot);

  const hullMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.45, metalness: 0.1 });
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
  const deckMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.7 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6, metalness: 0.4 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.55,
    roughness: 0.15,
  });
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });

  // Main hull + bow (+Z is bow forward)
  const hull = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.85, 4.6), hullMat);
  hull.position.set(0, 0.25, 0);
  hull.castShadow = true;
  hull.receiveShadow = true;
  boatRoot.add(hull);

  const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.36, 0.2, 4.4), stripeMat);
  stripe.position.set(0, 0.42, 0);
  boatRoot.add(stripe);

  const bowGeo = new THREE.ConeGeometry(1.3, 1.9, 4);
  bowGeo.rotateY(Math.PI / 4);
  bowGeo.rotateX(Math.PI / 2);
  bowGeo.scale(1.24, 0.52, 1);
  const bow = new THREE.Mesh(bowGeo, hullMat);
  bow.position.set(0, 0.28, 3.15);
  bow.castShadow = true;
  boatRoot.add(bow);

  const deck = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.14, 3.8), deckMat);
  deck.position.set(0, 0.62, -0.1);
  deck.receiveShadow = true;
  boatRoot.add(deck);

  // Helm console + windshield + steering wheel
  const consoleBox = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.75, 0.7), darkMat);
  consoleBox.position.set(0, 0.98, 0.75);
  consoleBox.castShadow = true;
  boatRoot.add(consoleBox);

  const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.55, 0.08), glassMat);
  windshield.position.set(0, 1.25, 1.12);
  windshield.rotation.x = -0.45;
  boatRoot.add(windshield);

  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.035, 6, 14), darkMat);
  wheel.position.set(0, 1.2, 0.38);
  wheel.rotation.x = 0.5;
  boatRoot.add(wheel);

  // Outboard engine at stern (-Z)
  const engineMount = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.9, 0.65), darkMat);
  engineMount.position.set(0, 0.65, -2.45);
  engineMount.castShadow = true;
  boatRoot.add(engineMount);

  // Status beacon on helm mast
  const beaconPole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 6), darkMat);
  beaconPole.position.set(0.7, 1.2, -1.8);
  boatRoot.add(beaconPole);

  const beaconOrb = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), beaconMat);
  beaconOrb.position.set(0.7, 1.6, -1.8);
  boatRoot.add(beaconOrb);

  // Mooring posts on both docks so the dock spots look intentional
  const postMat = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.9 });
  for (const dockPos of [dock1Pos, dock2Pos]) {
    const dirSign = dockPos.z > -95 ? 1 : -1;
    const postZ = dockPos.z + dirSign * 4.5;
    const postY = getTerrainHeight(1.6, postZ);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 1.3, 8), postMat);
    post.position.set(1.6, postY + 0.55, postZ);
    post.castShadow = true;
    group.add(post);
  }

  // Face north toward Island 2 initially (local +Z bow -> rotation.y = Math.PI points toward -Z)
  boatRoot.rotation.y = Math.PI;

  const drops: PartDrop[] = [];
  const smokePuffs: SmokePuff[] = [];
  const smokeGeo = new THREE.SphereGeometry(0.24, 6, 6);
  const smokeMat = new THREE.MeshBasicMaterial({
    color: 0x64748b,
    transparent: true,
    opacity: 0.45,
  });

  const partsRequired = 5;
  let partsCollected = 0;
  let currentIsland: IslandId = 1;
  let isSailing = false;
  let sailTimer = 0;
  const sailDuration = 3.2;
  let sailFrom = new THREE.Vector3();
  let sailTo = new THREE.Vector3();
  let sailTargetIsland: IslandId = 2;
  let sailCallback: ((newIsland: IslandId, landingPos: THREE.Vector3) => void) | null = null;

  let smokeCooldown = 0;
  let timeAcc = 0;
  let nearbyPrompt: string | null = null;

  function buildPartMesh(): THREE.Group {
    const g = new THREE.Group();
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.45,
      roughness: 0.3,
      metalness: 0.75,
    });
    const cyanMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.55,
      roughness: 0.25,
      metalness: 0.6,
    });

    const core = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.36, 0.46), goldMat);
    core.castShadow = true;
    g.add(core);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.06, 6, 14), cyanMat);
    ring.rotation.x = Math.PI / 2;
    g.add(ring);

    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.34, 8, 8, 1, true), beamMat);
    beam.position.y = 4;
    g.add(beam);

    return g;
  }

  return {
    group,

    spawnPartDrop(worldPos: THREE.Vector3): void {
      const idx = Math.min(PART_NAMES.length - 1, partsCollected + drops.length);
      const name = PART_NAMES[idx];
      const dropGroup = new THREE.Group();
      const groundY = Math.max(0.2, getTerrainHeight(worldPos.x, worldPos.z));
      const pos = new THREE.Vector3(worldPos.x, groundY + 0.55, worldPos.z);
      dropGroup.position.copy(pos);

      const partMesh = buildPartMesh();
      dropGroup.add(partMesh);
      group.add(dropGroup);

      drops.push({
        group: dropGroup,
        partMesh,
        pos,
        name,
        age: 0,
      });
    },

    canBoard(playerPos: THREE.Vector3): boolean {
      if (isSailing || partsCollected < partsRequired) return false;
      const dist = Math.hypot(
        playerPos.x - boatRoot.position.x,
        playerPos.z - boatRoot.position.z
      );
      return dist <= 6.5;
    },

    startVoyage(onArrive: (newIsland: IslandId, landingPos: THREE.Vector3) => void): boolean {
      if (isSailing || partsCollected < partsRequired) return false;
      isSailing = true;
      sailTimer = 0;
      sailTargetIsland = currentIsland === 1 ? 2 : 1;
      sailFrom = (currentIsland === 1 ? dock1Pos : dock2Pos).clone();
      sailTo = (sailTargetIsland === 1 ? dock1Pos : dock2Pos).clone();
      sailCallback = onArrive;
      return true;
    },

    getVoyagePose(): { position: THREE.Vector3; yaw: number; pitch: number } | null {
      if (!isSailing) return null;
      const helmOffset = new THREE.Vector3(0, 2.05, 0.15);
      helmOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), boatRoot.rotation.y);
      const pos = boatRoot.position.clone().add(helmOffset);
      // Camera looks along -Z at yaw = 0; boat bow (+Z) points along rotation.y
      const camYaw = boatRoot.rotation.y + Math.PI;
      return { position: pos, yaw: camYaw, pitch: -0.05 };
    },

    getState(): BoatState {
      return {
        partsCollected,
        partsRequired,
        activeDrops: drops.length,
        isRepaired: partsCollected >= partsRequired,
        isSailing,
        currentIsland,
        nearbyPrompt,
      };
    },

    reset(): void {
      while (drops.length > 0) {
        const d = drops.pop()!;
        group.remove(d.group);
      }
      while (smokePuffs.length > 0) {
        const s = smokePuffs.pop()!;
        group.remove(s.mesh);
      }
      partsCollected = 0;
      currentIsland = 1;
      isSailing = false;
      sailTimer = 0;
      sailCallback = null;
      nearbyPrompt = null;
      boatRoot.position.copy(dock1Pos);
      boatRoot.rotation.set(0, Math.PI, 0);
      beaconMat.color.setHex(0xf59e0b);
    },

    update(dt: number, isPlaying: boolean, playerPos: THREE.Vector3): PartPickupEvent {
      timeAcc += dt;
      let pickup: PartPickupEvent = { collected: false, partName: '' };

      // Update beacon color based on repair status
      beaconMat.color.setHex(partsCollected >= partsRequired ? 0x22c55e : 0xf59e0b);

      // Update floating dropped parts & proximity pickup
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.age += dt;
        d.partMesh.rotation.y += dt * 2.1;
        d.group.position.y = d.pos.y + Math.sin(d.age * 3.2) * 0.14;

        if (isPlaying && !isSailing) {
          const distXZ = Math.hypot(playerPos.x - d.pos.x, playerPos.z - d.pos.z);
          if (distXZ <= 2.8) {
            partsCollected++;
            audio.playPickup();
            pickup = { collected: true, partName: d.name };
            group.remove(d.group);
            drops.splice(i, 1);
          }
        }
      }

      // Broken engine smoke particles while damaged
      if (partsCollected < partsRequired) {
        smokeCooldown -= dt;
        if (smokeCooldown <= 0) {
          smokeCooldown = 0.24;
          const puff = new THREE.Mesh(smokeGeo, smokeMat);
          puff.position.set(
            boatRoot.position.x + (Math.random() - 0.5) * 0.3,
            boatRoot.position.y + 1.1,
            boatRoot.position.z + (currentIsland === 1 ? 2.4 : -2.4)
          );
          group.add(puff);
          smokePuffs.push({
            mesh: puff,
            vel: new THREE.Vector3((Math.random() - 0.5) * 0.5, 1.4 + Math.random() * 0.6, (Math.random() - 0.5) * 0.5),
            life: 1.2,
            maxLife: 1.2,
          });
        }
      }

      for (let i = smokePuffs.length - 1; i >= 0; i--) {
        const s = smokePuffs[i];
        s.life -= dt;
        if (s.life <= 0) {
          group.remove(s.mesh);
          smokePuffs.splice(i, 1);
        } else {
          s.mesh.position.addScaledVector(s.vel, dt);
          const scale = 1 + (1 - s.life / s.maxLife) * 1.4;
          s.mesh.scale.setScalar(scale);
        }
      }

      // Boat sailing or gentle idle ocean bobbing
      if (isSailing) {
        sailTimer += dt;
        const t = Math.min(1, sailTimer / sailDuration);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        boatRoot.position.lerpVectors(sailFrom, sailTo, eased);
        boatRoot.position.y = 0.1 + Math.sin(timeAcc * 6.5) * 0.12;
        boatRoot.rotation.y = sailTargetIsland === 2 ? Math.PI : 0;
        boatRoot.rotation.x = -0.06 * Math.sin(t * Math.PI);
        boatRoot.rotation.z = Math.sin(timeAcc * 3.4) * 0.035;

        if (t >= 1) {
          isSailing = false;
          currentIsland = sailTargetIsland;
          boatRoot.position.copy(sailTo);
          boatRoot.rotation.set(0, currentIsland === 1 ? Math.PI : 0, 0);

          // Disembark onto dry sandy beach facing inland
          const landZ = currentIsland === 2 ? dock2Pos.z - 5.5 : dock1Pos.z + 5.5;
          const landY = getTerrainHeight(0, landZ) + 1.72;
          const landingPos = new THREE.Vector3(0, landY, landZ);
          sailCallback?.(currentIsland, landingPos);
          sailCallback = null;
        }
        nearbyPrompt = null;
      } else {
        boatRoot.position.y = 0.08 + Math.sin(timeAcc * 2.2) * 0.07;
        boatRoot.rotation.z = Math.sin(timeAcc * 1.7) * 0.025;
        boatRoot.rotation.y = currentIsland === 1 ? Math.PI : 0;

        // Nearby interaction prompt
        const distToBoat = Math.hypot(
          playerPos.x - boatRoot.position.x,
          playerPos.z - boatRoot.position.z
        );
        if (distToBoat <= 7.5) {
          if (partsCollected < partsRequired) {
            const missing = partsRequired - partsCollected;
            nearbyPrompt = `Lancha quebrada — faltam ${missing} peça${missing > 1 ? 's' : ''} (último inimigo de cada onda)`;
          } else {
            nearbyPrompt =
              currentIsland === 1
                ? '[E] Navegar para a Ilha 2'
                : '[E] Voltar para a Ilha 1';
          }
        } else {
          nearbyPrompt = null;
        }
      }

      return pickup;
    },
  };
}
