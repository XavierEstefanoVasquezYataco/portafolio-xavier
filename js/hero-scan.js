/**
 * HERO-SCAN.JS
 * Simulación de escaneo forense y recuperación de sectores
 * Xavier Estefano Vásquez Yataco | Portafolio
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'xvy_recovery_scanned_v1';
  const heroConsole = document.getElementById('heroConsole');
  const scanView = document.getElementById('scanView');
  const identityView = document.getElementById('identityView');
  const skipBtn = document.getElementById('skipScanBtn');
  const restartBtn = document.getElementById('restartScanBtn');
  const progressFill = document.getElementById('progressFill');
  const progressPct = document.getElementById('progressPct');
  const terminalLogs = document.getElementById('terminalLogs');
  const sectorGrid = document.getElementById('sectorGrid');

  if (!heroConsole) return;

  // Comprobar preferencia de movimiento reducido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Secuencia de logs forenses
  const logsSequence = [
    { text: '[INIT] Inicializando interfaz forense PC-3000 SAS/SATA...', time: 200, type: 'dim' },
    { text: '[LBA 0x000000] Montando bloque de cabezales y leyendo MBR/GPT...', time: 800, type: 'cyan' },
    { text: '[WARN] Detectados 18 sectores con atenuación de lectura en LBA 0x4A1E-0x7F2A', time: 1400, type: 'dim' },
    { text: '[PROC] Aplicando algoritmos de corrección ECC y estabilización de cabezal...', time: 2100, type: 'cyan' },
    { text: '[SCAN] Reconstruyendo clústeres: sumaq-gym, MinijuegoRPG, optica-renzo...', time: 2900, type: 'cyan' },
    { text: '[VERIF] Validación de hash SHA-256 e integridad técnica: 100% OK', time: 3700, type: 'green' },
    { text: '[READY] Unidad estabilizada. Extracción de perfil completada con éxito.', time: 4300, type: 'green' }
  ];

  let timers = [];
  let isCompleted = false;

  // Inicializar cuadrícula de 32 bloques LBA
  function initSectorGrid() {
    if (!sectorGrid) return;
    sectorGrid.innerHTML = '';
    const totalBlocks = 32;
    for (let i = 0; i < totalBlocks; i++) {
      const block = document.createElement('div');
      block.className = 'sector-block';
      // Marcamos algunos sectores como inicialmente dañados
      if (i % 5 === 0 || i % 7 === 0) {
        block.classList.add('damaged');
      }
      sectorGrid.appendChild(block);
    }
  }

  function appendLog(text, type = 'dim') {
    if (!terminalLogs) return;
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    const timestamp = new Date().toISOString().substring(11, 19);
    line.textContent = `${timestamp} ${text}`;
    terminalLogs.appendChild(line);
    terminalLogs.scrollTop = terminalLogs.scrollHeight;
  }

  function updateProgress(pct) {
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (progressPct) progressPct.textContent = `${Math.round(pct)}%`;
  }

  function revealIdentity() {
    if (isCompleted) return;
    isCompleted = true;

    // Limpiar temporizadores pendientes
    timers.forEach(t => clearTimeout(t));
    timers = [];

    // Marcar sectores como todos recuperados
    if (sectorGrid) {
      const blocks = sectorGrid.querySelectorAll('.sector-block');
      blocks.forEach(b => {
        b.className = 'sector-block recovered';
      });
    }

    updateProgress(100);

    // Transición visual
    if (scanView) {
      scanView.style.opacity = '0';
      scanView.style.display = 'none';
    }
    if (identityView) {
      identityView.classList.add('revealed');
      identityView.style.display = 'flex';
      identityView.style.opacity = '1';
    }
    heroConsole.classList.add('completed');

    // Registrar en sesión para no repetir forzadamente
    try {
      sessionStorage.setItem(STORAGE_KEY, 'done');
    } catch (e) {
      // Ignorar error si cookies/storage restringidos
    }
  }

  function runSimulation() {
    initSectorGrid();
    isCompleted = false;
    heroConsole.classList.remove('completed');
    if (scanView) {
      scanView.style.display = 'flex';
      scanView.style.opacity = '1';
    }
    if (identityView) {
      identityView.classList.remove('revealed');
      identityView.style.display = 'none';
    }
    if (terminalLogs) terminalLogs.innerHTML = '';
    updateProgress(0);

    const blocks = sectorGrid ? sectorGrid.querySelectorAll('.sector-block') : [];

    // Programar logs
    logsSequence.forEach(item => {
      const t = setTimeout(() => {
        appendLog(item.text, item.type);
      }, item.time);
      timers.push(t);
    });

    // Programar progreso y recuperación paulatina de sectores
    const duration = 4600;
    const steps = 25;
    const stepTime = duration / steps;

    for (let step = 1; step <= steps; step++) {
      const t = setTimeout(() => {
        const pct = (step / steps) * 100;
        updateProgress(pct);

        // Actualizar estados en bloques LBA
        const blockIndex = Math.floor((step / steps) * blocks.length);
        if (blocks[blockIndex]) {
          blocks[blockIndex].className = 'sector-block reading';
          setTimeout(() => {
            if (blocks[blockIndex]) blocks[blockIndex].className = 'sector-block recovered';
          }, 200);
        }
      }, step * stepTime);
      timers.push(t);
    }

    // Al finalizar el tiempo, revelar identidad
    const finalTimer = setTimeout(() => {
      revealIdentity();
    }, duration + 300);
    timers.push(finalTimer);
  }

  // Eventos de control
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      revealIdentity();
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      runSimulation();
    });
  }

  // Tecla ESC para saltar
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !isCompleted) {
      revealIdentity();
    }
  });

  // Decidir si ejecutar o saltar directo
  const alreadyScanned = sessionStorage.getItem(STORAGE_KEY) === 'done';

  if (prefersReducedMotion || alreadyScanned) {
    revealIdentity();
  } else {
    runSimulation();
  }

  window.heroRecovery = {
    restart: runSimulation,
    skip: revealIdentity
  };
})();
