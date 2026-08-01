"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Stethoscope } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#185ADB] to-[#5B9BD5] flex items-center justify-center shadow-lg shadow-[#185ADB]/30 group-hover:scale-105 transition-transform">
              <Stethoscope className="h-4.5 w-4.5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-lg tracking-tight text-[#0A1931]">
                Dra. <span className="text-[#185ADB]">Blue</span>
              </span>
              <p className="text-[10px] text-muted-foreground -mt-0.5">
                Odontología Estética · Surco, Lima
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-[#185ADB] transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[#185ADB] after:transition-all after:duration-300 hover:after:w-2/3"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/reservar">
              <Button className="ml-4 rounded-full bg-[#185ADB] hover:bg-[#0A1931] shadow-lg shadow-[#185ADB]/30 hover:shadow-xl transition-all duration-300">
                Agendar mi evaluación
              </Button>
            </Link>
          </nav>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-muted transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium py-2 border-b border-border/50 text-[#0A1931]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/reservar" onClick={() => setOpen(false)}>
                    <Button className="w-full rounded-full bg-[#185ADB] mt-4">Agendar mi evaluación</Button>
                  </Link>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2 rounded-full border border-[#25D366] text-[#128C7E] font-medium text-sm"
                  >
                    💬 Escríbeme por WhatsApp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
