import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { services } from "@/lib/services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Servicio no encontrado" };

  return {
    title: `${service.titulo} en Surco, Lima`,
    description: service.descripcionCorta,
    keywords: [
      service.titulo.toLowerCase(),
      `${service.titulo.toLowerCase()} surco`,
      `${service.titulo.toLowerCase()} lima`,
      "dra blue",
    ],
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const waMessage = `Hola Dra. Blue, me interesa el servicio de ${service.titulo}. ¿Podrías darme más información?`;

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden bg-[#0A1931]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 70% -10%, rgba(24,90,219,0.35), transparent),
              radial-gradient(ellipse 50% 30% at 10% 80%, rgba(91,155,213,0.15), transparent)
            `,
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1 text-sm text-white/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#servicios" className="hover:text-white transition-colors">Servicios</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{service.titulo}</span>
          </nav>

          <div className="max-w-3xl">
            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 shadow-xl`}>
              <service.icon className="h-full w-full text-white" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {service.titulo}
              <span className="block bg-gradient-to-r from-[#5B9BD5] to-[#9CC8F0] bg-clip-text text-transparent">
                en Surco, Lima
              </span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              {service.descripcionLarga}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/reservar">
                <Button size="lg" className="rounded-full bg-[#185ADB] hover:bg-[#5B9BD5] px-8 shadow-xl shadow-[#185ADB]/40 transition-all duration-300">
                  Agenda tu evaluación gratuita
                </Button>
              </Link>
              <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  💬 Consultar por WhatsApp
                </Button>
              </a>
            </div>
            {service.precioDesde && (
              <p className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                Precio referencial: <span className="font-semibold text-white">{service.precioDesde}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[#0A1931] mb-6">
                Beneficios de este tratamiento
              </h2>
              <ul className="space-y-4">
                {service.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#185ADB] shrink-0 mt-0.5" />
                    <span className="text-[#0A1931]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#F5F5F5] p-8">
              <h3 className="font-heading text-2xl font-bold text-[#0A1931] mb-6">
                El proceso, paso a paso
              </h3>
              <ol className="space-y-6">
                {service.proceso.map((p, i) => (
                  <li key={p} className="flex items-start gap-4">
                    <span className="h-8 w-8 rounded-full bg-[#185ADB] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[#0A1931] pt-1">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-[#0A1931] mb-8 text-center">
            Preguntas frecuentes sobre {service.tituloCorto.toLowerCase()}
          </h2>
          <Accordion className="space-y-3">
            {service.faq.map((faq, i) => (
              <AccordionItem
                key={faq.pregunta}
                value={`faq-${i}`}
                className="spatial-card rounded-2xl border border-border/50 bg-white px-5 data-[state=open]:border-[#185ADB]/30"
              >
                <AccordionTrigger className="text-left font-medium text-[#0A1931] hover:text-[#185ADB]">
                  {faq.pregunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-[#0A1931]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(24,90,219,0.3), transparent)`,
          }}
        />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Lista para transformar tu sonrisa?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            La primera evaluación es gratis y sin compromiso. Hablemos de lo que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservar">
              <Button size="lg" className="rounded-full bg-[#185ADB] hover:bg-[#5B9BD5] px-8 shadow-xl shadow-[#185ADB]/40 transition-all duration-300">
                Agendar mi evaluación
              </Button>
            </Link>
            <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                💬 Escríbeme por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton service={service.titulo} />
    </>
  );
}
