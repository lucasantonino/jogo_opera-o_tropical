import * as THREE from 'three';
import { SoundEngine } from './audio';
import { createBoatSystem } from './boat';
import { createEnemySystem } from './enemies';
import { createHelicopterSystem } from './helicopter';
import { createIsland } from './island';
import { PlayerController } from './player';
import { createTargets } from './targets';
import { TouchControls } from './touchControls';
import { WeaponSystem } from './weapon';

function requireEl<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing required DOM element #${id}`);
  return el as T;
}

const canvasContainer = requireEl<HTMLDivElement>('canvas-container');
const damageVignetteEl = requireEl<HTMLDivElement>('damage-vignette');
const bloodOverlayEl = requireEl<HTMLDivElement>('blood-overlay');
const overlayEl = requireEl<HTMLDivElement>('overlay');
const touchModeBtn = requireEl<HTMLButtonElement>('touch-mode-btn');
const playBtn = requireEl<HTMLButtonElement>('play-btn');
const gameoverOverlayEl = requireEl<HTMLDivElement>('gameover-overlay');
const gameoverWaveEl = requireEl<HTMLSpanElement>('gameover-wave');
const gameoverKillsEl = requireEl<HTMLSpanElement>('gameover-kills');
const restartBtn = requireEl<HTMLButtonElement>('restart-btn');
const waveCounterEl = requireEl<HTMLSpanElement>('wave-counter');
const enemyCounterEl = requireEl<HTMLSpanElement>('enemy-counter');
const killCounterEl = requireEl<HTMLSpanElement>('kill-counter');
const partsCounterEl = requireEl<HTMLSpanElement>('parts-counter');
const islandBadgeEl = requireEl<HTMLSpanElement>('island-badge');
const targetCounterEl = requireEl<HTMLSpanElement>('target-counter');
const healthValueEl = requireEl<HTMLSpanElement>('health-value');
const healthBarFillEl = requireEl<HTMLDivElement>('health-bar-fill');
const statusIndicatorEl = requireEl<HTMLDivElement>('status-indicator');
const toastEl = requireEl<HTMLDivElement>('toast');
const interactPromptEl = requireEl<HTMLDivElement>('interact-prompt');
const crosshairEl = requireEl<HTMLDivElement>('crosshair');
const hitmarkerEl = requireEl<HTMLDivElement>('hitmarker');
const reloadPromptEl = requireEl<HTMLDivElement>('reload-prompt');
const weaponNameEl = requireEl<HTMLDivElement>('weapon-name');
const ammoReadoutEl = requireEl<HTMLDivElement>('ammo-readout');
const ammoMagEl = requireEl<HTMLSpanElement>('ammo-mag');
const ammoReserveEl = requireEl<HTMLSpanElement>('ammo-reserve');
const weaponSlotEls = Array.from(document.querySelectorAll<HTMLElement>('.weapon-slot'));

// Three.js scene, camera, and renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.05,
  750
);
// Crucial: add camera to scene so camera-mounted weapon viewmodel renders
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
canvasContainer.appendChild(renderer.domElement);

// Game systems
const audio = new SoundEngine();
const island = createIsland(scene);
const targets = createTargets(scene, island.colliders);
const helicopter = createHelicopterSystem(scene, audio);
const boat = createBoatSystem(scene, audio);
const enemies = createEnemySystem(
  scene,
  island.colliders,
  island.shootableEnvironment,
  audio,
  helicopter
);
const player = new PlayerController(camera, island.colliders, audio);
const weapon = new WeaponSystem(
  camera,
  scene,
  audio,
  targets,
  enemies,
  island.shootableEnvironment
);

let isPlaying = false;
let hasStarted = false;
let pointerLockFallback = false;
let attemptingPointerLock = false;
let lastPointerX: number | null = null;
let lastPointerY: number | null = null;
let spreadFlashTimer = 0;
let resetScheduled = false;
let resetCountdown = 0;
let toastTimer = 0;
let gameOverShown = false;
let touchModeEnabled = TouchControls.isTouchDevice();
let touchModeManuallyToggled = false;
let touchAdsActive = false;

