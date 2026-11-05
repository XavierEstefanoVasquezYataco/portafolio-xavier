---
name: github-projects-sync
description: Obtiene los repositorios públicos de GitHub de Xavier y genera las tarjetas de proyecto para el portafolio.
---
# Objetivo
Sincronizar y estructurar los proyectos reales de GitHub del usuario XavierEstefanoVasquezYataco, catalogándolos con precisión técnica.

# Instrucciones
1. **Consulta de Repositorios:** Consultar la API de GitHub para el usuario `XavierEstefanoVasquezYataco`.
2. **Filtros Estrictos:** Excluir forks y cualquier repositorio formativo cuyo nombre comience por `skills-*`.
3. **Determinación de Estado:**
   - Asignar estado `ACTIVO` a aquellos repositorios con commits o actualizaciones en los últimos 30 días (como `sumaq-gym` o `MinijuegoRPG` en su rama `mejora-v2`).
   - Asignar estado `PUBLICADO` al resto de repositorios estables terminados.
4. **Respaldo Local Offline:** Mantener un archivo `data/projects.json` actualizado para garantizar disponibilidad instantánea sin depender del rate-limit de la API de GitHub.
5. **Tratamiento de Repositorios Privados:** Proyectos privados o comerciales (como `optica-renzo-lens`) deben mostrarse con ficha técnica, capturas o video demostrativo, estrictamente **sin enlace público externo**.

# Restricciones
- No inventar descripciones, lenguajes ni métricas ajenas al código real.
- No enlazar repositorios privados no accesibles al público.
