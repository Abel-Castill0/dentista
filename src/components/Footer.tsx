import Link from "next/link";
import { Stethoscope } from "lucide-react";

const services = [
  { label: "Diseño de Sonrisa", href: "/servicios/diseno-de-sonrisa" },
  { label: "Carillas Dentales", href: "/servicios/carillas-dentales" },
  { label: "Blanqueamiento", href: "/servicios/blanqueamiento-dental" },
  { label: "Prótesis Dental", href: "/servicios/protesis-dental" },
  { label: "Rehabilitación Oral", href: "/servicios/rehabilitacion-oral" },
  { label: "Limpieza Dental", href: "/servicios/limpieza-dental" },
];

const legal = [
  { label: "Política de Privacidad", href: "/legales/politica-privacidad" },
  { label: "Términos de Servicio", href: "/legales/terminos-de-servicio" },
  { label: "Aviso Legal", href: "/legales/aviso-legal" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1931] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#185ADB] to-[#5B9BD5] flex items-center justify-center">
                <Stethoscope className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Dra. <span className="text-[#5B9BD5]">Blue</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Odontología estética y rehabilitación oral en Surco, Lima.
              Cada paciente es único y cada tratamiento está diseñado a su medida.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com/drablue.dentista"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#185ADB] transition-colors flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/80" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/drablue.dentista"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#185ADB] transition-colors flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/80" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider text-white/90">
              Servicios
            </h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#5B9BD5] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider text-white/90">
              Legal
            </h4>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#5B9BD5] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider text-white/90">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Av. Caminos del Inca 1234</li>
              <li>Santiago de Surco, Lima, Perú</li>
              <li>
                <a href="tel:+51999999999" className="hover:text-[#5B9BD5] transition-colors">
                  +51 999 999 999
                </a>
              </li>
              <li>
                <a href="mailto:hola@drablue.pe" className="hover:text-[#5B9BD5] transition-colors">
                  hola@drablue.pe
                </a>
              </li>
              <li>Lun-Vie: 9:00 - 19:00</li>
              <li>Sáb: 9:00 - 13:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Dra. Blue · Odontología Estética. Todos los derechos reservados.
          </p>
          <p className="text-xs">
            🦷 Tu sonrisa merece brillar · <a href="https://instagram.com/drablue.dentista" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B9BD5]">@drablue.dentista</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
