# PRD — Clínica Dental Premium

## Objetivo
Web corporativa premium para clínica dental con reserva online, diseño espacial tipo Awwwards, optimización SEO local y automatización de recordatorios.

## Secciones
1. **Home**
   - Hero con animación 3D (Three.js) + Aurora UI gradient background
   - Servicios (grid con iconos)
   - Slider Antes/Después (Swiper touch)
   - Testimonios con fotos reales (CldImage)
   - Equipo médico (grid con avatar)
   - CTA agendamiento
   - Footer con datos legales + redes + mapa embebido

2. **/reservar**
   - Formulario multi-paso (paso 1: servicio, paso 2: fecha/hora, paso 3: datos personales, paso 4: confirmación)
   - Indicador de progreso
   - Integración Firestore
   - Confirmación visual + email placeholder

3. **/legales**
   - `/legales/politica-privacidad`
   - `/legales/terminos-de-servicio`
   - `/legales/aviso-legal`
   - Cláusula DMCA Safe Harbor + Arbitraje

4. **/contacto**
   - Mapa embebido (Google Maps placeholder)
   - Formulario de contacto
   - Datos de clínica: dirección, teléfono, email, horario

5. **/blog** (opcional)
   - Listado placeholder con cards de artículos

## Flujo de reserva
1. Seleccionar servicio (limpieza, blanqueamiento, implante, etc.)
2. Elegir fecha y hora disponibles
3. Ingresar nombre, email, teléfono
4. Confirmar y enviar → guarda en Firestore → muestra éxito
5. (opcional) Webhook a n8n para recordatorio

## Funcionalidades clave
- Autenticación Google OAuth (Firebase Auth)
- Base de datos: Firestore (colección `reservas`)
- Imágenes optimizadas vía Cloudinary (CldImage)
- Automatización n8n: bienvenida, recordatorio 24h, carrito abandonado, post-tratamiento
- SEO con Schema.org Dentist + LocalBusiness
- Cookie banner con opción analíticas
- Fully responsive mobile-first
