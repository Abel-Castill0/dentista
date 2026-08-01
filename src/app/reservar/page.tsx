import { BookingForm } from "@/components/BookingForm";
import type { Metadata } from "next";
import { MessageCircle, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Agenda tu evaluación gratis",
  description:
    "Reserva tu evaluación gratuita con la Dra. Blue en Surco, Lima. Te contactaremos en menos de 2 horas por WhatsApp.",
};

const beneficios = [
  {
    icon: MessageCircle,
    titulo: "Confirmación por WhatsApp",
    descripcion: "Te contacto en menos de 2 horas para confirmar tu cita.",
  },
  {
    icon: Clock,
    titulo: "Primera evaluación gratis",
    descripcion: "Sin costo y sin compromiso. Solo conversamos sobre tu sonrisa.",
  },
  {
    icon: ShieldCheck,
    titulo: "100% personalizado",
    descripcion: "Cada plan se diseña a tu medida, con total transparencia.",
  },
];

export default function ReservarPage() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% -10%, rgba(24,90,219,0.1), transparent),
            radial-gradient(ellipse 50% 30% at 90% 90%, rgba(91,155,213,0.08), transparent)
          `,
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#185ADB] font-medium text-sm uppercase tracking-widest mb-3">
            Reserva online
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0A1931]">
            Agenda tu <span className="gradient-text">evaluación gratuita</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Completa estos 3 pasos y te contactaré en menos de 2 horas por WhatsApp.
          </p>
        </div>

        <BookingForm />

        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-16">
          {beneficios.map((b) => (
            <div key={b.titulo} className="spatial-card rounded-2xl bg-white border border-border/50 p-5 text-center">
              <div className="h-10 w-10 rounded-xl bg-[#185ADB]/10 flex items-center justify-center mx-auto mb-3">
                <b.icon className="h-5 w-5 text-[#185ADB]" />
              </div>
              <p className="font-medium text-[#0A1931] mb-1">{b.titulo}</p>
              <p className="text-sm text-muted-foreground">{b.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
