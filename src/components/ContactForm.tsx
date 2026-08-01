"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Send, Check } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <Card className="p-8 spatial-card text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Check className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg mb-2">Mensaje enviado</h3>
        <p className="text-sm text-muted-foreground">Te responderemos a la mayor brevedad posible.</p>
      </Card>
    );
  }

  return (
    <Card className="p-8 spatial-card">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nombre" className="mb-2 block">Nombre</Label>
            <Input id="nombre" required placeholder="Tu nombre" />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2 block">Email</Label>
            <Input id="email" type="email" required placeholder="tu@email.com" />
          </div>
        </div>
        <div>
          <Label htmlFor="asunto" className="mb-2 block">Asunto</Label>
          <Input id="asunto" required placeholder="¿En qué podemos ayudarte?" />
        </div>
        <div>
          <Label htmlFor="mensaje" className="mb-2 block">Mensaje</Label>
          <textarea
            id="mensaje"
            required
            rows={5}
            className="flex min-h-[120px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Escribe tu mensaje..."
          />
        </div>
        <Button type="submit" className="rounded-full w-full sm:w-auto shadow-lg shadow-primary/20">
          <Send className="mr-2 h-4 w-4" /> Enviar mensaje
        </Button>
      </form>
    </Card>
  );
}