function tryBoardBoat(): void {
  if (!isPlaying || gameOverShown) return;
  const pos = player.getPosition();
  if (!boat.canBoard(pos)) return;

  const targetIsland = boat.getState().currentIsland === 1 ? 2 : 1;
  const started = boat.startVoyage((newIsland, landingPos) => {
    player.setPose(landingPos, newIsland === 2 ? 0 : Math.PI, -0.04);
    island.setActiveIsland(newIsland);
    enemies.setActiveIsland(newIsland, landingPos);
    showToast(
      newIsland === 2
        ? 'Você chegou à Ilha 2! Cuidado com os novos inimigos!'
        : 'De volta à Ilha 1!',
      3.0
    );
  });

  if (started) {
    weapon.setFiringHeld(false);
    weapon.setAiming(false);
    touchAdsActive = false;
    showToast(`Navegando para a Ilha ${targetIsland}...`, 2.6);
  }
}

const touchControls = new TouchControls({
  onMove: (forward, strafe, sprint) => {
    player.setTouchMove(forward, strafe, sprint);
  },
  onLook: (dx, dy) => {
    if (!isPlaying) return;
    const looked = player.handleTouchLook(dx, dy, weapon.getState().isAiming);
    weapon.addMouseSway(looked.dx, looked.dy);
  },
  onFireChange: (firing) => {
    if (!isPlaying || boat.getState().isSailing) return;
    weapon.setFiringHeld(firing);
  },
  onAdsToggle: () => {
    if (!isPlaying || boat.getState().isSailing) return;
    touchAdsActive = !touchAdsActive;
    weapon.setAiming(touchAdsActive);
    touchControls.setAdsActive(touchAdsActive);
  },
  onJump: () => {
    if (!isPlaying || boat.getState().isSailing) return;
    player.triggerJump();
  },
  onReload: () => {
    if (!isPlaying || boat.getState().isSailing) return;
    weapon.startReload();
  },
  onWeaponCycle: () => {
    if (!isPlaying || boat.getState().isSailing) return;
    touchAdsActive = false;
    weapon.setAiming(false);
    weapon.cycleWeapon(1);
    touchControls.setAdsActive(false);
  },
  onInteract: () => {
    tryBoardBoat();
  },
  onPause: () => {
    pauseGame();
  },
});

function syncTouchModeUi(): void {
  document.body.classList.toggle('touch-active', touchModeEnabled);
  touchModeBtn.textContent = touchModeEnabled
    ? 'Controles Touch: ATIVADO'
    : 'Controles Touch: DESATIVADO';
  touchModeBtn.classList.toggle('active', touchModeEnabled);
  touchControls.setVisible(isPlaying && touchModeEnabled);
}

syncTouchModeUi();

function showToast(message: string, duration = 2.4): void {
  toastEl.textContent = message;
  toastEl.classList.remove('hidden');
  toastTimer = duration;
}

function triggerHitmarker(destroyed: boolean, headshot: boolean): void {
  hitmarkerEl.classList.remove('hit', 'kill', 'headshot');
  void hitmarkerEl.offsetWidth;
  hitmarkerEl.classList.add('hit');
  if (headshot) {
    hitmarkerEl.classList.add('headshot');
  } else if (destroyed) {
    hitmarkerEl.classList.add('kill');
  }
}

function setOverlayVisible(visible: boolean): void {
  if (visible && !gameOverShown) {
    playBtn.textContent = hasStarted ? 'CONTINUAR' : 'JOGAR';
    overlayEl.classList.add('visible');
  } else {
    overlayEl.classList.remove('visible');
  }
}

function pauseGame(): void {
  if (!isPlaying && !gameOverShown) return;
  isPlaying = false;
  pointerLockFallback = false;
  touchAdsActive = false;
  player.clearInputs();
  weapon.setFiringHeld(false);
  weapon.setAiming(false);
  touchControls.setVisible(false);
  touchControls.setAdsActive(false);
  if (document.pointerLockElement === renderer.domElement) {
    document.exitPointerLock?.();
  }
  if (!gameOverShown) {
    setOverlayVisible(true);
  }
}

function showGameOver(): void {
  if (gameOverShown) return;
  gameOverShown = true;
  isPlaying = false;
  pointerLockFallback = false;
  touchAdsActive = false;
  player.clearInputs();
  weapon.setFiringHeld(false);
  weapon.setAiming(false);
  touchControls.setVisible(false);
  touchControls.setAdsActive(false);
  setOverlayVisible(false);

  if (document.pointerLockElement === renderer.domElement) {
    document.exitPointerLock?.();
  }

  const progress = enemies.getProgress();
  gameoverWaveEl.textContent = String(progress.wave);
  gameoverKillsEl.textContent = String(progress.kills);
  gameoverOverlayEl.classList.add('visible');
}

