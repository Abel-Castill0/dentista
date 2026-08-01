"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cases = [
  {
    before: "https://placehold.co/600x400/0A1931/FFFFFF?text=Antes",
    after: "https://placehold.co/600x400/185ADB/FFFFFF?text=Después",
    title: "Blanqueamiento Dental",
    description: "Resultado después de 1 sesión",
  },
  {
    before: "https://placehold.co/600x400/0A1931/FFFFFF?text=Antes",
    after: "https://placehold.co/600x400/185ADB/FFFFFF?text=Después",
    title: "Carillas de Porcelana",
    description: "Diseño de sonrisa completo",
  },
  {
    before: "https://placehold.co/600x400/0A1931/FFFFFF?text=Antes",
    after: "https://placehold.co/600x400/185ADB/FFFFFF?text=Después",
    title: "Rehabilitación Oral",
    description: "Recuperación integral en 4 meses",
  },
];

export function BeforeAfterSlider() {
  return (
    <section id="resultados" className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#185ADB] font-medium text-sm uppercase tracking-widest mb-3">
            Antes / Después
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0A1931]">
            Resultados reales, <span className="gradient-text">pacientes reales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mira cómo han transformado su sonrisa. ¿Te imaginas la tuya?
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-14"
          >
            {cases.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="spatial-card rounded-2xl overflow-hidden bg-white border border-border/50">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square">
                      <img
                        src={item.before}
                        alt="Antes del tratamiento"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A1931]/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        Antes
                      </span>
                    </div>
                    <div className="relative aspect-square">
                      <img
                        src={item.after}
                        alt="Después del tratamiento"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#185ADB]/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        Después
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-[#0A1931]">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
