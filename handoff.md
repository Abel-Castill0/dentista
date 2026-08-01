# Handoff — Dra. Blue · Odontología Estética en Surco, Lima

## Objetivos logrados

- [x] Web premium de marca personal para la Dra. Blue (rebranding completo desde "Clínica Dental Premium")
- [x] Hero con foto de la doctora + animaciones GSAP + parallax + Aurora UI azul
- [x] Slider Antes/Después táctil (Swiper)
- [x] 6 landing pages de servicio estáticas (SSG) con copy emocional y SEO local
- [x] Formulario de reserva multi-paso (4 pasos) con Firestore y mensaje WhatsApp
- [x] Botón WhatsApp flotante global con mensajes predefinidos por servicio
- [x] Secciones: Sobre la Dra. Blue, Proceso (4 pasos), FAQ, Ubicación con Google Maps
- [x] Páginas legales con contexto peruano (Ley 29733, arbitraje Ley 26572, DMCA)
- [x] Blog con 3 artículos placeholder optimizados SEO
- [x] SEO: Schema.org Dentist + LocalBusiness (Surco, Lima), Open Graph, keywords locales
- [x] Firebase Auth (Google OAuth) + Firestore configurados
- [x] n8n webhooks documentados (incluyendo flujos WhatsApp)
- [x] Cookie banner + analytics (GA4 + Meta Pixel) preparados y comentados
- [x] Test E2E Playwright actualizado al nuevo flujo

## Stack final con versiones

| Tecnología | Versión |
|------------|---------|
| Next.js | 16.2.12 |
| React | 19.2.4 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Framer Motion | 12.43.0 |
| GSAP | 3.15.0 |
| Swiper | 14.0.7 |
| Three.js | 0.185.1 |
| @react-three/fiber | 9.6.1 |
| @react-three/drei | 10.7.7 |
| Firebase | 12.17.0 |
| next-cloudinary | 6.17.5 |
| shadcn/ui | latest (@base-ui/react) |
| Playwright | latest |

## Datos de la Dra. Blue (placeholders a confirmar)
- **Nombre real**: [PENDIENTE — poner en legales/aviso-legal y metadata]
- **WhatsApp**: +51 999 999 999 → cambiar en `.env.local` (`NEXT_PUBLIC_WHATSAPP_NUMBER=51XXXXXXXXX`)
- **Email**: hola@drablue.pe
- **Dirección**: Av. Caminos del Inca 1234, Santiago de Surco
- **Instagram**: @drablue.dentista (enlazado en footer)
- **Fotos**: reemplazar los Unsplash placeholders por fotos reales

## Cómo obtener credenciales

### Firebase (Auth + Firestore)
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un proyecto → Authentication → Sign-in method → Google
3. Project Settings → General → Your apps → Web app
4. Copia los valores en `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   ```
5. Firestore Database → Create database → Modo prueba
6. Crea colección `reservas`

### Cloudinary
1. [Cloudinary Console](https://console.cloudinary.com/) → Cloud Name, API Key, API Secret
2. Pega en `.env.local`. Las imágenes cargadas en Cloudinary usan automáticamente CldImage (SmartImage)
3. Usa el public_id de cada imagen como `src`

### WhatsApp
1. Número real en `.env.local`: `NEXT_PUBLIC_WHATSAPP_NUMBER=51XXXXXXXXX`
2. Mensaje default: `NEXT_PUBLIC_WHATSAPP_MESSAGE`
3. (Opcional) WhatsApp Business API + Meta Business para automatizar con n8n

### n8n
1. `npx n8n start` + ngrok para exponer webhooks
2. Crea los workflows de `docs/automations.md`
3. Pega las URLs en `.env.local`

### Analytics
1. GA4: [analytics.google.com](https://analytics.google.com/) → `NEXT_PUBLIC_GA_ID=G-XXXX`
2. Meta Pixel: [business.facebook.com](https://business.facebook.com/) → `NEXT_PUBLIC_META_PIXEL_ID`
3. Descomenta los scripts en `src/app/layout.tsx`

## Despliegue (Vercel)
1. Conecta el repo a Vercel
2. Añade todas las variables de `.env.local`
3. Despliega — build verificado

## Próximos pasos
1. Confirmar nombre legal de la doctora → actualizar aviso legal y metadata
2. Reemplazar placeholders: fotos reales, testimonios reales, antes/después reales
3. Conectar Google Business Profile ("dentista surco" en Maps)
4. Publicar blog real con artículos SEO
5. Activar n8n + WhatsApp Business API
6. Activar Meta Pixel + campañas Instagram
7. Campaña Google Ads local

## Posibles mejoras futuras
- Panel de administración de reservas
- Chatbot IA en WhatsApp
- Portal paciente con historia clínica
- Videoconsulta / teledentistry
- Segunda sede o modo multi-consultorio
- PWA instalable

## Comandos útiles
```bash
npm run dev            # Desarrollo
npm run build          # Build producción
npm start              # Servir build
npx playwright test    # Tests E2E
npx next lint          # Lint
```
