"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Alejandro Ruiz",
    role: "Director Médico",
    image: "https://placehold.co/400x400/0A8F7C/FAFAF9?text=Dr.+Ruiz",
    description: "Especialista en implantología y cirugía oral con más de 20 años de experiencia.",
  },
  {
    name: "Dra. Laura Méndez",
    role: "Ortodoncista",
    image: "https://placehold.co/400x400/C8A87C/FAFAF9?text=Dra.+Méndez",
    description: "Experta en ortodoncia invisible y tratamientos de alineación dental.",
  },
  {
    name: "Dr. Pablo Serrano",
    role: "Odontólogo General",
    image: "https://placehold.co/400x400/6366f1/FAFAF9?text=Dr.+Serrano",
    description: "Odontología general y estética dental con enfoque preventivo.",
  },
];

export function TeamSection() {
  return (
    <section id="equipo" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Conoce a nuestro <span className="gradient-text">equipo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Profesionales apasionados dedicados a cuidar tu sonrisa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group text-center"
            >
              <div className="relative mx-auto mb-6 h-64 w-64 overflow-hidden rounded-2xl spatial-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
