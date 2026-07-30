# TRD — Stack Tecnológico

## Stack principal
| Tecnología | Versión | Justificación |
|------------|---------|---------------|
| Next.js 14+ (App Router) | 14.2.x | SSR, SEO, rutas anidadas, server components |
| TypeScript | 5.x | Tipado estricto, mantenibilidad |
| Tailwind CSS | 3.4.x | Utility-first, rapidez, responsive |
| shadcn/ui | latest | Componentes accesibles basados en Radix UI |
| Framer Motion | 11.x | Microinteracciones y transiciones de página |
| GSAP + ScrollTrigger | 3.12.x | Animaciones scroll-driven premium |
| Swiper | 11.x | Sliders táctiles para antes/después |
| Three.js / @react-three/fiber | 8.x / latest | Elemento 3D sutil en Hero |

## Backend & Storage
| Tecnología | Uso |
|------------|-----|
| Firebase Auth | Google OAuth2 login |
| Firestore | Base de datos (reservas) |
| Cloudinary + next-cloudinary | Imágenes optimizadas (CldImage) |

## Automatización
| Herramienta | Uso |
|-------------|-----|
| n8n (local docker) | Workflows: bienvenida, recordatorio 24h, carrito abandonado, post-tratamiento |

## Testing
| Herramienta | Uso |
|-------------|-----|
| Playwright | E2E: formulario reserva, navegación |

## SEO
- Schema.org via JSON-LD (Dentist + LocalBusiness)
- Meta tags dinámicas
- Lazy loading nativo + Cloudinary optimización
