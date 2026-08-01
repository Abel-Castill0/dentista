# PRD — Dra. Blue · Odontología Estética

## Objetivo
Web premium de marca personal para la Dra. Blue, odontóloga especialista en estética dental y rehabilitación oral en Santiago de Surco, Lima. Primera web nivel Awwwards del sector dental en Lima con funnel de conversión automatizado.

## Marca
- **Nombre artístico**: Dra. Blue (Instagram: @drablue.dentista)
- **Especialidad**: Rehabilitación oral + estética dental
- **Ubicación**: Santiago de Surco, Lima, Perú
- **Propuesta**: Marca personal protagonista — la doctora es el rostro y la voz de la web

## Páginas

1. **`/` Home**
   - Hero: foto real de la doctora + GSAP animations + Aurora UI azul
   - Slider Antes/Después (Swiper)
   - Servicios (6 cards → landing pages)
   - Sobre la Dra. Blue (historia + filosofía)
   - Testimonios
   - Proceso (4 pasos: Te escucho, Diagnostico, Transformo, Sonríes)
   - Ubicación (Google Maps + datos)
   - FAQ (accordion)
   - Footer

2. **`/servicios/[slug]`** — 6 páginas dinámicas (SSG):
   - diseño-de-sonrisa
   - carillas-dentales
   - blanqueamiento-dental
   - protesis-dental
   - rehabilitacion-oral
   - limpieza-dental
   Cada una: hero, beneficios, proceso, FAQ, CTA + WhatsApp con mensaje predefinido

3. **`/reservar`** — Formulario multi-paso (4 pasos):
   1. Datos personales (nombre, email, WhatsApp)
   2. Servicio de interés
   3. Fecha y hora preferida
   4. Confirmación → "Te contactaremos en menos de 2 horas por WhatsApp"
   - Guarda en Firestore (colección `reservas`)
   - Webhook n8n de bienvenida

4. **`/legales/*`** — 3 páginas (privacidad, términos, aviso legal) con contexto peruano (Ley 29733)

5. **`/contacto`** — Datos + mapa + WhatsApp directo

6. **`/blog`** — 3 artículos placeholder optimizados SEO

## SEO Local
- Schema.org Dentist + LocalBusiness (JSON-LD)
- Keywords: diseño de sonrisa surco, carillas dentales lima, blanqueamiento dental surco, dra blue dentista
- Meta por página de servicio

## Conversión
- Botón WhatsApp flotante global
- Mensajes WhatsApp predefinidos por servicio
- CTA "Agenda tu evaluación gratuita" en todas las páginas
- Confirmación de reserva con enlace directo a WhatsApp

## Automatizaciones (n8n)
- Bienvenida (confirmación de solicitud)
- Recordatorio 24h antes
- Carrito abandonado (reserva no completada, 1h)
- Post-tratamiento (cuidados + encuesta)
