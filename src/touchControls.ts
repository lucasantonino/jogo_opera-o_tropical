export interface TouchControlsCallbacks {
  onMove: (forward: number, strafe: number, sprint: boolean) => void;
  onLook: (dx: number, dy: number) => void;
  onFireChange: (firing: boolean) => void;
  onAdsToggle: () => void;
  onJump: () => void;
  onReload: () => void;
  onWeaponCycle: () => void;
  onInteract: () => void;
  onToggleLandscape: () => void;
  onPause: () => void;
}

function getEl<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing touch control element #${id}`);
  return el as T;
}

export class TouchControls {
  private readonly root = getEl<HTMLDivElement>('touch-controls');
  private readonly lookZone = getEl<HTMLDivElement>('touch-look-zone');
  private readonly moveZone = getEl<HTMLDivElement>('touch-move-zone');
  private readonly joystickBase = getEl<HTMLDivElement>('joystick-base');
  private readonly joystickKnob = getEl<HTMLDivElement>('joystick-knob');
  private readonly btnFire = getEl<HTMLButtonElement>('btn-fire');
  private readonly btnAds = getEl<HTMLButtonElement>('btn-ads');
  private readonly btnJump = getEl<HTMLButtonElement>('btn-jump');
  private readonly btnReload = getEl<HTMLButtonElement>('btn-reload');
  private readonly btnWeapon = getEl<HTMLButtonElement>('btn-weapon');
  private readonly btnInteract = getEl<HTMLButtonElement>('btn-interact');
  private readonly btnLandscape = getEl<HTMLButtonElement>('btn-landscape');
  private readonly btnPause = getEl<HTMLButtonElement>('btn-pause');

  private readonly callbacks: TouchControlsCallbacks;
  private readonly maxRadius = 44;
  private readonly deadzone = 0.12;

  private movePointerId: number | null = null;
  private lookPointerId: number | null = null;
  private lookLastX = 0;
  private lookLastY = 0;

  private firePointerId: number | null = null;
  private fireLastX = 0;
  private fireLastY = 0;

  constructor(callbacks: TouchControlsCallbacks) {
    this.callbacks = callbacks;
    this.bindEvents();
  }

