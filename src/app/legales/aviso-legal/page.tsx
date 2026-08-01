import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de la Dra. Blue con información de titularidad, procedimiento DMCA y condiciones de uso.",
};

export default function AvisoLegalPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-[#0A1931]">
          Aviso Legal
        </h1>
        <p className="text-sm text-muted-foreground">Última actualización: Agosto 2026</p>

        <h2>1. Datos identificativos</h2>
        <p>En cumplimiento de la normativa peruana sobre servicios de la sociedad de la información, se informa:</p>
        <ul>
          <li><strong>Titular:</strong> Dra. Blue (nombre legal: [Nombre y Apellidos de la doctora])</li>
          <li><strong>Actividad:</strong> Consultorio de odontología estética y rehabilitación oral</li>
          <li><strong>Domicilio:</strong> Av. Caminos del Inca 1234, Santiago de Surco, Lima, Perú</li>
          <li><strong>Email:</strong> <a href="mailto:hola@drablue.pe">hola@drablue.pe</a></li>
          <li><strong>Teléfono:</strong> +51 999 999 999</li>
        </ul>

        <h2>2. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos del sitio web, incluyendo pero no limitado a textos, imágenes, logotipos,
          gráficos, iconos y software, son propiedad de la Dra. Blue o de terceros que han autorizado su
          uso, y están protegidos por las leyes de propiedad intelectual peruanas (Decreto Legislativo N° 822).
        </p>
        <p>
          Queda prohibida la reproducción, distribución, comunicación pública o transformación de los
          contenidos sin la autorización expresa del titular.
        </p>

        <h2>3. Enlaces externos</h2>
        <p>
          Este sitio web puede contener enlaces a sitios web de terceros. La Dra. Blue no se responsabiliza
          del contenido, políticas de privacidad o prácticas de dichos sitios. La inclusión de enlaces no
          implica aprobación o asociación con los mismos.
        </p>

        <h2>4. DMCA Safe Harbor</h2>
        <p>
          En cumplimiento con la Digital Millennium Copyright Act (DMCA) y la normativa de propiedad
          intelectual aplicable, este sitio web puede mostrar contenido (como fotografías de antes y después)
          aportado por pacientes. Si considera que algún contenido presente en este sitio web infringe sus
          derechos de propiedad intelectual, puede notificarlo a nuestro agente DMCA:
        </p>
        <ul>
          <li><strong>Email DMCA:</strong> <a href="mailto:dmca@drablue.pe">dmca@drablue.pe</a></li>
          <li>
            <strong>Procedimiento:</strong> Incluya en su notificación: (a) identificación de la obra protegida
            infringida; (b) identificación del material infractor y su localización; (c) su información de
            contacto; (d) una declaración de buena fe sobre que el uso no está autorizado; (e) una declaración
            de veracidad bajo pena de perjurio; y (f) su firma física o electrónica.
          </li>
        </ul>
        <p>
          Una vez recibida una notificación válida, procederemos a retirar o bloquear el acceso al material
          identificado de forma expedita.
        </p>

        <h2>5. Exclusión de responsabilidad</h2>
        <p>
          La Dra. Blue no se hace responsable de los errores u omisiones en los contenidos del sitio web,
          ni de los daños derivados del uso o imposibilidad de uso del mismo.
        </p>

        <h2>6. Ley aplicable y jurisdicción</h2>
        <p>
          Este aviso legal se rige por la legislación peruana. Para la resolución de cualquier controversia,
          las partes se someten a los juzgados y tribunales de Lima, renunciando a cualquier otro fuero que
          pudiera corresponderles.
        </p>
      </div>
    </section>
  );
}
