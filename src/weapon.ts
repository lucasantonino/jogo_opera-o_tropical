import * as THREE from 'three';
import { SoundEngine } from './audio';
import { EnemySystem } from './enemies';
import { TargetsSystem } from './targets';

export type WeaponId = 'rifle' | 'pistol' | 'knife';

export interface WeaponState {
  id: WeaponId;
  name: string;
  isMelee: boolean;
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
  headshot: boolean;
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

interface WeaponConfig {
  name: string;
  isMelee: boolean;
  auto: boolean;
  magSize: number;
  defaultReserve: number;
  fireInterval: number;
  reloadDuration: number;
  bodyDamage: number;
  range: number;
  adsFov: number;
  recoilZ: number;
  recoilPitch: number;
  camPitchKick: number;
  hipPos: THREE.Vector3;
  adsPos: THREE.Vector3;
}

const WEAPON_ORDER: WeaponId[] = ['rifle', 'pistol', 'knife'];

const WEAPON_CONFIGS: Record<WeaponId, WeaponConfig> = {
  rifle: {
    name: 'CARABINA M4',
    isMelee: false,
    auto: true,
    magSize: 30,
    defaultReserve: 120,
    fireInterval: 0.105,
    reloadDuration: 1.5,
    bodyDamage: 34,
    range: 180,
    adsFov: 54,
    recoilZ: 0.055,
    recoilPitch: 0.048,
    camPitchKick: 0.011,
    hipPos: new THREE.Vector3(0.26, -0.24, -0.48),
    adsPos: new THREE.Vector3(0.0, -0.145, -0.34),
  },
  pistol: {
    name: 'PISTOLA 9MM',
    isMelee: false,
    auto: false,
    magSize: 12,
    defaultReserve: 60,
    fireInterval: 0.18,
    reloadDuration: 1.15,
    bodyDamage: 42,
    range: 140,
    adsFov: 62,
    recoilZ: 0.068,
    recoilPitch: 0.085,
    camPitchKick: 0.014,
    hipPos: new THREE.Vector3(0.24, -0.23, -0.44),
    adsPos: new THREE.Vector3(0.0, -0.15, -0.36),
  },
  knife: {
    name: 'FACA TÁTICA',
    isMelee: true,
    auto: true,
    magSize: 0,
    defaultReserve: 0,
    fireInterval: 0.38,
    reloadDuration: 0,
    bodyDamage: 70,
    range: 3.4,
    adsFov: 75,
    recoilZ: 0,
    recoilPitch: 0,
    camPitchKick: 0.004,
    hipPos: new THREE.Vector3(0.27, -0.25, -0.42),
    adsPos: new THREE.Vector3(0.27, -0.25, -0.42),
  },
};

export class WeaponSystem {
  private readonly camera: THREE.PerspectiveCamera;
  private readonly worldScene: THREE.Scene;
  private readonly audio: SoundEngine;
  private readonly targets: TargetsSystem;
  private readonly enemies: EnemySystem;
  private readonly environmentObjects: THREE.Object3D[];

  private readonly root = new THREE.Group();
  private readonly recoilGroup = new THREE.Group();

  private readonly rifleGroup = new THREE.Group();
  private readonly pistolGroup = new THREE.Group();
  private readonly knifeGroup = new THREE.Group();

  private readonly rifleMagGroup = new THREE.Group();
  private readonly pistolMagGroup = new THREE.Group();
  private readonly pistolSlideGroup = new THREE.Group();

  private readonly rifleMuzzleTip = new THREE.Object3D();
  private readonly rifleEjectionPort = new THREE.Object3D();
  private readonly pistolMuzzleTip = new THREE.Object3D();
  private readonly pistolEjectionPort = new THREE.Object3D();

  private readonly muzzleFlashGroup = new THREE.Group();
  private readonly muzzleLight = new THREE.PointLight(0xffb347, 0, 7);

  private readonly raycaster = new THREE.Raycaster();
  private readonly screenCenter = new THREE.Vector2(0, 0);
  private readonly baseFov = 75;

  private activeId: WeaponId = 'rifle';
  private readonly ammo: Record<'rifle' | 'pistol', { mag: number; reserve: number }> = {
    rifle: { mag: 30, reserve: 120 },
    pistol: { mag: 12, reserve: 60 },
  };

