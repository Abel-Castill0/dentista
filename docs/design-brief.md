# Design Brief — Dra. Blue · Odontología Estética

## Paleta de color (Blue brand)
| Color | Código | Uso |
|-------|--------|-----|
| Azul profundo | `#0A1931` | Fondos de secciones oscuras, textos principales |
| Azul medio | `#185ADB` | Botones, links, acentos, CTA |
| Azul claro | `#5B9BD5` | Gradientes, detalles |
| Blanco | `#FFFFFF` | Fondos, contraste |
| Dorado sutil | `#D4AF37` | Detalles premium (estrellas, iconos) |
| Gris cálido | `#F5F5F5` | Fondos secundarios |

## Tipografía
- **Headings**: `Playfair Display` (serif elegante, pesos 600-800)
- **Body**: `Inter` (sans-serif limpia, pesos 300-500)
- Tamaños: h1: clamp(2.5rem, 5vw, 4.5rem), h2: clamp(2rem, 4vw, 3rem)

## Espaciado
- Section padding: py-24 md:py-32
- Container: max-w-7xl (1280px)

## Aurora UI (fondos de sección)
- Gradientes radiales borrosos en azul: `rgba(24,90,219,0.15-0.35)` sobre fondos blancos o `#0A1931`
- Opcional: acento dorado al 6-8% en esquinas

## Microinteracciones
- Cards: hover scale(1.02) + shadow profunda + translateY(-4px)
- Botones: shadow azul que crece en hover, scale(0.97) en click
- Nav: underline desde centro en azul medio
- Scroll reveal: framer-motion fade-in + translateY
- Hero: GSAP stagger + parallax en foto de la doctora
- WhatsApp flotante: aparece con spring + ping verde

## UI Espacial
- Sombras suaves con blur-xl, opacidad baja
- Flotación: translateY(-4px) en hover
- Border-radius generoso: rounded-2xl (16px) en cards
- Glassmorphism en nav: backdrop-blur + bg-white/70
- Sección oscura del proceso: cards bg-white/5 + backdrop-blur

## Jerarquía visual
```
DRA. BLUE          ← Nombre artístico / marca
Odontología Estética y Rehabilitación Oral
```
- La doctora es protagonista: foto real en hero y sección "Sobre mí"
- Voz en primera persona en todo el copy
