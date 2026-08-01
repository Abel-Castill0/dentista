"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 md:py-32 relative aurora-section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#185ADB] font-medium text-sm uppercase tracking-widest mb-3">
            Mis tratamientos
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0A1931]">
            Todo lo que puedo hacer por <span className="gradient-text">tu sonrisa</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Desde una limpieza profunda hasta un diseño de sonrisa completo.
            Cada tratamiento está pensado para ti.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <Link
                href={`/servicios/${service.slug}`}
                className="group spatial-card rounded-2xl p-6 bg-white border border-border/50 block h-full"
              >
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${service.color} p-2.5 mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="h-full w-full text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-[#185ADB] transition-colors">
                  {service.tituloCorto}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.descripcionCorta}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-[#185ADB]">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