  private fireCooldown = 0;
  private isFiringHeld = false;
  private pendingTrigger = false;
  private isAiming = false;
  private isReloading = false;
  private reloadTimer = 0;

  private emptyClickCooldown = 0;
  private muzzleFlashTimer = 0;
  private slideKick = 0;
  private slashTimer = 0;
  private readonly slashDuration = 0.24;
  private swapDip = 0;
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
    enemies: EnemySystem,
    environmentObjects: THREE.Object3D[]
  ) {
    this.camera = camera;
    this.worldScene = worldScene;
    this.audio = audio;
    this.targets = targets;
    this.enemies = enemies;
    this.environmentObjects = environmentObjects;

    this.buildViewmodels();
    this.applyWeaponVisibility();
    this.root.position.copy(WEAPON_CONFIGS.rifle.hipPos);
    this.camera.add(this.root);
  }

  private buildViewmodels(): void {
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
    const steelBladeMat = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      roughness: 0.24,
      metalness: 0.9,
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
    const sightDotMat = new THREE.MeshBasicMaterial({ color: 0x4ade80 });

    this.root.add(this.recoilGroup);
    this.recoilGroup.add(this.rifleGroup);
    this.recoilGroup.add(this.pistolGroup);
    this.recoilGroup.add(this.knifeGroup);

    // ========================
    // 1. RIFLE (CARABINA M4)
    // ========================
    const rifle = this.rifleGroup;
    const upperReceiver = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.062, 0.28), gunmetal);
    upperReceiver.position.set(0, 0.042, 0.04);
    rifle.add(upperReceiver);

    const lowerReceiver = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.048, 0.2), darkAlloy);
    lowerReceiver.position.set(0, -0.005, 0.06);
    rifle.add(lowerReceiver);

    const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.012, 0.48), darkAlloy);
    topRail.position.set(0, 0.079, -0.05);
    rifle.add(topRail);

    const sightBase = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.018, 0.082), darkAlloy);
    sightBase.position.set(0, 0.094, 0.02);
    rifle.add(sightBase);

    const sightLeftWall = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.056, 0.068), polymer);
    sightLeftWall.position.set(-0.021, 0.132, 0.02);
    rifle.add(sightLeftWall);

    const sightRightWall = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.056, 0.068), polymer);
    sightRightWall.position.set(0.021, 0.132, 0.02);
    rifle.add(sightRightWall);

    const sightTopHood = new THREE.Mesh(new THREE.BoxGeometry(0.049, 0.007, 0.068), polymer);
    sightTopHood.position.set(0, 0.162, 0.02);
    rifle.add(sightTopHood);

    const sightGlass = new THREE.Mesh(new THREE.PlaneGeometry(0.036, 0.046), opticGlassMat);
    sightGlass.position.set(0, 0.134, 0.02);
    rifle.add(sightGlass);

    const redDot = new THREE.Mesh(new THREE.SphereGeometry(0.0024, 8, 8), redDotMat);
    redDot.position.set(0, 0.145, 0.02);
    rifle.add(redDot);

    const handguard = new THREE.Mesh(new THREE.BoxGeometry(0.054, 0.058, 0.3), polymer);
    handguard.position.set(0, 0.042, -0.25);
    rifle.add(handguard);

    for (let i = 0; i < 4; i++) {
      const ventL = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.014, 0.032), darkAlloy);
      ventL.position.set(-0.028, 0.046, -0.15 - i * 0.058);
      rifle.add(ventL);

      const ventR = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.014, 0.032), darkAlloy);
      ventR.position.set(0.028, 0.046, -0.15 - i * 0.058);
      rifle.add(ventR);
    }

    const barrelGeo = new THREE.CylinderGeometry(0.011, 0.012, 0.24, 10);
    barrelGeo.rotateX(Math.PI / 2);
    const barrel = new THREE.Mesh(barrelGeo, darkAlloy);
    barrel.position.set(0, 0.044, -0.49);
    rifle.add(barrel);

    const muzzleBrakeGeo = new THREE.CylinderGeometry(0.016, 0.015, 0.055, 8);
    muzzleBrakeGeo.rotateX(Math.PI / 2);
    const muzzleBrake = new THREE.Mesh(muzzleBrakeGeo, gunmetal);
    muzzleBrake.position.set(0, 0.044, -0.625);
    rifle.add(muzzleBrake);

    const frontPost = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.034, 0.016), darkAlloy);
    frontPost.position.set(0, 0.088, -0.37);
    rifle.add(frontPost);

    const bufferTubeGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.18, 8);
    bufferTubeGeo.rotateX(Math.PI / 2);
    const bufferTube = new THREE.Mesh(bufferTubeGeo, darkAlloy);
    bufferTube.position.set(0, 0.038, 0.25);
    rifle.add(bufferTube);

    const stockBody = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.11, 0.16), polymer);
    stockBody.position.set(0, 0.01, 0.34);
    rifle.add(stockBody);

    const pistolGrip = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.11, 0.046), polymer);
    pistolGrip.position.set(0, -0.072, 0.13);
    pistolGrip.rotation.x = 0.28;
    rifle.add(pistolGrip);

    this.rifleMagGroup.position.set(0, -0.025, 0.01);
    const magUpper = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.095, 0.062), darkAlloy);
    magUpper.position.set(0, -0.045, 0);
    magUpper.rotation.x = -0.14;
    this.rifleMagGroup.add(magUpper);

    const magLower = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.075, 0.06), darkAlloy);
    magLower.position.set(0, -0.115, -0.016);
    magLower.rotation.x = -0.28;
    this.rifleMagGroup.add(magLower);
    rifle.add(this.rifleMagGroup);

    const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.068, 0.075), gloveMat);
    rightHand.position.set(0.012, -0.068, 0.135);
    rightHand.rotation.x = 0.24;
    rifle.add(rightHand);

    const rightForearm = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.074, 0.24), sleeveMat);
    rightForearm.position.set(0.065, -0.115, 0.28);
    rightForearm.rotation.set(0.28, -0.26, 0.12);
    rifle.add(rightForearm);

    const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.062, 0.064, 0.088), gloveMat);
    leftHand.position.set(-0.018, 0.016, -0.22);
    leftHand.rotation.z = 0.2;
    rifle.add(leftHand);

    const leftForearm = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.074, 0.34), sleeveMat);
    leftForearm.position.set(-0.13, -0.09, -0.03);
    leftForearm.rotation.set(-0.34, -0.45, -0.2);
    rifle.add(leftForearm);

    this.rifleMuzzleTip.position.set(0, 0.044, -0.66);
    rifle.add(this.rifleMuzzleTip);

    this.rifleEjectionPort.position.set(0.032, 0.048, 0.02);
    rifle.add(this.rifleEjectionPort);

    // ========================
    // 2. PISTOL (PISTOLA 9MM)
    // ========================
    const pistol = this.pistolGroup;
    const pFrame = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.032, 0.22), polymer);
    pFrame.position.set(0, 0.096, -0.02);
    pistol.add(pFrame);

    const pTriggerGuard = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.026, 0.055), polymer);
    pTriggerGuard.position.set(0, 0.072, 0.018);
    pistol.add(pTriggerGuard);

    const pGrip = new THREE.Mesh(new THREE.BoxGeometry(0.033, 0.115, 0.048), polymer);
    pGrip.position.set(0, 0.035, 0.065);
    pGrip.rotation.x = 0.28;
    pistol.add(pGrip);

    this.pistolMagGroup.position.set(0, 0.02, 0.068);
    const pMagBody = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.095, 0.034), darkAlloy);
    pMagBody.position.set(0, -0.02, 0);
    pMagBody.rotation.x = 0.28;
    this.pistolMagGroup.add(pMagBody);
    pistol.add(this.pistolMagGroup);

    // Reciprocating pistol slide aligned at y ≈ 0.15 for ADS sights
    this.pistolSlideGroup.position.set(0, 0.128, -0.025);
    const pSlide = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.036, 0.23), gunmetal);
    this.pistolSlideGroup.add(pSlide);

    const pFrontPost = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.012, 0.008), sightDotMat);
    pFrontPost.position.set(0, 0.022, -0.102);
    this.pistolSlideGroup.add(pFrontPost);

    const pRearL = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.011, 0.008), darkAlloy);
    pRearL.position.set(-0.009, 0.022, 0.102);
    this.pistolSlideGroup.add(pRearL);

    const pRearR = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.011, 0.008), darkAlloy);
    pRearR.position.set(0.009, 0.022, 0.102);
    this.pistolSlideGroup.add(pRearR);
    pistol.add(this.pistolSlideGroup);

    const pBarrelGeo = new THREE.CylinderGeometry(0.009, 0.009, 0.045, 8);
    pBarrelGeo.rotateX(Math.PI / 2);
    const pBarrel = new THREE.Mesh(pBarrelGeo, darkAlloy);
    pBarrel.position.set(0, 0.125, -0.145);
    pistol.add(pBarrel);

    const pRightHand = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.068, 0.072), gloveMat);
    pRightHand.position.set(0.008, 0.035, 0.072);
    pRightHand.rotation.x = 0.25;
    pistol.add(pRightHand);

    const pLeftHand = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.06, 0.068), gloveMat);
    pLeftHand.position.set(-0.014, 0.032, 0.058);
    pLeftHand.rotation.set(0.22, 0.35, 0.1);
    pistol.add(pLeftHand);

    const pRightArm = new THREE.Mesh(new THREE.BoxGeometry(0.068, 0.068, 0.26), sleeveMat);
    pRightArm.position.set(0.065, -0.025, 0.22);
    pRightArm.rotation.set(0.25, -0.22, 0.1);
    pistol.add(pRightArm);

    const pLeftArm = new THREE.Mesh(new THREE.BoxGeometry(0.064, 0.064, 0.28), sleeveMat);
    pLeftArm.position.set(-0.095, -0.035, 0.21);
    pLeftArm.rotation.set(0.24, 0.32, -0.12);
    pistol.add(pLeftArm);

    this.pistolMuzzleTip.position.set(0, 0.125, -0.18);
    pistol.add(this.pistolMuzzleTip);

    this.pistolEjectionPort.position.set(0.022, 0.135, -0.01);
    pistol.add(this.pistolEjectionPort);

    // ========================
    // 3. KNIFE (FACA TÁTICA)
    // ========================
    const knife = this.knifeGroup;
    const kGrip = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.13, 8), polymer);
    kGrip.position.set(0, 0.01, 0.02);
    kGrip.rotation.x = -0.35;
    knife.add(kGrip);

    const kGuard = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.014, 0.024), darkAlloy);
    kGuard.position.set(0, 0.072, -0.004);
    kGuard.rotation.x = -0.35;
    knife.add(kGuard);

    const kBladeBase = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.15, 0.034), steelBladeMat);
    kBladeBase.position.set(0, 0.145, -0.032);
    kBladeBase.rotation.x = -0.35;
    knife.add(kBladeBase);

    const kTipGeo = new THREE.ConeGeometry(0.018, 0.065, 4);
    kTipGeo.scale(0.22, 1, 1);
    const kTip = new THREE.Mesh(kTipGeo, steelBladeMat);
    kTip.position.set(0, 0.238, -0.067);
    kTip.rotation.x = -0.35;
    knife.add(kTip);

    const kHand = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.072, 0.072), gloveMat);
    kHand.position.set(0.008, 0.008, 0.024);
    kHand.rotation.x = -0.28;
    knife.add(kHand);

    const kArm = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.072, 0.3), sleeveMat);
    kArm.position.set(0.06, -0.06, 0.16);
    kArm.rotation.set(0.32, -0.28, 0.12);
    knife.add(kArm);

    // Shared 3D star muzzle flash (repositioned to active firearm muzzle tip)
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
    this.muzzleFlashGroup.visible = false;
    this.recoilGroup.add(this.muzzleFlashGroup);

    this.muzzleLight.position.set(0, 0.08, -0.5);
    this.recoilGroup.add(this.muzzleLight);

    // Disable shadow casting on all viewmodel meshes so it never casts artifacts onto terrain
    this.root.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
      }
    });
  }

  private applyWeaponVisibility(): void {
    this.rifleGroup.visible = this.activeId === 'rifle';
    this.pistolGroup.visible = this.activeId === 'pistol';
    this.knifeGroup.visible = this.activeId === 'knife';
  }

  selectWeapon(id: WeaponId): void {
    if (id === this.activeId) return;
    this.activeId = id;
    this.isReloading = false;
    this.reloadTimer = 0;
    this.fireCooldown = 0.22;
    this.slashTimer = 0;
    this.muzzleFlashTimer = 0;
    this.muzzleFlashGroup.visible = false;
    this.muzzleLight.intensity = 0;
    this.rifleMagGroup.position.y = -0.025;
    this.pistolMagGroup.position.y = 0.02;
    this.swapDip = 1.0;
    if (id === 'knife') {
      this.isAiming = false;
    }
    this.applyWeaponVisibility();
  }

  cycleWeapon(step: number): void {
    const idx = WEAPON_ORDER.indexOf(this.activeId);
    const nextIdx = (idx + step + WEAPON_ORDER.length) % WEAPON_ORDER.length;
    this.selectWeapon(WEAPON_ORDER[nextIdx]);
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
    this.isAiming = WEAPON_CONFIGS[this.activeId].isMelee ? false : aiming;
  }

  startReload(): void {
    const cfg = WEAPON_CONFIGS[this.activeId];
    if (cfg.isMelee || this.isReloading) return;
    const slot = this.ammo[this.activeId as 'rifle' | 'pistol'];
    if (slot.mag >= cfg.magSize || slot.reserve <= 0) return;
    this.isReloading = true;
    this.reloadTimer = 0;
    this.audio.playReload();
  }

  refillReserve(): void {
    this.ammo.rifle.reserve = WEAPON_CONFIGS.rifle.defaultReserve;
    this.ammo.pistol.reserve = WEAPON_CONFIGS.pistol.defaultReserve;
  }

  reset(): void {
    this.activeId = 'rifle';
    this.ammo.rifle.mag = WEAPON_CONFIGS.rifle.magSize;
    this.ammo.rifle.reserve = WEAPON_CONFIGS.rifle.defaultReserve;
    this.ammo.pistol.mag = WEAPON_CONFIGS.pistol.magSize;
    this.ammo.pistol.reserve = WEAPON_CONFIGS.pistol.defaultReserve;
    this.fireCooldown = 0;
    this.emptyClickCooldown = 0;
    this.isFiringHeld = false;
    this.pendingTrigger = false;
    this.isAiming = false;
    this.isReloading = false;
    this.reloadTimer = 0;
    this.adsBlend = 0;
    this.swapDip = 0;
    this.slashTimer = 0;
    this.slideKick = 0;
    this.recoilZ = 0;
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.swayX = 0;
    this.swayY = 0;
    this.muzzleFlashTimer = 0;
    this.muzzleFlashGroup.visible = false;
    this.muzzleLight.intensity = 0;
    this.rifleMagGroup.position.y = -0.025;
    this.pistolMagGroup.position.y = 0.02;
    this.pistolSlideGroup.position.z = -0.025;
    this.applyWeaponVisibility();
    this.camera.fov = this.baseFov;
    this.camera.updateProjectionMatrix();

    while (this.tracers.length > 0) {
      const tr = this.tracers.pop()!;
      this.worldScene.remove(tr.line);
      tr.line.geometry.dispose();
      (tr.line.material as THREE.Material).dispose();
    }
    while (this.casings.length > 0) {
      const c = this.casings.pop()!;
      this.worldScene.remove(c.mesh);
    }
    while (this.sparks.length > 0) {
      const s = this.sparks.pop()!;
      this.worldScene.remove(s.mesh);
    }
  }

  addMouseSway(dx: number, dy: number): void {
    const limit = 0.035;
    this.swayX = THREE.MathUtils.clamp(this.swayX - dx * 0.00018, -limit, limit);
    this.swayY = THREE.MathUtils.clamp(this.swayY + dy * 0.00018, -limit, limit);
  }

  getState(): WeaponState {
    const cfg = WEAPON_CONFIGS[this.activeId];
    if (cfg.isMelee) {
      return {
        id: this.activeId,
        name: cfg.name,
        isMelee: true,
        mag: 0,
        magSize: 0,
        reserve: 0,
        isReloading: false,
        isAiming: false,
      };
    }
    const slot = this.ammo[this.activeId as 'rifle' | 'pistol'];
    return {
      id: this.activeId,
      name: cfg.name,
      isMelee: false,
      mag: slot.mag,
      magSize: cfg.magSize,
      reserve: slot.reserve,
      isReloading: this.isReloading,
      isAiming: this.isAiming && !this.isReloading,
    };
  }

  private performKnifeSlash(cfg: WeaponConfig): ShotOutcome {
    this.fireCooldown = cfg.fireInterval;
    this.slashTimer = this.slashDuration;
    this.audio.playKnifeSlash();

    this.raycaster.setFromCamera(this.screenCenter, this.camera);
    this.raycaster.far = cfg.range;
    const allTargets = [
      ...this.enemies.shootableObjects,
      ...this.targets.shootableObjects,
      ...this.environmentObjects,
    ];
    const hits = this.raycaster.intersectObjects(allTargets, true);
    this.raycaster.far = Infinity;

    let hitTarget = false;
    let targetDestroyed = false;
    let headshot = false;

    if (hits.length > 0) {
      const first = hits[0];
      const hitPoint = first.point.clone();
      if (first.object.userData.enemyId !== undefined) {
        const res = this.enemies.hitEnemy(first.object, hitPoint, cfg.bodyDamage);
        if (res.hit) {
          hitTarget = true;
          targetDestroyed = res.killed;
          headshot = res.headshot;
          if (res.headshot) {
            this.audio.playHeadshot();
          } else {
            this.audio.playHit(res.killed);
          }
          this.spawnImpactParticles(
            hitPoint,
            first.face?.normal,
            res.headshot ? 0xfacc15 : 0xff4444,
            res.headshot ? 10 : 7
          );
        }
      } else {
        const res = this.targets.hitTarget(first.object, hitPoint, first.face?.normal);
        if (res.hit) {
          hitTarget = true;
          targetDestroyed = res.destroyed;
          this.audio.playHit(res.destroyed);
          this.spawnImpactParticles(hitPoint, first.face?.normal, 0xdeb887, 7);
        } else {
          this.spawnImpactParticles(hitPoint, first.face?.normal, 0xe7d39f, 4);
        }
      }
    }

    return {
      fired: true,
      hitTarget,
      targetDestroyed,
      headshot,
      pitchKick: cfg.camPitchKick,
      yawKick: 0,
    };
  }

  private fireShot(): ShotOutcome {
    const cfg = WEAPON_CONFIGS[this.activeId];
    if (cfg.isMelee) {
      return this.performKnifeSlash(cfg);
    }

    const slot = this.ammo[this.activeId as 'rifle' | 'pistol'];
    if (slot.mag <= 0) {
      if (this.emptyClickCooldown <= 0) {
        this.audio.playEmptyClick();
        this.emptyClickCooldown = 0.28;
        if (slot.reserve > 0) {
          this.startReload();
        }
      }
      return {
        fired: false,
        hitTarget: false,
        targetDestroyed: false,
        headshot: false,
        pitchKick: 0,
        yawKick: 0,
      };
    }

    slot.mag--;
    this.fireCooldown = cfg.fireInterval;
    if (this.activeId === 'pistol') {
      this.audio.playPistolShot();
      this.slideKick = 0.042;
    } else {
      this.audio.playShot();
    }

    // Recoil kick
    const adsScale = this.isAiming ? 0.55 : 1.0;
    this.recoilZ = Math.min(this.recoilZ + cfg.recoilZ * adsScale, 0.12);
    this.recoilPitch = Math.min(this.recoilPitch + cfg.recoilPitch * adsScale, 0.14);
    this.recoilYaw += (Math.random() - 0.5) * 0.025 * adsScale;

    const pitchKick = cfg.camPitchKick * adsScale;
    const yawKick = (Math.random() - 0.5) * 0.006 * adsScale;

    const muzzleAnchor = this.activeId === 'pistol' ? this.pistolMuzzleTip : this.rifleMuzzleTip;
    const ejectAnchor = this.activeId === 'pistol' ? this.pistolEjectionPort : this.rifleEjectionPort;

    // Muzzle flash positioned at active firearm muzzle
    this.muzzleFlashTimer = 0.045;
    this.muzzleFlashGroup.position.copy(muzzleAnchor.position);
    this.muzzleFlashGroup.visible = true;
    this.muzzleFlashGroup.rotation.z = Math.random() * Math.PI * 2;
    this.muzzleFlashGroup.scale.setScalar((this.activeId === 'pistol' ? 0.68 : 0.85) + Math.random() * 0.3);
    this.muzzleLight.intensity = 3.0;

    this.spawnShellCasing(ejectAnchor);

    // Hitscan raycast from exact screen center
    this.raycaster.setFromCamera(this.screenCenter, this.camera);
    this.raycaster.far = cfg.range;
    const allTargets = [
      ...this.enemies.shootableObjects,
      ...this.targets.shootableObjects,
      ...this.environmentObjects,
    ];
    const hits = this.raycaster.intersectObjects(allTargets, true);
    this.raycaster.far = Infinity;

    const muzzleWorld = new THREE.Vector3();
    muzzleAnchor.getWorldPosition(muzzleWorld);

    let hitPoint: THREE.Vector3;
    let hitTarget = false;
    let targetDestroyed = false;
    let headshot = false;

    if (hits.length > 0) {
      const first = hits[0];
      hitPoint = first.point.clone();

      if (first.object.userData.enemyId !== undefined) {
        const res = this.enemies.hitEnemy(first.object, hitPoint, cfg.bodyDamage);
        if (res.hit) {
          hitTarget = true;
          targetDestroyed = res.killed;
          headshot = res.headshot;
          if (res.headshot) {
            this.audio.playHeadshot();
          } else {
            this.audio.playHit(res.killed);
          }
          this.spawnImpactParticles(
            hitPoint,
            first.face?.normal,
            res.headshot ? 0xfacc15 : 0xff4444,
            res.headshot ? 10 : 7
          );
        }
      } else {
        const res = this.targets.hitTarget(first.object, hitPoint, first.face?.normal);
        if (res.hit) {
          hitTarget = true;
          targetDestroyed = res.destroyed;
          this.audio.playHit(res.destroyed);
          this.spawnImpactParticles(hitPoint, first.face?.normal, 0xdeb887, 7);
        } else {
          this.spawnImpactParticles(hitPoint, first.face?.normal, 0xe7d39f, 5);
        }
      }
    } else {
      const dir = new THREE.Vector3();
      this.camera.getWorldDirection(dir);
      hitPoint = muzzleWorld.clone().addScaledVector(dir, cfg.range);
    }

    this.spawnTracer(muzzleWorld, hitPoint);
    return { fired: true, hitTarget, targetDestroyed, headshot, pitchKick, yawKick };
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

  private spawnShellCasing(port: THREE.Object3D): void {
    const mesh = new THREE.Mesh(this.casingGeo, this.casingMat);
    const start = new THREE.Vector3();
    port.getWorldPosition(start);
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
    this.swapDip = Math.max(0, this.swapDip - dt * 5.2);
    this.slideKick = THREE.MathUtils.lerp(this.slideKick, 0, Math.min(1, dt * 22));
    this.pistolSlideGroup.position.z = -0.025 + this.slideKick;

    if (this.slashTimer > 0) {
      this.slashTimer = Math.max(0, this.slashTimer - dt);
    }

    const cfg = WEAPON_CONFIGS[this.activeId];

    // Muzzle flash decay
    if (this.muzzleFlashTimer > 0) {
      this.muzzleFlashTimer -= dt;
      if (this.muzzleFlashTimer <= 0) {
        this.muzzleFlashGroup.visible = false;
        this.muzzleLight.intensity = 0;
      }
    }

    // Reload timer
    if (this.isReloading && !cfg.isMelee) {
      this.reloadTimer += dt;
      const t = Math.min(1, this.reloadTimer / cfg.reloadDuration);

      const magGroup = this.activeId === 'pistol' ? this.pistolMagGroup : this.rifleMagGroup;
      const restY = this.activeId === 'pistol' ? 0.02 : -0.025;

      if (t < 0.35) {
        const drop = t / 0.35;
        magGroup.position.y = restY - drop * 0.22;
      } else if (t < 0.72) {
        const insert = (t - 0.35) / 0.37;
        magGroup.position.y = restY - 0.22 + insert * 0.22;
      } else {
        magGroup.position.y = restY;
      }

      if (this.reloadTimer >= cfg.reloadDuration) {
        const slot = this.ammo[this.activeId as 'rifle' | 'pistol'];
        const needed = cfg.magSize - slot.mag;
        const transfer = Math.min(needed, slot.reserve);
        slot.mag += transfer;
        slot.reserve -= transfer;
        this.isReloading = false;
        magGroup.position.y = restY;
      }
    }

    let shotOutcome: ShotOutcome = {
      fired: false,
      hitTarget: false,
      targetDestroyed: false,
      headshot: false,
      pitchKick: 0,
      yawKick: 0,
    };

    const wantsTrigger = cfg.auto ? this.isFiringHeld || this.pendingTrigger : this.pendingTrigger;
    if (isPlaying && wantsTrigger && !this.isReloading && this.fireCooldown <= 0) {
      this.pendingTrigger = false;
      shotOutcome = this.fireShot();
    } else if (!isPlaying || !cfg.auto) {
      this.pendingTrigger = false;
    }

    // ADS interpolation & dynamic FOV
    const wantAds = isPlaying && this.isAiming && !this.isReloading && !cfg.isMelee;
    this.adsBlend = THREE.MathUtils.lerp(this.adsBlend, wantAds ? 1 : 0, Math.min(1, dt * 14));
    const targetFov = THREE.MathUtils.lerp(this.baseFov, cfg.adsFov, this.adsBlend);
    if (Math.abs(this.camera.fov - targetFov) > 0.02) {
      this.camera.fov = targetFov;
      this.camera.updateProjectionMatrix();
    }

    // Walk bob & gentle idle breathing
    const bobAmp =
      isPlaying && moveSpeedRatio > 0.05
        ? (isSprinting ? 0.016 : 0.009) * (1 - this.adsBlend * 0.75)
        : 0;
    this.bobPhase += dt * (isSprinting ? 12.5 : 8.5) * Math.max(0.2, moveSpeedRatio);
    const bobX = Math.cos(this.bobPhase * 0.5) * bobAmp;
    const bobY = Math.abs(Math.sin(this.bobPhase)) * bobAmp * 1.25;
    const breatheY = Math.sin(this.idleTime * 1.9) * 0.0022 * (1 - this.adsBlend * 0.7);

    // Smooth sway recovery
    this.swayX = THREE.MathUtils.lerp(this.swayX, 0, Math.min(1, dt * 10));
    this.swayY = THREE.MathUtils.lerp(this.swayY, 0, Math.min(1, dt * 10));

    // Reload dip, swap dip, and knife slash swing
    const reloadDip =
      this.isReloading && cfg.reloadDuration > 0
        ? Math.sin((this.reloadTimer / cfg.reloadDuration) * Math.PI)
        : 0;
    const slashProgress = this.slashTimer > 0 ? 1 - this.slashTimer / this.slashDuration : 0;
    const slashWave = this.slashTimer > 0 ? Math.sin(slashProgress * Math.PI) : 0;

    const basePos = cfg.hipPos.clone().lerp(cfg.adsPos, this.adsBlend);
    this.root.position.set(
      basePos.x + bobX + this.swayX * (1 - this.adsBlend * 0.65) - slashWave * 0.22,
      basePos.y - bobY + breatheY + this.swayY * (1 - this.adsBlend * 0.65) - reloadDip * 0.09 - this.swapDip * 0.14 + slashWave * 0.04,
      basePos.z - slashWave * 0.18
    );

    // Spring-recover recoil
    this.recoilZ = THREE.MathUtils.lerp(this.recoilZ, 0, Math.min(1, dt * 16));
    this.recoilPitch = THREE.MathUtils.lerp(this.recoilPitch, 0, Math.min(1, dt * 14));
    this.recoilYaw = THREE.MathUtils.lerp(this.recoilYaw, 0, Math.min(1, dt * 14));

    this.recoilGroup.position.set(0, 0, this.recoilZ);
    this.recoilGroup.rotation.set(
      this.recoilPitch - reloadDip * 0.42 - slashWave * 0.72,
      this.recoilYaw + reloadDip * 0.35 + slashWave * 0.85,
      reloadDip * 0.48 + slashWave * 0.65
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
