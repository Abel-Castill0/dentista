# Design Brief — Clínica Dental Premium

## Paleta de color (Dental)
- **Primary**: `#0A8F7C` (verde dental fresco)
- **Primary Dark**: `#067060`
- **Primary Light**: `#E8F5F2`
- **Secondary**: `#F5F0E8` (marfil cálido)
- **Accent**: `#C8A87C` (oro suave)
- **Background**: `#FAFAF9` (off-white)
- **Surface**: `#FFFFFF`
- **Text Primary**: `#1A1A2E`
- **Text Secondary**: `#6B7280`
- **Border**: `#E5E7EB`

## Tipografía
- **Headings**: `Inter` (sans-serif, pesos 600-800)
- **Body**: `Inter` (pesos 300-500)
- Tamaños generosos: h1: clamp(2.5rem, 5vw, 4rem), h2: clamp(2rem, 4vw, 3rem)

## Espaciado
- Sistema basado en Tailwind: 4-8-12-16-20-24-32-40-48-64-80-96
- Section padding: py-24 md:py-32
- Container max-width: 1280px

## Aurora UI (fondos de sección)
- Gradientes borrosos: radial-gradient + backdrop-blur
- Colores: primary-light, secondary, accent con opacidades 0.1-0.3
- Animación lenta de desplazamiento (GSAP)

## Microinteracciones
- Hover en cards: scale(1.02) + shadow-lg + transición 300ms
- Botones: scale(0.97) on click, gradient en hover
- Navegación: underline animation desde centro
- Scroll reveal: fade-in + translateY(30px) con framer-motion
- Aurora background: movimiento lento parallax con GSAP

## UI Espacial
- Sombras suaves: box-shadow con blur-xl, opacidad baja
- Sensación de flotación: translateY(-4px) en hover
- Border-radius generoso: rounded-2xl (16px) en cards
- Glassmorphism en nav: backdrop-blur-md + bg-white/80
