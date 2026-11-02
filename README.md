# Dentista — Dra. Blue

Sitio web para odontología estética y rehabilitación oral en Surco, Lima.

## Requisitos

- Node.js compatible con Next.js 16.
- npm.
- Variables de entorno según `.env.example` para activar Firebase y servicios externos.

## Desarrollo

```bash
npm ci
Copy-Item .env.example .env.local # Windows PowerShell; completa los valores necesarios
npm run dev
```

Abre <http://localhost:3000>.

## Comandos

```bash
npm run lint
npm run build
npx playwright test
```

## Configuración

Consulta `handoff.md` para configurar Firebase, Cloudinary, WhatsApp, n8n y analítica. Nunca publiques `.env.local` ni el respaldo privado de credenciales. Para desplegar en Vercel, configura las variables necesarias en el panel del proyecto.

---

### Desarrollado por

**Abel Castillo**

🌐 [Portafolio profesional](https://portafolio-abelcastillo.vercel.app/)