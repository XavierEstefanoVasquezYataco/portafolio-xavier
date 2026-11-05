---
name: hero-recovery-scan
description: Construye y mantiene el hero interactivo que simula el escaneo y la recuperación de un disco y revela la identidad de Xavier.
---
# Objetivo
Presentar un hero inmersivo y memorable de 4 a 6 segundos que comunique la especialidad técnica de Xavier sin bloquear la navegación ni comprometer la usabilidad.

# Instrucciones
1. **Fase 1 (Terminal de Diagnóstico):** Secuencia de comandos forenses (`Detectando unidad...`, `Montando bloque LBA...`, `Iniciando escaneo...`).
2. **Fase 2 (Barra y Cuadrícula de Sectores):** Barra de progreso visual y matriz de bloques LBA que transicionan dinámicamente de sectores dañados/no leídos a sectores recuperados (`recovered`).
3. **Fase 3 (Revelación del Nombre):** Despliegue del perfil: `Xavier Estefano Vásquez Yataco`, rol `Software | Soporte TI | Análisis de Datos`, formación `7° ciclo UTP | Décimo Superior` y botones de acción.
4. **Control del Visitante:** Botón visible "Saltar animación [ESC]" y memoria en `sessionStorage` para no repetir la animación si el usuario ya visitó la página en la sesión activa.
5. **Tolerancia a Fallos:** Estructurar el HTML para que el contenido principal sea 100% visible y accesible si JavaScript está deshabilitado o si se detecta `prefers-reduced-motion`.

# Restricciones
- No bloquear el scroll ni impedir la interacción con el resto del sitio mientras corre la animación.
- Duración total de la secuencia automática acotada a un máximo de 6 segundos.
