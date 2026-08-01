"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.7 }
      );
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 }
      );
      gsap.fromTo(
        ".hero-stats",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.1 }
      );
      gsap.fromTo(
        ".hero-photo",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );

      const parallax = gsap.to(".hero-photo-wrap", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        parallax.scrollTrigger?.kill();
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1931]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 70% -10%, rgba(24,90,219,0.35), transparent),
            radial-gradient(ellipse 60% 40% at 10% 60%, rgba(91,155,213,0.18), transparent),
            radial-gradient(ellipse 50% 30% at 90% 90%, rgba(212,175,55,0.08), transparent)
          `,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#5B9BD5] animate-pulse" />
              Odontología Estética en Surco, Lima
            </div>
            <h1 className="hero-title font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mt-6">
              Tu sonrisa merece{" "}
              <span className="bg-gradient-to-r from-[#5B9BD5] to-[#9CC8F0] bg-clip-text text-transparent">
                brillar
              </span>
              . Yo te ayudo a conseguirlo.
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mt-6">
              Tratamientos estéticos dentales personalizados en Surco, Lima. Diseño de sonrisa,
              carillas, blanqueamiento y más. Atención 100% personalizada con la Dra. Blue.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/reservar">
                <Button
                  size="lg"
                  className="rounded-full text-base px-8 bg-[#185ADB] hover:bg-[#5B9BD5] shadow-xl shadow-[#185ADB]/40 hover:shadow-2xl transition-all duration-300"
                >
                  Agendar mi evaluación
                </Button>
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  💬 Escríbeme por WhatsApp
                </Button>
              </a>
            </div>
            <div className="hero-stats flex items-center gap-8 mt-10 text-sm text-white/60">
              <div>
                <p className="font-heading text-2xl font-bold text-white">+500</p>
                <p>Sonrisas transformadas</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="font-heading text-2xl font-bold text-white">10+</p>
                <p>Años de experiencia</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="font-heading text-2xl font-bold text-white">4.9★</p>
                <p>Valoración paciente</p>
              </div>
            </div>
          </div>

          <div className="hero-photo-wrap hidden lg:block relative">
            <div className="hero-photo relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#185ADB]/40 to-[#5B9BD5]/20 blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                  alt="Dra. Blue, odontóloga especialista en estética dental"
                  className="w-full h-[560px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                    <p className="font-heading font-bold text-white text-lg">Dra. Blue</p>
                    <p className="text-white/70 text-sm">
                      Especialista en Rehabilitación Oral y Estética Dental
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
