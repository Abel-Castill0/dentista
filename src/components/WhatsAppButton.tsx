"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export function WhatsAppButton({ service }: { service?: string }) {
  const message = service
    ? `Hola Dra. Blue, me interesa el servicio de ${service}. ¿Podrías darme más información?`
    : undefined;

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-300"
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.004 3C9.383 3 4 8.38 4 15c0 2.14.56 4.14 1.53 5.87L4 29l8.34-1.5c1.16.6 2.44.94 3.66.94 6.62 0 12-5.38 12-12S22.626 3 16.004 3zm0 21.66c-1.02 0-2.02-.22-2.92-.64l-.21-.11-4.95.89.89-4.83-.14-.22a8.95 8.95 0 0 1-1.38-4.75c0-5.02 4.1-9.1 9.13-9.1 2.44 0 4.73.95 6.45 2.68a9.06 9.06 0 0 1 2.67 6.44c0 5.03-4.1 9.12-9.13 9.12zm5.01-6.83c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.43-2.2-1.36a8.27 8.27 0 0 1-1.52-1.89c-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.35.99 2.66 1.13 2.84.14.18 1.94 2.97 4.7 4.16.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.18-.52-.32z" />
      </svg>
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-white" />
      </span>
    </motion.a>
  );
}
