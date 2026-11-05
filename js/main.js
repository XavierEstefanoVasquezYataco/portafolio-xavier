/**
 * MAIN.JS
 * Lógica general, navegación, interactividad de terminal y utilitarios
 * Xavier Estefano Vásquez Yataco | Portafolio
 */

(function () {
  'use strict';

  // Navegación con efecto al scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Botón para copiar email al portapapeles
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailText = 'xavier.vasquez.y@hotmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailText);
        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = '¡Copiado!';
        copyEmailBtn.classList.add('btn-primary');
        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
          copyEmailBtn.classList.remove('btn-primary');
        }, 2200);
      } catch (err) {
        // Fallback básico
        window.location.href = `mailto:${emailText}`;
      }
    });
  }

  // Terminal interactiva de comandos en la sección de contacto
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');

  if (terminalInput && terminalOutput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';
        executeTerminalCommand(cmd);
      }
    });
  }

  function executeTerminalCommand(cmd) {
    if (!terminalOutput) return;

    const lineCmd = document.createElement('div');
    lineCmd.className = 'terminal-line cyan';
    lineCmd.textContent = `visitor@lab:~$ ${cmd}`;
    terminalOutput.appendChild(lineCmd);

    const lineResponse = document.createElement('div');
    lineResponse.className = 'terminal-line';

    switch (cmd) {
      case 'help':
      case 'ayuda':
        lineResponse.innerHTML = `Comandos disponibles:<br>
        - <strong>status</strong>: Muestra el estado del centro de recuperación.<br>
        - <strong>cv</strong>: Abre el enlace de descarga del CV.<br>
        - <strong>contact</strong>: Muestra correos y teléfonos de Xavier.<br>
        - <strong>stack</strong>: Lista el núcleo tecnológico.<br>
        - <strong>clear</strong>: Limpia el registro de la consola.`;
        break;

      case 'status':
        lineResponse.innerHTML = `<span style="color:var(--status-recovered);">[OK] 7 Sectores LBA recuperados | UTP 7° ciclo | Décimo Superior | Lima, Perú.</span>`;
        break;

      case 'cv':
        lineResponse.innerHTML = `Descargando CV oficial... <a href="assets/cv/CV_Xavier_Estefano_Vasquez_Yataco.pdf" target="_blank" style="color:var(--accent); text-decoration:underline;">[Abrir PDF]</a>`;
        break;

      case 'contact':
        lineResponse.innerHTML = `Email: xavier.vasquez.y@hotmail.com | Tel: 980426050 | LinkedIn: /in/xaviere-vasquezy/`;
        break;

      case 'stack':
        lineResponse.innerHTML = `Soporte/Forense: PC-3000, UFS, R-Studio.<br>Software: Java, C++, TypeScript, JavaScript.<br>Datos: Power BI (DAX/ETL), Python, Excel.`;
        break;

      case 'clear':
      case 'cls':
        terminalOutput.innerHTML = '';
        return;

      case '':
        return;

      default:
        lineResponse.className = 'terminal-line dim';
        lineResponse.textContent = `Comando no reconocido: "${cmd}". Escribe "help" para ver opciones.`;
        break;
    }

    terminalOutput.appendChild(lineResponse);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // Estampa de tiempo dinámica en footer
  const liveHash = document.getElementById('liveVerifyHash');
  if (liveHash) {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    liveHash.textContent = `SHA256:7F2A-${today}-XVY`;
  }
})();