  static isTouchDevice(): boolean {
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      navigator.maxTouchPoints > 0 ||
      'ontouchstart' in window
    );
  }

  setVisible(visible: boolean): void {
    this.root.classList.toggle('visible', visible);
    if (!visible) {
      this.reset();
    }
  }

  setAdsActive(active: boolean): void {
    this.btnAds.classList.toggle('active', active);
  }

  setInteractVisible(visible: boolean): void {
    this.btnInteract.classList.toggle('hidden', !visible);
  }

  setLandscapeActive(active: boolean): void {
    this.btnLandscape.classList.toggle('active', active);
  }

  reset(): void {
    this.movePointerId = null;
    this.lookPointerId = null;
    if (this.firePointerId !== null) {
      this.firePointerId = null;
      this.btnFire.classList.remove('pressed');
      this.callbacks.onFireChange(false);
    }
    this.joystickBase.classList.remove('sprinting');
    this.joystickKnob.style.transform = 'translate3d(0px, 0px, 0px)';
    this.callbacks.onMove(0, 0, false);
  }

  private updateJoystick(clientX: number, clientY: number): void {
    const rect = this.joystickBase.getBoundingClientRect();
    const centerX = rect.left + rect.width * 0.5;
    const centerY = rect.top + rect.height * 0.5;

    let dx = clientX - centerX;
    let dy = clientY - centerY;
    const dist = Math.hypot(dx, dy);

    if (dist > this.maxRadius && dist > 0) {
      const scale = this.maxRadius / dist;
      dx *= scale;
      dy *= scale;
    }

    this.joystickKnob.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0px)`;

    const normX = dx / this.maxRadius;
    const normY = -dy / this.maxRadius; // Up on screen = positive forward
    const mag = Math.hypot(normX, normY);

    if (mag < this.deadzone) {
      this.joystickBase.classList.remove('sprinting');
      this.callbacks.onMove(0, 0, false);
      return;
    }

    const rescaled = Math.min(1, (mag - this.deadzone) / (1 - this.deadzone));
    const strafe = (normX / mag) * rescaled;
    const forward = (normY / mag) * rescaled;
    const sprint = forward > 0.85 && Math.abs(strafe) < 0.48;

    this.joystickBase.classList.toggle('sprinting', sprint);
    this.callbacks.onMove(forward, strafe, sprint);
  }

  private bindEvents(): void {
    // Prevent touch controls container from triggering desktop window mouse listeners
    const stopOnly = (e: Event): void => {
      e.stopPropagation();
    };
    this.root.addEventListener('mousedown', stopOnly);
    this.root.addEventListener('mouseup', stopOnly);
    this.root.addEventListener('mousemove', stopOnly);

    // Left virtual joystick
    this.moveZone.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.movePointerId !== null) return;
      this.movePointerId = e.pointerId;
      try {
        this.moveZone.setPointerCapture(e.pointerId);
      } catch {
        // Ignore if pointer capture is unsupported in synthetic events
      }
      this.updateJoystick(e.clientX, e.clientY);
    });

    this.moveZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.movePointerId) return;
      e.preventDefault();
      e.stopPropagation();
      this.updateJoystick(e.clientX, e.clientY);
    });

    const endMove = (e: PointerEvent): void => {
      if (e.pointerId !== this.movePointerId) return;
      e.preventDefault();
      e.stopPropagation();
      this.movePointerId = null;
      this.joystickBase.classList.remove('sprinting');
      this.joystickKnob.style.transform = 'translate3d(0px, 0px, 0px)';
      this.callbacks.onMove(0, 0, false);
    };
    this.moveZone.addEventListener('pointerup', endMove);
    this.moveZone.addEventListener('pointercancel', endMove);

    // Right-half swipe look pad
    this.lookZone.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.lookPointerId !== null) return;
      this.lookPointerId = e.pointerId;
      this.lookLastX = e.clientX;
      this.lookLastY = e.clientY;
      try {
        this.lookZone.setPointerCapture(e.pointerId);
      } catch {
        // Ignore
      }
    });

    this.lookZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.lookPointerId) return;
      e.preventDefault();
      e.stopPropagation();
      const dx = e.clientX - this.lookLastX;
      const dy = e.clientY - this.lookLastY;
      this.lookLastX = e.clientX;
      this.lookLastY = e.clientY;
      this.callbacks.onLook(dx, dy);
    });

    const endLook = (e: PointerEvent): void => {
      if (e.pointerId !== this.lookPointerId) return;
      e.preventDefault();
      e.stopPropagation();
      this.lookPointerId = null;
    };
    this.lookZone.addEventListener('pointerup', endLook);
    this.lookZone.addEventListener('pointercancel', endLook);

    // Fire button: hold to shoot + drag thumb to aim simultaneously
    this.btnFire.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.firePointerId !== null) return;
      this.firePointerId = e.pointerId;
      this.fireLastX = e.clientX;
      this.fireLastY = e.clientY;
      this.btnFire.classList.add('pressed');
      try {
        this.btnFire.setPointerCapture(e.pointerId);
      } catch {
        // Ignore
      }
      this.callbacks.onFireChange(true);
    });

    this.btnFire.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.firePointerId) return;
      e.preventDefault();
      e.stopPropagation();
      const dx = e.clientX - this.fireLastX;
      const dy = e.clientY - this.fireLastY;
      this.fireLastX = e.clientX;
      this.fireLastY = e.clientY;
      if (dx !== 0 || dy !== 0) {
        this.callbacks.onLook(dx, dy);
      }
    });

    const endFire = (e: PointerEvent): void => {
      if (e.pointerId !== this.firePointerId) return;
      e.preventDefault();
      e.stopPropagation();
      this.firePointerId = null;
      this.btnFire.classList.remove('pressed');
      this.callbacks.onFireChange(false);
    };
    this.btnFire.addEventListener('pointerup', endFire);
    this.btnFire.addEventListener('pointercancel', endFire);

    // Action buttons: ADS toggle, Jump, Reload, Pause
    this.btnAds.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.callbacks.onAdsToggle();
    });

    this.btnJump.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.callbacks.onJump();
    });

    this.btnReload.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.callbacks.onReload();
    });

    this.btnWeapon.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.callbacks.onWeaponCycle();
    });

    this.btnInteract.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.callbacks.onInteract();
    });

    this.btnLandscape.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.callbacks.onToggleLandscape();
    });

    this.btnPause.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.callbacks.onPause();
    });
  }
}
