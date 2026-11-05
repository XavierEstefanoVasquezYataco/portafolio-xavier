/**
 * PROJECTS.JS
 * Carga de datos reales, filtrado (Web, Datos, Juegos, Java) y modal de estudio de caso
 * Xavier Estefano Vásquez Yataco | Portafolio Profesional
 */

(function () {
  'use strict';

  // Respaldo íntegro local (previene fallos de CORS al abrir directamente vía file://)
  const FALLBACK_PROJECTS = [
    {
      "id": "sumaq-gym",
      "name": "sumaq-gym",
      "sectorId": "LBA-0x7F2A",
      "title": "Sumaq Gym - Sistema de Gestión Fitness",
      "description": "Plataforma web con tipado estricto para el control de membresías, rutinas y agendamiento de entrenamientos.",
      "language": "TypeScript",
      "filterCategory": "web",
      "status": "ACTIVO",
      "statusBadge": "EN DESARROLLO",
      "updatedAt": "2026-11-02",
      "githubUrl": "https://github.com/XavierEstefanoVasquezYataco/sumaq-gym",
      "isPrivate": false,
      "category": "Frontend & Software",
      "tags": ["TypeScript", "Frontend", "Tipado Estricto", "UI/UX", "Gestión"],
      "metrics": { "integrity": "100% Verificado", "branch": "main", "architecture": "Modular SPA" },
      "caseStudy": {
        "problem": "Dificultad en centros de entrenamiento para gestionar inscripciones y cupos con validación de datos en tiempo de desarrollo.",
        "solution": "Aplicación web desarrollada en TypeScript que garantiza interfaces estrictas para entidades de clientes, membresías y reservas.",
        "stack": "TypeScript, HTML5, CSS3 Moderno, JavaScript ES6+",
        "technicalChallenge": "Estructurar modelos de datos reutilizables y tipados para el manejo del estado y la interacción reactiva.",
        "result": "Sector activo con 0 errores de tipado y flujo continuo de desarrollo."
      }
    },
    {
      "id": "MinijuegoRPG",
      "name": "MinijuegoRPG",
      "sectorId": "LBA-0x4A1E",
      "title": "Minijuego RPG en C++ (Rama mejora-v2)",
      "description": "Videojuego de rol por turnos en consola aplicando programación orientada a objetos, polimorfismo y control estricto de memoria.",
      "language": "C++",
      "filterCategory": "juegos",
      "status": "ACTIVO",
      "statusBadge": "EN DESARROLLO (mejora-v2)",
      "updatedAt": "2026-11-01",
      "githubUrl": "https://github.com/XavierEstefanoVasquezYataco/MinijuegoRPG",
      "branch": "mejora-v2",
      "isPrivate": false,
      "category": "Desarrollo de Videojuegos & C++",
      "tags": ["C++", "POO", "Algoritmos", "Gestión de Memoria", "Branch mejora-v2"],
      "metrics": { "integrity": "99.4% LBA", "branch": "mejora-v2", "architecture": "Clases Polimórficas" },
      "caseStudy": {
        "problem": "Implementar un motor de combate por turnos escalable sin fugas de memoria ni acoplamiento excesivo entre entidades.",
        "solution": "Jerarquía de clases en C++ (Personaje base, Mago, Guerrero, Monstruos) con métodos virtuales puros y cálculo dinámico de estadísticas de combate.",
        "stack": "C++ Estándar, POO, Punteros Inteligentes, STL",
        "technicalChallenge": "Refactorización profunda en la rama 'mejora-v2' para desacoplar el inventario y garantizar la estabilidad en tiempo de ejecución.",
        "result": "Mecánicas de combate estables con manejo ordenado de recursos de memoria."
      }
    },
    {
      "id": "optica-renzo-lens",
      "name": "optica-renzo-lens",
      "sectorId": "LBA-0x9B01",
      "title": "Óptica Renzo Lens - Catálogo y Cotizaciones Oftálmicas",
      "description": "Plataforma comercial para óptica: catálogo visual de monturas, cotización personalizada y captura de recetas oftálmicas.",
      "language": "JavaScript",
      "filterCategory": "web",
      "status": "PUBLICADO",
      "statusBadge": "REPOSITORIO PRIVADO",
      "updatedAt": "2026-08-15",
      "githubUrl": null,
      "isPrivate": true,
      "category": "Frontend Comercial",
      "tags": ["JavaScript", "Frontend", "Catálogo Interactivo", "Confidencial", "UX"],
      "metrics": { "integrity": "Sector Protegido", "audit": "Validado", "architecture": "Vanilla JS Modular" },
      "caseStudy": {
        "problem": "Proceso manual lento de cotización de monturas y fórmulas refractivas para clientes y personal de óptica.",
        "solution": "Interfaz interactiva con selector de lunas graduadas, filtros antirreflejo y cálculo dinámico de presupuestos para atención rápida.",
        "stack": "JavaScript Nativo, CSS3, Maquetación Responsiva",
        "technicalChallenge": "Validación lógica de parámetros ópticos complejos en el cliente preservando el código comercial bajo custodia privada.",
        "result": "Sistema desplegado comercialmente con navegación ágil y segura."
      }
    },
    {
      "id": "MinimarketInventario",
      "name": "MinimarketInventario",
      "sectorId": "LBA-0x2E8D",
      "title": "Sistema de Inventario para Minimarket La Esquina",
      "description": "Aplicación de escritorio en Java con arquitectura MVC y base de datos relacional MySQL para control de stock y ventas.",
      "language": "Java",
      "filterCategory": "java",
      "status": "PUBLICADO",
      "statusBadge": "PUBLICADO",
      "updatedAt": "2026-09-10",
      "githubUrl": "https://github.com/XavierEstefanoVasquezYataco/MinimarketInventario",
      "isPrivate": false,
      "category": "Software de Escritorio & DB",
      "tags": ["Java", "MySQL", "Patrón MVC", "Inventarios", "Integridad de Datos"],
      "metrics": { "integrity": "100% Validado", "pattern": "MVC", "db": "MySQL Relacional" },
      "caseStudy": {
        "problem": "Discrepancias entre inventario físico y ventas diarias, con riesgo de quiebre de stock en productos de alta rotación.",
        "solution": "Aplicación de escritorio bajo arquitectura Modelo-Vista-Controlador (MVC) en Java con persistencia transaccional en MySQL y alertas automáticas de reposición.",
        "stack": "Java SE, MySQL, JDBC, Swing / AWT",
        "technicalChallenge": "Asegurar integridad de transacciones relacionales y validación de entradas numéricas contra manipulación indebida.",
        "result": "Control total de entradas y salidas con trazabilidad de movimientos de almacén."
      }
    },
    {
      "id": "sistema-gestion-escolar",
      "name": "sistema-gestion-escolar",
      "sectorId": "LBA-0x5C19",
      "title": "Sistema Web de Gestión Escolar - Colegio Andino",
      "description": "Plataforma administrativa para gestión de matrículas, registro de calificaciones por periodos y control seguro de expedientes estudiantiles.",
      "language": "JavaScript / PHP",
      "filterCategory": "web",
      "status": "PUBLICADO",
      "statusBadge": "PUBLICADO",
      "updatedAt": "2026-05-24",
      "githubUrl": "https://github.com/XavierEstefanoVasquezYataco/sistema-gestion-escolar",
      "isPrivate": false,
      "category": "Sistemas de Información",
      "tags": ["Gestión Escolar", "Bases de Datos", "Trazabilidad", "Multi-rol"],
      "metrics": { "integrity": "Sector Cerrado", "records": "Seguridad de Datos", "access": "Multi-rol" },
      "caseStudy": {
        "problem": "Pérdida de trazabilidad en actas de notas físicas y demoras en la consolidación de libretas y certificados escolares.",
        "solution": "Sistema web centralizado con separación de privilegios por roles (Administrador, Docente, Tutor) y persistencia estructurada.",
        "stack": "HTML5, CSS3, JavaScript, Base de Datos Relacional",
        "technicalChallenge": "Control de concurrencia y validación estricta de rangos de notas según el estándar pedagógico oficial.",
        "result": "Plataforma estable con generación consistente de reportes académicos."
      }
    },
    {
      "id": "Musikeros",
      "name": "Musikeros",
      "sectorId": "LBA-0x83B4",
      "title": "Sitio Web Oficial 'Los Musikeros' (Producción Netlify)",
      "description": "Plataforma web con navegación estructurada, diseño adaptativo moderno, optimización de velocidad de carga y despliegue continuo en Netlify.",
      "language": "CSS / HTML",
      "filterCategory": "web",
      "status": "PUBLICADO",
      "statusBadge": "PUBLICADO / EN LÍNEA",
      "updatedAt": "2026-04-13",
      "githubUrl": "https://github.com/XavierEstefanoVasquezYataco/Musikeros",
      "liveUrl": "https://musikeros.netlify.app",
      "isPrivate": false,
      "category": "Frontend & Despliegue CI/CD",
      "tags": ["CSS3", "HTML5", "UX/UI", "Netlify", "DevOps"],
      "metrics": { "integrity": "Producción Activa", "deploy": "Netlify Edge", "lighthouse": "Alto Rendimiento" },
      "caseStudy": {
        "problem": "Ausencia de presencia digital optimizada para contrataciones directas y difusión del repertorio musical de la agrupación.",
        "solution": "Sitio web responsivo y de carga ultrarrápida con formularios de contacto para captura de leads y enlaces a medios oficiales.",
        "stack": "HTML5 Semántico, CSS3 Moderno, Netlify CI/CD",
        "technicalChallenge": "Optimización extrema del peso de assets y configuración de pipeline automatizado en Netlify con HTTPS.",
        "result": "Disponibilidad del 99.9% y alta velocidad de carga en dispositivos móviles."
      }
    },
    {
      "id": "Proyecto-PowerBI",
      "name": "Proyecto-PowerBI",
      "sectorId": "LBA-0x1D0F",
      "title": "Dashboard de Análisis de Ventas & Business Intelligence",
      "description": "Solución analítica integral: extracción y limpieza con Power Query, modelado dimensional en esquema estrella y cálculo de KPIs estratégicos mediante DAX.",
      "language": "Power BI / DAX",
      "filterCategory": "datos",
      "status": "PUBLICADO",
      "statusBadge": "PUBLICADO",
      "updatedAt": "2026-09-10",
      "githubUrl": "https://github.com/XavierEstefanoVasquezYataco/Proyecto-PowerBI",
      "isPrivate": false,
      "category": "Análisis de Datos & BI",
      "tags": ["Power BI", "DAX", "Power Query", "Modelo Estrella", "ETL"],
      "metrics": { "integrity": "Data Model Verificado", "schema": "Estrella (Hechos + Dimensiones)", "tool": "Power BI Desktop" },
      "caseStudy": {
        "problem": "Falta de visibilidad sobre márgenes comerciales, ticket promedio y rendimiento geográfico a partir de un dataset disperso.",
        "solution": "Pipeline ETL completo para depuración de datos, diseño de un modelo dimensional en estrella (tabla de hechos y dimensiones de Cliente, Producto y Fecha) y visualizaciones dinámicas.",
        "stack": "Power BI Desktop, Power Query (ETL), DAX Avanzado, Modelado Dimensional",
        "technicalChallenge": "Formulación de medidas DAX complejas con funciones de inteligencia de tiempo para comparativas interanuales precisas.",
        "result": "Dashboard ejecutivo interactivo con insights inmediatos para la toma de decisiones."
      }
    }
  ];

  let allProjects = [];
  const gridContainer = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('caseStudyModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Carga asíncrona con fallback automático
  async function loadProjects() {
    try {
      const response = await fetch('data/projects.json');
      if (!response.ok) throw new Error('Respuesta no satisfactoria');
      const data = await response.json();
      allProjects = Array.isArray(data) && data.length > 0 ? data : FALLBACK_PROJECTS;
    } catch (e) {
      allProjects = FALLBACK_PROJECTS;
    }
    renderProjects(allProjects);
  }

  // Filtrado específico solicitado: Web, Datos, Juegos, Java
  function filterProjects(criteria) {
    if (criteria === 'todos') {
      renderProjects(allProjects);
      return;
    }
    const filtered = allProjects.filter(p => p.filterCategory === criteria);
    renderProjects(filtered);
  }

  // Renderizado dinámico de tarjetas de proyectos
  function renderProjects(projects) {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    if (projects.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted); font-family: var(--font-mono);">
          [LBA INFO] No se encontraron sectores registrados para este filtro.
        </div>
      `;
      return;
    }

    projects.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);

      const statusBadgeClass = project.status === 'ACTIVO' 
        ? 'badge-active' 
        : (project.isPrivate ? 'badge-private' : 'badge-published');

      const tagsHtml = (project.tags || [])
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

      let actionButtons = '';

      if (project.githubUrl) {
        actionButtons += `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Ver código en GitHub de ${project.name}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        `;
      } else if (project.isPrivate) {
        actionButtons += `
          <span class="badge badge-private" title="Sector comercial bajo custodia privada">
            Privado
          </span>
        `;
      }

      if (project.liveUrl) {
        actionButtons += `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" aria-label="Ver demo en vivo de ${project.name}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            En Vivo
          </a>
        `;
      }

      actionButtons += `
        <button type="button" class="btn btn-secondary btn-sm case-study-btn" data-project="${project.id}" aria-label="Ver ficha técnica de ${project.title}">
          Ficha Técnica
        </button>
      `;

      card.innerHTML = `
        <div class="card-topbar">
          <span class="card-sector-id font-mono">[${project.sectorId || 'LBA-0x00'}]</span>
          <span class="badge ${statusBadgeClass}">
            <span class="status-dot ${project.status === 'ACTIVO' ? 'pulse' : ''}"></span>
            ${project.statusBadge || project.status}
          </span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.description}</p>
          <div class="card-tags">
            ${tagsHtml}
          </div>
        </div>
        <div class="card-footer">
          <span class="font-mono" style="font-size: 0.72rem; color: var(--text-muted);">${project.language}</span>
          <div class="card-actions">
            ${actionButtons}
          </div>
        </div>
      `;

      gridContainer.appendChild(card);
    });

    const caseButtons = gridContainer.querySelectorAll('.case-study-btn');
    caseButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projectId = e.currentTarget.getAttribute('data-project');
        openCaseStudy(projectId);
      });
    });
  }

  // Despliegue accesible de Estudio de Caso
  function openCaseStudy(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project || !modalOverlay) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalProblem = document.getElementById('modalProblem');
    const modalSolution = document.getElementById('modalSolution');
    const modalChallenge = document.getElementById('modalChallenge');
    const modalStack = document.getElementById('modalStack');
    const modalResult = document.getElementById('modalResult');
    const modalMetrics = document.getElementById('modalMetrics');

    if (modalTitle) modalTitle.textContent = `${project.title} [${project.sectorId || 'LBA'}]`;

    const cs = project.caseStudy || {};
    if (modalProblem) modalProblem.textContent = cs.problem || 'Requerimiento registrado.';
    if (modalSolution) modalSolution.textContent = cs.solution || project.description;
    if (modalChallenge) modalChallenge.textContent = cs.technicalChallenge || 'Aseguramiento de consistencia de código.';
    if (modalStack) modalStack.textContent = cs.stack || (project.tags || []).join(' • ');
    if (modalResult) modalResult.textContent = cs.result || 'Sector 100% íntegro y verificado.';

    if (modalMetrics) {
      const metricsArr = Object.entries(project.metrics || {}).map(([k, v]) => `${k.toUpperCase()}: ${v}`);
      modalMetrics.textContent = metricsArr.length > 0 ? metricsArr.join(' | ') : '100% Integridad';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      const filter = button.getAttribute('data-filter');
      filterProjects(filter);
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeCaseStudy);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCaseStudy();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeCaseStudy();
    }
  });

  loadProjects();
})();
