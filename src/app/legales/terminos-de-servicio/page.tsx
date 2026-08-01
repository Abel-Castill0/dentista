import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description: "Términos y condiciones de uso del sitio web de la Dra. Blue.",
};

export default function TerminosPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-[#0A1931]">
          Términos de Servicio
        </h1>
        <p className="text-sm text-muted-foreground">Última actualización: Agosto 2026</p>

        <h2>1. Aceptación de los términos</h2>
        <p>
          Al acceder y utilizar este sitio web de la Dra. Blue, usted acepta los presentes términos y condiciones.
          Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
        </p>

        <h2>2. Servicios</h2>
        <p>
          La Dra. Blue ofrece servicios odontológicos profesionales de estética y rehabilitación oral.
          Las descripciones de los servicios en este sitio web tienen carácter informativo y no constituyen
          un diagnóstico médico. El diagnóstico y tratamiento definitivo será determinado durante la
          consulta presencial.
        </p>

        <h2>3. Reserva de citas</h2>
        <p>Al realizar una reserva a través de nuestro sistema online, usted se compromete a:</p>
        <ul>
          <li>Proporcionar información veraz y completa.</li>
          <li>Notificar con al menos 24 horas de antelación en caso de cancelación.</li>
          <li>Presentarse puntualmente a la cita reservada.</li>
        </ul>
        <p>
          La no asistencia sin previo aviso podrá resultar en restricciones para futuras reservas.
        </p>

        <h2>4. Propiedad intelectual</h2>
        <p>
          Todo el contenido de este sitio web (textos, imágenes, logotipos, diseños) es propiedad de la
          Dra. Blue o cuenta con las licencias correspondientes. Queda prohibida la reproducción total
          o parcial sin autorización expresa.
        </p>

        <h2>5. Limitación de responsabilidad</h2>
        <p>
          La Dra. Blue no se hace responsable de los daños o perjuicios derivados del uso inadecuado de la
          información contenida en este sitio web. El uso de la información es bajo la exclusiva
          responsabilidad del usuario.
        </p>

        <h2>6. Legislación aplicable y arbitraje</h2>
        <p>
          Estos términos se rigen por la legislación peruana. Cualquier controversia que pudiera derivarse
          del uso de este sitio web o de los servicios prestados será resuelta mediante arbitraje,
          conforme a la Ley N° 26572, Ley de Arbitraje del Perú, ante el Centro de Arbitraje competente
          de Lima, con sometimiento expreso a su Reglamento.
        </p>
        <p>
          Las partes se comprometen a cumplir el laudo arbitral que se dicte, que será definitivo e inapelable.
        </p>

        <h2>7. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier momento.
          Los cambios serán efectivos desde su publicación en el sitio web.
        </p>
      </div>
    </section>
  );
}
