"use client";

import { motion, type Variants } from "framer-motion";
import { Heart, Sparkles, Bone, ScanFace, Braces, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Limpieza Dental",
    description: "Eliminación de placa y sarro para una sonrisa saludable y radiante.",
    color: "from-teal-400 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Blanqueamiento",
    description: "Recupera el brillo natural de tus dientes con nuestro tratamiento avanzado.",
    color: "from-amber-400 to-yellow-500",
  },
  {
    icon: Bone,
    title: "Implantes",
    description: "Solución permanente para dientes perdidos con resultados naturales.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: ScanFace,
    title: "Diagnóstico Digital",
    description: "Tecnología 3D para diagnósticos precisos y planes de tratamiento personalizados.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: Braces,
    title: "Ortodoncia",
    description: "Alineadores invisibles y brackets estéticos para una sonrisa perfecta.",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: ClipboardCheck,
    title: "Odontología General",
    description: "Cuidado integral para toda la familia con enfoque preventivo.",
    color: "from-teal-400 to-cyan-500",
  },
];

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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 md:py-32 relative aurora-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Servicios <span className="gradient-text">Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos una gama completa de servicios dentales con los más altos estándares de calidad.
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
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group spatial-card rounded-2xl p-6 bg-card border border-border/50 cursor-pointer"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${service.color} p-2.5 mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="h-full w-full text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
