"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const valores = [
  "Atención 100% personalizada, sin prisas",
  "Tecnología digital de diagnóstico",
  "Enfoque en resultados naturales",
  "Financiamiento flexible",
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 relative overflow-hidden bg-[#F5F5F5]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(24,90,219,0.08), transparent),
            radial-gradient(ellipse 50% 30% at 10% 80%, rgba(91,155,213,0.08), transparent)
          `,
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#185ADB]/30 to-transparent blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
                alt="Dra. Blue en su consultorio"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-[#185ADB] text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-heading text-2xl font-bold">10+ años</p>
              <p className="text-sm text-white/80">cuidando sonrisas</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#185ADB] font-medium text-sm uppercase tracking-widest mb-3">
              Sobre mí
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#0A1931]">
              Hola, soy la <span className="gradient-text">Dra. Blue</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Especialista en rehabilitación oral y estética dental. Mi enfoque no es solo arreglar
              dientes: es devolverte la confianza para sonreír sin miedo. Cada paciente es único y
              cada tratamiento está diseñado a su medida. <span className="font-medium text-[#0A1931]">¿Hablamos?</span>
            </p>
            <ul className="space-y-3 mb-8">
              {valores.map((v) => (
                <li key={v} className="flex items-center gap-3 text-[#0A1931]">
                  <CheckCircle2 className="h-5 w-5 text-[#185ADB] shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <Link href="/reservar">
              <Button className="rounded-full bg-[#185ADB] hover:bg-[#0A1931] px-8 shadow-lg shadow-[#185ADB]/30 transition-all duration-300">
                Agenda tu evaluación gratis
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
