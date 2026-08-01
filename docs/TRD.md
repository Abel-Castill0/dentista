# TRD — Stack Tecnológico (Dra. Blue)

## Stack principal
| Tecnología | Versión | Justificación |
|------------|---------|---------------|
| Next.js 16 (App Router) | 16.2.12 | SSR, SEO local, SSG para 6 páginas de servicio |
| TypeScript | 5.x | Tipado estricto |
| Tailwind CSS | 4.x | Utility-first + @theme con tokens de marca |
| shadcn/ui (@base-ui/react) | latest | button, card, dialog, form, input, label, sheet, avatar, separator, accordion, dropdown-menu |
| Framer Motion | 12.43 | Hover cards, transiciones, scroll reveal |
| GSAP + ScrollTrigger | 3.15 | Hero animado, parallax foto Dra. Blue |
| Swiper | 14.x | Slider antes/después táctil |
| Three.js / @react-three/fiber | 0.185 / 9.6 | Hero 3D opcional (adaptado a paleta azul) |

## Backend & Storage
| Tecnología | Uso |
|------------|-----|
| Firebase Auth | Google OAuth (para futura cuenta paciente) |
| Firestore | Colección `reservas` |
| Cloudinary + next-cloudinary | Imágenes optimizadas (SmartImage con fallback) |

## Conversión
| Elemento | Uso |
|----------|-----|
| WhatsApp Business API | Botón flotante global + mensajes predefinidos por servicio + confirmación de reserva |
| n8n | Webhooks: bienvenida, recordatorio 24h, carrito abandonado, post-tratamiento |

## SEO Local
- Schema.org Dentist + LocalBusiness (JSON-LD con ubicación Surco, Lima)
- generateStaticParams para 6 landing pages de servicio
- Keywords locales por página
- Breadcrumbs en páginas de servicio

## Testing
- Playwright E2E: flujo completo de reserva (4 pasos) + página de servicio

## Analytics (preparado, descomentar)
- Google Analytics 4 (NEXT_PUBLIC_GA_ID)
- Meta Pixel (NEXT_PUBLIC_META_PIXEL_ID)
- Consentimiento gestionado por CookieBanner
