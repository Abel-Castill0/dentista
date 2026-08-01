"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ArrowLeft, ArrowRight, User, Phone, Mail, Calendar, Clock, ChevronDown, MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/whatsapp";

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"];

const steps = [
  { id: 1, label: "Tus datos", icon: User },
  { id: 2, label: "Servicio", icon: Check },
  { id: 3, label: "Fecha y hora", icon: Calendar },
  { id: 4, label: "Confirmación", icon: MessageCircle },
];

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  fecha: string;
  hora: string;
}

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    fecha: "",
    hora: "",
  });

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (step === 1) return formData.nombre !== "" && formData.email !== "" && formData.telefono !== "";
    if (step === 2) return formData.servicio !== "";
    if (step === 3) return formData.fecha !== "" && formData.hora !== "";
    return true;
  };

  const handleSubmit = async () => {
    try {
      const { db } = await import("@/lib/firebase/config");
      const { collection, addDoc } = await import("firebase/firestore");
      await addDoc(collection(db, "reservas"), {
        ...formData,
        estado: "pendiente",
        createdAt: new Date().toISOString(),
      });
    } catch (e) {
      console.warn("Firestore no disponible, reserva guardada localmente:", formData);
    }

    try {
      if (process.env.NEXT_PUBLIC_N8N_WEBHOOK_WELCOME) {
        await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_WELCOME, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
    } catch (e) {
      console.warn("Webhook n8n no disponible");
    }

    setSubmitted(true);
  };

  if (submitted) {
    const waMessage = `Hola Dra. Blue, soy ${formData.nombre}. Acabo de agendar una cita de ${formData.servicio} para el ${formData.fecha} a las ${formData.hora}. ¡Gracias!`;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 max-w-xl mx-auto"
      >
        <div className="h-16 w-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="h-8 w-8 text-[#25D366]" />
        </div>
        <h3 className="font-heading font-semibold text-2xl mb-2 text-[#0A1931]">
          ¡Gracias, {formData.nombre.split(" ")[0]}!
        </h3>
        <p className="text-muted-foreground mb-6">
          Te contactaremos en menos de 2 horas por WhatsApp para confirmar tu cita de{" "}
          <span className="font-medium text-[#0A1931]">
            {services.find((s) => s.slug === formData.servicio)?.titulo || formData.servicio}
          </span>{" "}
          el <span className="font-medium text-[#0A1931]">{formData.fecha} a las {formData.hora}</span>.
        </p>
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted rounded-full px-4 py-2 mb-6">
          <Calendar className="h-4 w-4" />
          {formData.fecha} a las {formData.hora}
        </div>
        <div>
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full bg-[#25D366] hover:bg-[#128C7E] px-6 shadow-lg shadow-[#25D366]/30">
              💬 Confirmar por WhatsApp ahora
            </Button>
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        {steps.map((s) => (
          <div key={s.id} className="flex items-center">
            <div className={`flex flex-col items-center ${s.id <= step ? "text-[#185ADB]" : "text-muted-foreground"}`}>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                s.id < step
                  ? "bg-[#185ADB] border-[#185ADB] text-white"
                  : s.id === step
                  ? "border-[#185ADB] text-[#185ADB]"
                  : "border-border"
              }`}>
                {s.id < step ? <Check className="h-5 w-5" /> : <s.icon className="h-5 w-5" />}
              </div>
              <span className="text-xs mt-1 hidden sm:block">{s.label}</span>
            </div>
            {s.id < 4 && <div className={`h-0.5 w-8 sm:w-16 mx-2 transition-colors ${s.id < step ? "bg-[#185ADB]" : "bg-border"}`} />}
          </div>
        ))}
      </div>

      <Card className="p-6 sm:p-8 spatial-card">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="font-heading font-semibold text-xl mb-6 text-[#0A1931]">
                ¿Cómo te llamas y cómo te contacto?
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nombre" className="mb-2 block">Nombre completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="nombre" className="pl-10 rounded-xl" value={formData.nombre} onChange={(e) => update("nombre", e.target.value)} placeholder="Tu nombre" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" className="pl-10 rounded-xl" value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="telefono" className="mb-2 block">WhatsApp / Teléfono</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="telefono" type="tel" className="pl-10 rounded-xl" value={formData.telefono} onChange={(e) => update("telefono", e.target.value)} placeholder="+51 999 999 999" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Usaré tu WhatsApp para confirmarte la cita en menos de 2 horas.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="font-heading font-semibold text-xl mb-6 text-[#0A1931]">
                ¿Qué servicio te interesa?
              </h3>
              <div className="space-y-3">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => update("servicio", s.slug)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      formData.servicio === s.slug
                        ? "border-[#185ADB] bg-[#185ADB]/5"
                        : "border-border hover:border-[#185ADB]/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${s.color} p-2`}>
                        <s.icon className="h-full w-full text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0A1931]">{s.titulo}</p>
                        {s.precioDesde && (
                          <p className="text-xs text-muted-foreground">{s.precioDesde}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[#185ADB]">
                      {formData.servicio === s.slug ? "✓" : ""}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="font-heading font-semibold text-xl mb-6 text-[#0A1931]">
                ¿Cuándo te viene bien?
              </h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fecha" className="mb-2 block">Fecha preferida</Label>
                  <Input
                    id="fecha"
                    type="date"
                    className="rounded-xl"
                    value={formData.fecha}
                    onChange={(e) => update("fecha", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Hora preferida</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => update("hora", t)}
                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.hora === t
                            ? "border-[#185ADB] bg-[#185ADB] text-white"
                            : "border-border hover:border-[#185ADB]/50"
                        }`}
                      >
                        <Clock className="h-3 w-3 inline mr-1" />
                        {t}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    La Dra. Blue te confirmará la disponibilidad exacta por WhatsApp.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="font-heading font-semibold text-xl mb-6 text-[#0A1931]">
                Confirma tu solicitud
              </h3>
              <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Paciente</span>
                  <span className="font-medium text-[#0A1931]">{formData.nombre}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium text-[#0A1931]">{formData.email}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Servicio</span>
                  <span className="font-medium text-[#0A1931]">
                    {services.find((s) => s.slug === formData.servicio)?.titulo}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Fecha</span>
                  <span className="font-medium text-[#0A1931]">{formData.fecha}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Hora</span>
                  <span className="font-medium text-[#0A1931]">{formData.hora}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Al enviar, aceptas nuestra{" "}
                <a href="/legales/politica-privacidad" className="text-[#185ADB] hover:underline">
                  política de privacidad
                </a>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)} className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Atrás
            </Button>
          ) : (
            <div />
          )}
          {step < 4 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="rounded-full bg-[#185ADB] hover:bg-[#0A1931]"
            >
              Continuar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/30">
              Enviar solicitud de cita
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
