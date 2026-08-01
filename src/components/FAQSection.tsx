"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whatsappLink } from "@/lib/whatsapp";

const faqs = [
  {
    pregunta: "¿Duele el blanqueamiento dental?",
    respuesta: "No, usamos técnicas modernas sin sensibilidad. Además tengo protocolos de confort especiales para pacientes con dientes sensibles.",
  },
  {
    pregunta: "¿Cuánto dura un diseño de sonrisa?",
    respuesta: "Depende del caso, pero entre 3 y 5 sesiones. En la evaluación inicial te doy un plan exacto con tiempos y presupuesto.",
  },
  {
    pregunta: "¿Aceptan todos los seguros?",
    respuesta: "Sí, trabajamos con los principales seguros dentales del Perú. Consúltame cuál es tu seguro y te confirmo la cobertura.",
  },
  {
    pregunta: "¿Tienen financiamiento?",
    respuesta: "Sí, tenemos opciones de financiamiento flexibles. Escríbeme por WhatsApp y te doy todas las alternativas para tu caso.",
  },
  {
    pregunta: "¿El tratamiento duele?",
    respuesta: "Utilizo técnicas modernas y anestesia de precisión. La mayoría de mis pacientes describen la experiencia como sorprendentemente cómoda.",
  },
  {
    pregunta: "¿Cómo agendo mi primera cita?",
    respuesta: "Completa el formulario de reserva en esta web o escríbeme directo por WhatsApp. Te confirmaré la cita en menos de 2 horas.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#185ADB] font-medium text-sm uppercase tracking-widest mb-3">
            Resolvamos tus dudas
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0A1931]">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.pregunta}
                value={`faq-${i}`}
                className="spatial-card rounded-2xl border border-border/50 px-5 data-[state=open]:border-[#185ADB]/30"
              >
                <AccordionTrigger className="text-left font-medium text-[#0A1931] hover:text-[#185ADB] [&[data-state=open]>svg]:text-[#185ADB]">
                  {faq.pregunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">¿Tienes otra pregunta?</p>
            <a
              href={whatsappLink("Hola Dra. Blue, tengo una pregunta sobre tus tratamientos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#185ADB] font-medium hover:underline"
            >
              💬 Pregúntame por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
