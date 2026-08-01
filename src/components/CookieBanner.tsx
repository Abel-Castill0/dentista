"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type CookieConsent = "accepted" | "rejected" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    // Activar analytics aquí cuando se tengan los IDs
    // if (process.env.NEXT_PUBLIC_GA_ID) { gtag('consent', 'update', { analytics_storage: 'granted' }); }
    // if (process.env.NEXT_PUBLIC_META_PIXEL_ID) { fbq('consent', 'grant'); }
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
    // Bloquear analytics
    // if (process.env.NEXT_PUBLIC_GA_ID) { gtag('consent', 'update', { analytics_storage: 'denied' }); }
  };

  if (consent !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <div className="mx-auto max-w-4xl rounded-2xl bg-card border border-border/50 shadow-2xl backdrop-blur-xl p-6 spatial-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">🍪 Configuración de cookies</p>
              <p className="text-xs text-muted-foreground">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico.
                Puedes aceptar todas, rechazar las no esenciales o configurarlas.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button variant="outline" size="sm" onClick={handleReject} className="rounded-full text-xs">
                Solo necesarias
              </Button>
              <Button size="sm" onClick={handleAccept} className="rounded-full text-xs">
                Aceptar todas
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