function activateFallbackPlay(): void {
  attemptingPointerLock = false;
  if (gameOverShown || (!touchModeEnabled && document.pointerLockElement === renderer.domElement)) return;
  pointerLockFallback = !touchModeEnabled;
  isPlaying = true;
  hasStarted = true;
  lastPointerX = null;
  lastPointerY = null;
  setOverlayVisible(false);
  touchControls.setVisible(touchModeEnabled);
}

function enterGame(): void {
  if (gameOverShown) return;
  audio.unlock();
  if (touchModeEnabled) {
    isPlaying = true;
    hasStarted = true;
    pointerLockFallback = false;
    touchAdsActive = false;
    setOverlayVisible(false);
    touchControls.setVisible(true);
    return;
  }

  const canvas = renderer.domElement;
  attemptingPointerLock = true;
  activateFallbackPlay();
  try {
    const result = canvas.requestPointerLock() as unknown as Promise<void> | undefined;
    if (result && typeof result.catch === 'function') {
      result.catch(() => {
        // Already running in fallback play mode
      });
    }
  } catch {
    // Already running in fallback play mode
  }
}

function restartGame(): void {
  gameOverShown = false;
  touchAdsActive = false;
  gameoverOverlayEl.classList.remove('visible');
  resetScheduled = false;
  resetCountdown = 0;
  toastTimer = 0;
  toastEl.classList.add('hidden');
  island.setActiveIsland(1);
  player.reset();
  weapon.reset();
  boat.reset();
  enemies.reset();
  targets.resetAll();
  touchControls.reset();
  enterGame();
}

touchModeBtn.addEventListener('click', () => {
  touchModeEnabled = !touchModeEnabled;
  touchModeManuallyToggled = true;
  syncTouchModeUi();
});

window.addEventListener(
  'touchstart',
  () => {
    if (!touchModeManuallyToggled && !touchModeEnabled) {
      touchModeEnabled = true;
      syncTouchModeUi();
    }
  },
  { passive: true }
);

playBtn.addEventListener('click', () => {
  enterGame();
});

restartBtn.addEventListener('click', () => {
  restartGame();
});

document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === renderer.domElement;
  attemptingPointerLock = false;
  if (locked) {
    if (gameOverShown) {
      document.exitPointerLock?.();
      return;
    }
    pointerLockFallback = false;
    isPlaying = true;
    hasStarted = true;
    setOverlayVisible(false);
  } else if (!pointerLockFallback) {
    isPlaying = false;
    player.clearInputs();
    weapon.setFiringHeld(false);
    weapon.setAiming(false);
    if (!gameOverShown) {
      setOverlayVisible(true);
    }
  }
});

document.addEventListener('pointerlockerror', () => {
  if (attemptingPointerLock && !gameOverShown) {
    activateFallbackPlay();
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isPlaying || touchModeEnabled || boat.getState().isSailing) return;
  let moveX = e.movementX;
  let moveY = e.movementY;
  if (document.pointerLockElement !== renderer.domElement) {
    if (lastPointerX !== null && lastPointerY !== null && moveX === 0 && moveY === 0) {
      moveX = e.clientX - lastPointerX;
      moveY = e.clientY - lastPointerY;
    }
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
  }
  const { dx, dy } = player.handleMouseLook(moveX, moveY, weapon.getState().isAiming);
  weapon.addMouseSway(dx, dy);
});

window.addEventListener('mousedown', (e) => {
  if (!isPlaying || touchModeEnabled || boat.getState().isSailing) return;
  if (e.button === 0) {
    weapon.setFiringHeld(true);
  } else if (e.button === 2) {
    weapon.setAiming(true);
  }
});

window.addEventListener('mouseup', (e) => {
  if (touchModeEnabled) return;
  if (e.button === 0) {
    weapon.setFiringHeld(false);
  } else if (e.button === 2) {
    weapon.setAiming(false);
  }
});

window.addEventListener(
  'wheel',
  (e) => {
    if (!isPlaying || touchModeEnabled || boat.getState().isSailing) return;
    if (Math.abs(e.deltaY) > 4) {
      weapon.cycleWeapon(e.deltaY > 0 ? 1 : -1);
    }
  },
  { passive: true }
);

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

