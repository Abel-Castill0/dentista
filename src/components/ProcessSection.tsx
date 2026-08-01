"use client";

import { motion } from "framer-motion";
import { MessageCircle, Stethoscope, Wand2, Smile } from "lucide-react";

const pasos = [
  {
    icon: MessageCircle,
    titulo: "Te escucho",
    descripcion: "Cuéntame qué te preocupa de tu sonrisa. Tu historia es el punto de partida.",
  },
  {
    icon: Stethoscope,
    titulo: "Diagnostico",
    descripcion: "Evalúo tu caso con tecnología digital y diseño un plan a tu medida.",
  },
  {
    icon: Wand2,
    titulo: "Transformo",
    descripcion: "Diseño y ejecuto tu tratamiento personalizado, paso a paso.",
  },
  {
    icon: Smile,
    titulo: "Sonríes",
    descripcion: "Sales con la sonrisa que siempre quisiste. Y nunca más te escondes al reír.",
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="py-24 md:py-32 relative overflow-hidden bg-[#0A1931]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% -10%, rgba(24,90,219,0.3), transparent),
            radial-gradient(ellipse 50% 30% at 90% 90%, rgba(212,175,55,0.06), transparent)
          `,
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#5B9BD5] font-medium text-sm uppercase tracking-widest mb-3">
            El proceso
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Así trabajamos juntos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <span className="absolute top-4 right-4 font-heading text-4xl font-bold text-white/10">
                0{i + 1}
              </span>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#185ADB] to-[#5B9BD5] p-2.5 mb-4 shadow-lg">
                <paso.icon className="h-full w-full text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-white">
                {paso.titulo}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{paso.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
