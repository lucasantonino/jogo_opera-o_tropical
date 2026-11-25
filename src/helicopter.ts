import * as THREE from 'three';
import { SoundEngine } from './audio';

export type HelicopterPhase = 'idle' | 'approaching' | 'dropping' | 'departing';

export interface HelicopterDropOrder {
  dropPos: THREE.Vector3;
  count: number;
}

export interface HelicopterSystem {
  group: THREE.Group;
  dispatchDrop(
    dropPos: THREE.Vector3,
    count: number,
    onEnemyDrop: (spawnPos: THREE.Vector3) => void
  ): void;
  dispatchWaveDrops(
    drops: HelicopterDropOrder[],
    onEnemyDrop: (spawnPos: THREE.Vector3) => void
  ): void;
  update(dt: number, isPlaying: boolean, playerPos: THREE.Vector3): void;
  isActive(): boolean;
  reset(): void;
}

interface HelicopterUnit {
  group: THREE.Group;
  mainRotor: THREE.Group;
  tailRotor: THREE.Group;
  beacon: THREE.Mesh;
  ropesGroup: THREE.Group;
  phase: HelicopterPhase;
  phaseTimer: number;
  startPos: THREE.Vector3;
  hoverPos: THREE.Vector3;
  departPos: THREE.Vector3;
  dropRemaining: number;
  dropIntervalTimer: number;
  dropCallback: ((spawnPos: THREE.Vector3) => void) | null;
  blinkOffset: number;
}

