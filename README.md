# Portafolio Web Profesional — Xavier Estefano Vásquez Yataco

> **Concepto Creativo:** "Centro de Recuperación de Datos Forense"  
> **Perfil:** Software | Soporte TI | Análisis de Datos  
> **Ubicación:** Lima, Perú  
> **Formación:** Estudiante de Ingeniería de Software — 7° Ciclo, Universidad Tecnológica del Perú (UTP) | **Décimo Superior**  
> **Sitio Web Oficial:** [portafolioxevy.netlify.app](https://portafolioxevy.netlify.app/)  

---

## 💾 Concepto & Dirección de Arte

El portafolio recrea la experiencia de un laboratorio forense de recuperación de medios de almacenamiento:
1. **Hero de Diagnóstico:** Simula el montaje de cabezales y lectura de bloques LBA con hardware especializado (**PC-3000**), visualizando sectores dañados transicionando a sectores restaurados antes de revelar el perfil profesional.
2. **Sectores Recuperados:** Cada proyecto de ingeniería y análisis de datos se presenta como una unidad LBA verificada con estado `ACTIVO` (en desarrollo) o `PUBLICADO`.
3. **Estilo Visual:** Tema oscuro sobrio y corporativo, un único color de acento (**cian forense `#00f0ff`**), tipografía monoespaciada para metadatos y sans-serif moderna para alta legibilidad.
4. **Accesibilidad & Rendimiento:** Cero dependencias externas pesadas, cumplimiento WCAG AA, compatibilidad con `prefers-reduced-motion` y Lighthouse 90+.

---

## 📁 Estructura del Proyecto

```text
Portafolio Xavier/
├── index.html                   # Documento semántico y accesible
├── css/
│   ├── tokens.css               # Variables CSS (:root): colores, tipografía, espaciado
│   ├── base.css                 # Reset, layout base, botones y badges
│   ├── hero.css                 # Animación y consola HUD de recuperación forense
│   └── sections.css             # Estilos de perfil, trayectoria, sectores y contacto
├── js/
│   ├── hero-scan.js             # Secuencia de escaneo LBA, logs y revelación
│   ├── projects.js              # Carga de data/projects.json, filtrado y modal
│   └── main.js                  # Navegación reactiva, portapapeles y shell interactivo
├── data/
│   └── projects.json            # Base de datos de proyectos reales
├── assets/
│   ├── cv/
│   │   └── CV_Xavier_Estefano_Vasquez_Yataco.pdf # CV oficial verificado
│   └── img/                     # Recursos gráficos y multimedia
├── netlify.toml                 # Configuración de despliegue, seguridad y caché
├── README.md                    # Documentación técnica
└── .agents/
    └── skills/                  # Las 8 skills especializadas del agente
        ├── accessibility-responsive-qa.md
        ├── content-writer-es.md
        ├── deploy-netlify.md
        ├── github-projects-sync.md
        ├── hero-recovery-scan.md
        ├── performance-seo.md
        ├── portfolio-art-direction.md
        └── project-case-study.md
```

---

## 🛠️ Stack Tecnológico

- **Frontend:** HTML5 semántico, CSS3 modular (Custom Properties), Vanilla JavaScript ES6+.
- **Soporte TI & Forense:** PC-3000, UFS Explorer, R-Studio, Diskpart / CMD, Auditoría de integridad.
- **Lenguajes:** Java, C++ (POO), TypeScript, JavaScript, SQL / MySQL, HTML/CSS.
- **Análisis de Datos:** Power BI (Avanzado / DAX / Modelo Estrella), Python (Pandas / EDA), Excel Profesional (UPC / Romero).
- **Herramientas & Despliegue:** Git, GitHub, SCRUM, Netlify CI/CD.

---

## 🚀 Proyectos Reales Mostrados ("Sectores Recuperados")

| Sector LBA | Proyecto | Lenguaje / Stack | Estado | Enlace |
| :--- | :--- | :--- | :--- | :--- |
| `LBA-0x7F2A` | **sumaq-gym** | TypeScript | **ACTIVO** | [GitHub Repo](https://github.com/XavierEstefanoVasquezYataco/sumaq-gym) |
| `LBA-0x4A1E` | **MinijuegoRPG** | C++ (rama mejora-v2) | **ACTIVO** | [GitHub Repo](https://github.com/XavierEstefanoVasquezYataco/MinijuegoRPG) |
| `LBA-0x9B01` | **optica-renzo-lens** | JavaScript | **PUBLICADO** | *Repo Privado (Ficha Técnica)* |
| `LBA-0x2E8D` | **MinimarketInventario** | Java / MySQL (MVC) | **PUBLICADO** | [GitHub Repo](https://github.com/XavierEstefanoVasquezYataco/MinimarketInventario) |
| `LBA-0x5C19` | **sistema-gestion-escolar** | JavaScript / SQL | **PUBLICADO** | [GitHub Repo](https://github.com/XavierEstefanoVasquezYataco/sistema-gestion-escolar) |
| `LBA-0x83B4` | **Musikeros** | CSS / HTML | **PUBLICADO** | [GitHub Repo](https://github.com/XavierEstefanoVasquezYataco/Musikeros) • [Demo Netlify](https://musikeros.netlify.app) |
| `LBA-0x1D0F` | **Proyecto-PowerBI** | Power BI / DAX / ETL | **PUBLICADO** | [GitHub Repo](https://github.com/XavierEstefanoVasquezYataco/Proyecto-PowerBI) |

---

## 💻 Vista Previa Local

Para ejecutar en local con cualquier servidor estático:

```bash
# Opción 1: Con Python
python -m http.server 8000

# Opción 2: Con Node (npx)
npx serve .

# Opción 3: Abrir directamente index.html en tu navegador preferido
```

---

## 🌐 Despliegue en Netlify

El archivo `netlify.toml` ya está preparado para despliegue directo conectando el repositorio de GitHub en [app.netlify.com](https://app.netlify.com) o utilizando Netlify CLI:

```bash
netlify deploy --prod
```
