---
name: accessibility-responsive-qa
description: Revisa y garantiza la accesibilidad y el diseño adaptativo en dispositivos móviles, tablets y monitores de escritorio.
---
# Objetivo
Asegurar que el portafolio cumpla con las pautas de accesibilidad web WCAG 2.1 nivel AA y ofrezca una experiencia responsiva fluida sin desbordamientos horizontales.

# Instrucciones
1. **Contraste y Visibilidad:** Verificar relaciones de contraste mínimas de 4.5:1 para texto normal y 3:1 para controles y gráficos; asegurar indicador de foco visible (`:focus-visible`).
2. **Navegación por Teclado:** Permitir navegación completa mediante tabulación secuencial lógica, con enlace de salto (`skip-link`) y tecla `Escape` para cerrar diálogos o saltar animaciones.
3. **Semántica y Lectores de Pantalla:** Emplear elementos semánticos de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`), roles ARIA pertinentes y textos alternativos (`alt`) en imágenes.
4. **Verificación Multidispositivo:** Probar y auditar el diseño en anchos clave:
   - **360 px:** Móvil compacto (sin desbordamiento horizontal, botones táctiles mínimo 44x44px).
   - **768 px:** Tablet y dispositivos medianos.
   - **1280 px:** Escritorio y pantallas panorámicas.

# Restricciones
- No utilizar librerías externas que rompan la navegación por teclado ni degraden el lector de pantalla.
- No ocultar elementos interactivos con `display:none` sin considerar alternativas accesibles.