export function createHelicopterSystem(scene: THREE.Scene, audio: SoundEngine): HelicopterSystem {
  const rootGroup = new THREE.Group();
  scene.add(rootGroup);

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x364137, roughness: 0.62, metalness: 0.35 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1d2228, roughness: 0.5, metalness: 0.6 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    roughness: 0.15,
    metalness: 0.4,
    transparent: true,
    opacity: 0.62,
  });
  const rotorMat = new THREE.MeshStandardMaterial({ color: 0x11151b, roughness: 0.4, metalness: 0.7 });
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff2b2b });
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0xb89f74, roughness: 0.9 });

  const approachDuration = 2.4;
  const departDuration = 2.8;
  const pool: HelicopterUnit[] = [];
  let rotorSoundTimer = 0;
  let blinkTime = 0;

  function buildHelicopterUnit(index: number): HelicopterUnit {
    const group = new THREE.Group();
    group.visible = false;

    const fuselage = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.0, 5.4), bodyMat);
    fuselage.position.set(0, 0.2, 0);
    fuselage.castShadow = true;
    group.add(fuselage);

    const nose = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.5, 1.8), bodyMat);
    nose.position.set(0, -0.05, 3.3);
    nose.rotation.x = 0.2;
    nose.castShadow = true;
    group.add(nose);

    const canopy = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.1, 1.7), glassMat);
    canopy.position.set(0, 0.55, 2.75);
    canopy.rotation.x = 0.32;
    group.add(canopy);

    const turbinePod = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.75, 2.8), darkMat);
    turbinePod.position.set(0, 1.45, -0.2);
    turbinePod.castShadow = true;
    group.add(turbinePod);

    const tailBoom = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.65, 5.2), bodyMat);
    tailBoom.position.set(0, 0.55, -5.0);
    tailBoom.castShadow = true;
    group.add(tailBoom);

    const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.7, 1.05), darkMat);
    tailFin.position.set(0, 1.35, -7.2);
    tailFin.rotation.x = -0.22;
    tailFin.castShadow = true;
    group.add(tailFin);

    const horizStab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.14, 0.65), darkMat);
    horizStab.position.set(0, 0.6, -6.7);
    group.add(horizStab);

    for (const side of [-1, 1]) {
      const skid = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 4.8, 8), darkMat);
      skid.rotation.x = Math.PI / 2;
      skid.position.set(side * 1.15, -1.35, 0.4);
      group.add(skid);

      for (const strutZ of [-0.9, 1.5]) {
        const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.9, 6), darkMat);
        strut.position.set(side * 1.0, -0.95, strutZ);
        strut.rotation.z = side * 0.28;
        group.add(strut);
      }
    }

    const mainRotor = new THREE.Group();
    mainRotor.position.set(0, 1.98, 0.1);
    const rotorHub = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.4, 10), darkMat);
    mainRotor.add(rotorHub);
    for (let i = 0; i < 4; i++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.05, 5.4), rotorMat);
      blade.rotation.y = (i * Math.PI) / 2;
      blade.position.set(Math.sin(blade.rotation.y) * 2.7, 0.12, Math.cos(blade.rotation.y) * 2.7);
      blade.castShadow = true;
      mainRotor.add(blade);
    }
    group.add(mainRotor);

    const tailRotor = new THREE.Group();
    tailRotor.position.set(0.24, 1.45, -7.45);
    for (let i = 0; i < 2; i++) {
      const tBlade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.5, 0.16), rotorMat);
      tBlade.rotation.x = (i * Math.PI) / 2;
      tailRotor.add(tBlade);
    }
    group.add(tailRotor);

    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), beaconMat);
    beacon.position.set(0, 2.25, -7.2);
    group.add(beacon);

    const ropesGroup = new THREE.Group();
    for (const side of [-1, 1]) {
      const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 13.5, 6), ropeMat);
      rope.position.set(side * 0.95, -7.5, 0.3);
      ropesGroup.add(rope);
    }
    ropesGroup.visible = false;
    group.add(ropesGroup);

    rootGroup.add(group);

    return {
      group,
      mainRotor,
      tailRotor,
      beacon,
      ropesGroup,
      phase: 'idle',
      phaseTimer: 0,
      startPos: new THREE.Vector3(),
      hoverPos: new THREE.Vector3(),
      departPos: new THREE.Vector3(),
      dropRemaining: 0,
      dropIntervalTimer: 0,
      dropCallback: null,
      blinkOffset: index * 1.1,
    };
  }

  function getOrCreateUnit(index: number): HelicopterUnit {
    while (pool.length <= index) {
      pool.push(buildHelicopterUnit(pool.length));
    }
    return pool[index];
  }

  function dispatchWaveDrops(
    drops: HelicopterDropOrder[],
    onEnemyDrop: (spawnPos: THREE.Vector3) => void
  ): void {
    const validDrops = drops.filter((d) => d.count > 0);
    if (validDrops.length === 0) return;

    const baseAngle = Math.random() * Math.PI * 2;
    validDrops.forEach((order, i) => {
      const unit = getOrCreateUnit(i);
      const inAngle = baseAngle + (i / validDrops.length) * Math.PI * 2;
      const outAngle = inAngle + Math.PI + (Math.random() - 0.5) * 0.4;
      const altOffset = i * 1.4;

      unit.hoverPos.set(order.dropPos.x, order.dropPos.y + 14.5 + altOffset, order.dropPos.z);
      unit.startPos.set(
        order.dropPos.x + Math.cos(inAngle) * (115 + i * 14),
        order.dropPos.y + 28 + altOffset,
        order.dropPos.z + Math.sin(inAngle) * (115 + i * 14)
      );
      unit.departPos.set(
        order.dropPos.x + Math.cos(outAngle) * 135,
        order.dropPos.y + 30 + altOffset,
        order.dropPos.z + Math.sin(outAngle) * 135
      );

      unit.group.position.copy(unit.startPos);
      unit.group.visible = true;
      unit.ropesGroup.visible = false;

      unit.phase = 'approaching';
      unit.phaseTimer = -i * 0.35; // Slight staggered entry
      unit.dropRemaining = order.count;
      unit.dropIntervalTimer = 0.15;
      unit.dropCallback = onEnemyDrop;
    });

    rotorSoundTimer = 0;
  }

  return {
    group: rootGroup,

    dispatchDrop(
      dropPos: THREE.Vector3,
      count: number,
      onEnemyDrop: (spawnPos: THREE.Vector3) => void
    ): void {
      dispatchWaveDrops([{ dropPos, count }], onEnemyDrop);
    },

    dispatchWaveDrops,

    update(dt: number, isPlaying: boolean, playerPos: THREE.Vector3): void {
      if (!isPlaying) return;

      blinkTime += dt;
      let nearestDist = Infinity;
      let anyActive = false;

      for (const unit of pool) {
        if (unit.phase === 'idle') continue;
        anyActive = true;

        unit.mainRotor.rotation.y += dt * 26;
        unit.tailRotor.rotation.x += dt * 36;
        unit.beacon.visible = Math.sin((blinkTime + unit.blinkOffset) * 10) > 0;

        const d = unit.group.position.distanceTo(playerPos);
        if (d < nearestDist) nearestDist = d;

        if (unit.phase === 'approaching') {
          unit.phaseTimer += dt;
          const t = Math.max(0, Math.min(1, unit.phaseTimer / approachDuration));
          const eased = 1 - Math.pow(1 - t, 3);
          unit.group.position.lerpVectors(unit.startPos, unit.hoverPos, eased);

          const yaw = Math.atan2(unit.hoverPos.x - unit.startPos.x, unit.hoverPos.z - unit.startPos.z);
          unit.group.rotation.order = 'YXZ';
          unit.group.rotation.y = yaw;
          unit.group.rotation.x = 0.2 * (1 - eased);
          unit.group.rotation.z = 0;

          if (t >= 1) {
            unit.phase = 'dropping';
            unit.phaseTimer = 0;
            unit.ropesGroup.visible = true;
          }
        } else if (unit.phase === 'dropping') {
          unit.phaseTimer += dt;
          unit.group.position.x = unit.hoverPos.x + Math.sin(unit.phaseTimer * 1.8) * 0.25;
          unit.group.position.y = unit.hoverPos.y + Math.sin(unit.phaseTimer * 2.6) * 0.22;
          unit.group.position.z = unit.hoverPos.z + Math.cos(unit.phaseTimer * 1.5) * 0.25;
          unit.group.rotation.x = Math.sin(unit.phaseTimer * 2.1) * 0.03;
          unit.group.rotation.z = Math.cos(unit.phaseTimer * 1.9) * 0.04;

          if (unit.dropRemaining > 0) {
            unit.dropIntervalTimer -= dt;
            if (unit.dropIntervalTimer <= 0) {
              unit.dropIntervalTimer = 0.32;
              unit.dropRemaining--;
              const side = unit.dropRemaining % 2 === 0 ? -0.95 : 0.95;
              const spawnPos = new THREE.Vector3(
                unit.group.position.x + side + (Math.random() - 0.5) * 0.9,
                unit.group.position.y - 1.2,
                unit.group.position.z + (Math.random() - 0.5) * 0.9
              );
              unit.dropCallback?.(spawnPos);
            }
          } else if (unit.phaseTimer > 0.65) {
            unit.ropesGroup.visible = false;
            unit.phase = 'departing';
            unit.phaseTimer = 0;
          }
        } else if (unit.phase === 'departing') {
          unit.phaseTimer += dt;
          const t = Math.min(1, unit.phaseTimer / departDuration);
          const eased = t * t;
          unit.group.position.lerpVectors(unit.hoverPos, unit.departPos, eased);

          const yaw = Math.atan2(unit.departPos.x - unit.hoverPos.x, unit.departPos.z - unit.hoverPos.z);
          unit.group.rotation.order = 'YXZ';
          unit.group.rotation.y = yaw;
          unit.group.rotation.x = 0.24 * Math.min(1, t * 2.2);
          unit.group.rotation.z = 0.14 * Math.sin(t * Math.PI);

          if (t >= 1) {
            unit.phase = 'idle';
            unit.group.visible = false;
            unit.dropCallback = null;
          }
        }
      }

      if (anyActive) {
        rotorSoundTimer -= dt;
        if (rotorSoundTimer <= 0) {
          rotorSoundTimer = 0.14;
          audio.playHelicopterRotor(nearestDist);
        }
      }
    },

    isActive(): boolean {
      return pool.some((u) => u.phase !== 'idle');
    },

    reset(): void {
      for (const unit of pool) {
        unit.phase = 'idle';
        unit.phaseTimer = 0;
        unit.dropRemaining = 0;
        unit.dropCallback = null;
        unit.ropesGroup.visible = false;
        unit.group.visible = false;
      }
    },
  };
}
