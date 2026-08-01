"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";

const testimonials = [
  {
    name: "Andrea R.",
    role: "Diseño de sonrisa",
    image: "https://placehold.co/100x100/185ADB/FFFFFF?text=AR",
    content:
      "Nunca pensé que volvería a sonreír sin pena. Gracias Dra. Blue por devolverme la confianza.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    role: "Blanqueamiento + carillas",
    image: "https://placehold.co/100x100/0A1931/FFFFFF?text=CM",
    content:
      "Me daba vergüenza mi sonrisa por el café. Hoy no puedo dejar de sonreír. El resultado es increíblemente natural.",
    rating: 5,
  },
  {
    name: "Lucía T.",
    role: "Rehabilitación oral",
    image: "https://placehold.co/100x100/5B9BD5/FFFFFF?text=LT",
    content:
      "Recuperé la seguridad para hablar y comer sin miedo. La Dra. Blue me acompañó en cada paso con paciencia y calidez.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 relative aurora-section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#185ADB] font-medium text-sm uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0A1931]">
            Ellos ya <span className="gradient-text">confiaron en mí</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reales, pacientes reales. ¿Te imaginas la tuya?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="spatial-card rounded-2xl p-6 bg-white border border-border/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0A1931]">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
