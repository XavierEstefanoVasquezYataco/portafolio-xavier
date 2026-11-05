---
name: deploy-netlify
description: Despliega el portafolio en Netlify o GitHub Pages y proporciona el enlace final para incorporarlo al CV.
---
# Objetivo
Publicar el sitio web de forma automatizada, continua y reproducible con protocolo seguro HTTPS forzado y cabeceras de protección.

# Instrucciones
1. **Configuración de Netlify:**
   - Mantener el archivo `netlify.toml` con directorio de publicación configurado en la raíz (`publish = "."`).
   - Configurar cabeceras de seguridad HTTP (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
   - Configurar directivas de caché estática para CSS, JS y assets.
2. **Validación de Build:**
   - Comprobar que todos los recursos resuelvan localmente antes del commit.
   - Verificar la disponibilidad del archivo de CV PDF descargable y los datos JSON.
3. **Entrega de URL:**
   - Proveer el enlace final de producción de Netlify o dominio personalizado.
   - Indicar exactamente qué enlace en el CV de Xavier debe sustituirse por esta URL.

# Restricciones
- No utilizar configuraciones propietarias o dependientes de builds fallidos.