window.addEventListener('keydown', (e) => {
  if (!isPlaying) return;
  if (e.code === 'Escape' && (pointerLockFallback || touchModeEnabled)) {
    pauseGame();
    return;
  }
  if (boat.getState().isSailing) return;

  player.handleKeyDown(e.code);
  if (e.code === 'KeyR') {
    weapon.startReload();
  } else if (e.code === 'KeyT') {
    targets.resetAll();
    weapon.refillReserve();
    resetScheduled = false;
    showToast('Alvos reposicionados!', 1.8);
  } else if (e.code === 'Digit1') {
    weapon.selectWeapon('rifle');
  } else if (e.code === 'Digit2') {
    weapon.selectWeapon('pistol');
  } else if (e.code === 'Digit3') {
    weapon.selectWeapon('knife');
  } else if (e.code === 'KeyQ') {
    weapon.cycleWeapon(1);
  } else if (e.code === 'KeyE') {
    tryBoardBoat();
  }
});

window.addEventListener('keyup', (e) => {
  player.handleKeyUp(e.code);
});

window.addEventListener('blur', () => {
  touchAdsActive = false;
  player.clearInputs();
  weapon.setFiringHeld(false);
  weapon.setAiming(false);
  touchControls.reset();
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Main loop
const clock = new THREE.Clock();

function updateHud(
  inWater: boolean,
  speedRatio: number,
  isReloading: boolean,
  isAiming: boolean
): void {
  const targetProgress = targets.getProgress();
  targetCounterEl.textContent = `${targetProgress.hitCount} / ${targetProgress.total}`;

  if (targetProgress.total > 0 && targetProgress.hitCount === targetProgress.total && !resetScheduled) {
    resetScheduled = true;
    resetCountdown = 2.6;
    showToast('Todos os alvos derrubados! Reiniciando...', 2.5);
  }

  const enemyProgress = enemies.getProgress();
  waveCounterEl.textContent = String(enemyProgress.wave);
  enemyCounterEl.textContent = String(enemyProgress.alive);
  killCounterEl.textContent = String(enemyProgress.kills);

  const boatState = boat.getState();
  partsCounterEl.textContent = `${boatState.partsCollected} / ${boatState.partsRequired}`;
  partsCounterEl.classList.toggle('parts-ready', boatState.isRepaired);
  islandBadgeEl.textContent = String(boatState.currentIsland);

  if (boatState.nearbyPrompt && isPlaying && !boatState.isSailing) {
    interactPromptEl.textContent = boatState.nearbyPrompt;
    interactPromptEl.classList.toggle('locked', !boatState.isRepaired);
    interactPromptEl.classList.remove('hidden');
  } else {
    interactPromptEl.classList.add('hidden');
  }

  touchControls.setInteractVisible(isPlaying && boat.canBoard(player.getPosition()));

  const health = player.getHealth();
  const hpPercent = Math.max(0, Math.min(100, (health.current / health.max) * 100));
  healthValueEl.textContent = String(health.current);
  healthBarFillEl.style.width = `${hpPercent}%`;
  healthBarFillEl.classList.toggle('hp-warn', health.current <= 50 && health.current > 25);
  healthBarFillEl.classList.toggle('hp-danger', health.current <= 25);

  const lowHealthBase = health.current <= 30 && !health.isDead ? (30 - health.current) / 60 : 0;
  const vignetteOpacity = Math.min(0.92, Math.max(health.damageFlash * 0.78, lowHealthBase));
  damageVignetteEl.style.opacity = String(vignetteOpacity);
  damageVignetteEl.classList.toggle('low-health', health.current <= 30 && !health.isDead);

  // Blood splatter screen intensity: spikes sharply on hit + persistent splatters when HP <= 40
  const lowHpBlood = health.current <= 40 && !health.isDead ? (40 - health.current) / 70 : 0;
  const bloodOpacity = Math.min(0.96, Math.max(health.damageFlash * 0.92, lowHpBlood));
  bloodOverlayEl.style.opacity = String(bloodOpacity);

  const wState = weapon.getState();
  weaponNameEl.textContent = wState.name;
  ammoReadoutEl.classList.toggle('melee-mode', wState.isMelee);
  ammoMagEl.textContent = wState.isMelee ? '∞' : String(wState.mag);
  ammoReserveEl.textContent = wState.isMelee ? '' : String(wState.reserve);
  ammoMagEl.classList.toggle('low-ammo', !wState.isMelee && wState.mag <= Math.ceil(wState.magSize * 0.25));

  for (const el of weaponSlotEls) {
    el.classList.toggle('active', el.dataset.weapon === wState.id);
  }

  const needReload = !wState.isMelee && !isReloading && wState.mag <= Math.ceil(wState.magSize * 0.25) && wState.reserve > 0;
  reloadPromptEl.classList.toggle('hidden', !needReload);

  crosshairEl.classList.toggle('aiming', isAiming);
  crosshairEl.classList.toggle('reloading', isReloading);
  crosshairEl.classList.toggle('spread', spreadFlashTimer > 0 || speedRatio > 0.75);
  touchControls.setAdsActive(isAiming);

  if (isReloading) {
    statusIndicatorEl.textContent = 'RECARREGANDO...';
    statusIndicatorEl.classList.add('reloading');
    statusIndicatorEl.classList.remove('hidden');
  } else if (inWater && !boatState.isSailing) {
    statusIndicatorEl.textContent = 'ÁGUA RASA';
    statusIndicatorEl.classList.remove('reloading');
    statusIndicatorEl.classList.remove('hidden');
  } else {
    statusIndicatorEl.classList.add('hidden');
  }
}

function animate(): void {
  requestAnimationFrame(animate);

  const dt = Math.min(clock.getDelta(), 0.05);
  const elapsed = clock.elapsedTime;

  spreadFlashTimer = Math.max(0, spreadFlashTimer - dt);
  if (toastTimer > 0) {
    toastTimer -= dt;
    if (toastTimer <= 0) {
      toastEl.classList.add('hidden');
    }
  }

  if (resetScheduled) {
    resetCountdown -= dt;
    if (resetCountdown <= 0) {
      resetScheduled = false;
      targets.resetAll();
      weapon.refillReserve();
    }
  }

  const sailingPose = boat.getVoyagePose();
  if (sailingPose) {
    player.setPose(sailingPose.position, sailingPose.yaw, sailingPose.pitch);
  }

  const weaponState = weapon.getState();
  const isSailing = sailingPose !== null;
  const playerStatus = player.update(dt, isPlaying && !isSailing, weaponState.isAiming);
  const shot = weapon.update(
    dt,
    isPlaying && !isSailing,
    playerStatus.speedRatio,
    playerStatus.isSprinting
  );

  if (shot.fired) {
    player.applyRecoilKick(shot.pitchKick, shot.yawKick);
    spreadFlashTimer = 0.09;
    if (shot.hitTarget) {
      triggerHitmarker(shot.targetDestroyed, shot.headshot);
    }
  }

  const playerPos = player.getPosition();
  helicopter.update(dt, isPlaying, playerPos);

  const pickup = boat.update(dt, isPlaying, playerPos);
  if (pickup.collected) {
    const bState = boat.getState();
    if (bState.isRepaired) {
      showToast(
        `${pickup.partName} coletado (5/5)! Lancha desbloqueada na praia norte!`,
        3.5
      );
    } else {
      showToast(
        `Peça coletada: ${pickup.partName} (${bState.partsCollected}/${bState.partsRequired})`,
        2.4
      );
    }
  }

  const enemyStep = enemies.update(
    dt,
    isPlaying && !isSailing,
    camera,
    playerPos,
    (damage) => {
      const died = player.takeDamage(damage);
      if (died) {
        showGameOver();
      }
    }
  );

  if (enemyStep.waveCleared && !player.getHealth().isDead) {
    player.heal(25);
    weapon.refillReserve();

    const bState = boat.getState();
    if (bState.partsCollected + bState.activeDrops < bState.partsRequired && enemyStep.lastKillPos) {
      boat.spawnPartDrop(enemyStep.lastKillPos);
      showToast(
        `Onda ${enemyStep.clearedWave} limpa! +25 VIDA — Último inimigo dropou uma peça da lancha!`,
        3.2
      );
    } else {
      showToast(`Onda ${enemyStep.clearedWave} limpa! +25 VIDA — Próxima onda chegando!`, 2.6);
    }
  }

  island.update(elapsed);
  targets.update(dt);

  const updatedWeapon = weapon.getState();
  updateHud(
    playerStatus.inWater,
    playerStatus.speedRatio,
    updatedWeapon.isReloading,
    updatedWeapon.isAiming
  );

  renderer.render(scene, camera);
}

animate();
