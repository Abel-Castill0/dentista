import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con la Dra. Blue en Santiago de Surco, Lima. WhatsApp, email y ubicación del consultorio.",
};

const contactInfo = [
  { icon: MapPin, label: "Dirección", value: "Av. Caminos del Inca 1234, Santiago de Surco" },
  { icon: Phone, label: "WhatsApp", value: "+51 999 999 999" },
  { icon: Mail, label: "Email", value: "hola@drablue.pe" },
  { icon: Clock, label: "Horario", value: "Lun-Vie 9:00-19:00 · Sáb 9:00-13:00" },
];

export default function ContactoPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#185ADB] font-medium text-sm uppercase tracking-widest mb-3">
            Hablemos
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0A1931]">
            <span className="gradient-text">Contacta</span> con la Dra. Blue
          </h1>
          <p className="text-lg text-muted-foreground">
            ¿Dudas sobre tu sonrisa? Escríbeme y te respondo personalmente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="spatial-card rounded-2xl bg-white border border-border/50 p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#185ADB]/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-[#185ADB]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-[#0A1931]">{item.value}</p>
                </div>
              </div>
            ))}

            <a
              href={whatsappLink("Hola Dra. Blue, tengo una consulta sobre mis dientes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full rounded-full bg-[#25D366] hover:bg-[#128C7E] py-6 text-base shadow-lg shadow-[#25D366]/30 transition-all duration-300">
                💬 Escríbeme por WhatsApp
              </Button>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden spatial-card border border-border/50 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-76.9986!3d-12.1135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA2JzQ4LjYiUyA3NsKwNTknNTUuMCJX!5e0!3m2!1ses!2spe!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del consultorio de la Dra. Blue en Surco, Lima"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
