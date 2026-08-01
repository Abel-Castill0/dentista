import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de la Dra. Blue, conforme a la Ley 29733 de Protección de Datos Personales del Perú.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-[#0A1931]">
          Política de Privacidad
        </h1>
        <p className="text-sm text-muted-foreground">Última actualización: Agosto 2026</p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos personales recogidos en este sitio web es:
          <br />
          <strong>Dra. Blue</strong>, consultorio de odontología estética, con domicilio en Av. Caminos del Inca 1234, Santiago de Surco, Lima, Perú.
          <br />
          Correo electrónico: <a href="mailto:hola@drablue.pe">hola@drablue.pe</a>
        </p>

        <h2>2. Normativa aplicable</h2>
        <p>
          Este sitio web cumple con la <strong>Ley N° 29733, Ley de Protección de Datos Personales</strong> del Perú
          y su Reglamento (Decreto Supremo N° 003-2013-JUS), así como con el Reglamento General de Protección de
          Datos (RGPD) de la Unión Europea aplicable a usuarios residentes en dicho territorio.
        </p>

        <h2>3. Datos recogidos y finalidad</h2>
        <p>Recogemos los siguientes datos personales a través de nuestros formularios:</p>
        <ul>
          <li><strong>Datos identificativos:</strong> nombre, apellidos, email, teléfono.</li>
          <li><strong>Datos de salud:</strong> categoría especial de datos, recogidos exclusivamente para la prestación de servicios odontológicos.</li>
          <li><strong>Datos de navegación:</strong> cookies técnicas y analíticas (Meta Pixel y Google Analytics 4, previo consentimiento).</li>
        </ul>
        <p>Finalidades del tratamiento:</p>
        <ul>
          <li>Gestión de citas y reservas online.</li>
          <li>Prestación de servicios odontológicos.</li>
          <li>Envío de recordatorios de citas por WhatsApp y email.</li>
          <li>Cumplimiento de obligaciones legales sanitarias.</li>
        </ul>

        <h2>4. Base legal</h2>
        <p>La base legal para el tratamiento de sus datos es:</p>
        <ul>
          <li>Ejecución de un contrato de servicios sanitarios.</li>
          <li>Consentimiento previo, expreso e informado del titular para datos de salud (art. 14, Ley 29733).</li>
          <li>Obligaciones legales del sector salud.</li>
        </ul>

        <h2>5. Plazo de conservación</h2>
        <p>
          Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recogieron
          y durante los plazos legales establecidos. La historia clínica se conserva según la normativa sanitaria peruana vigente.
        </p>

        <h2>6. Derechos del titular (ARCO)</h2>
        <p>Puede ejercer sus derechos de:</p>
        <ul>
          <li><strong>Acceso</strong> a sus datos personales.</li>
          <li><strong>Rectificación</strong> de datos inexactos.</li>
          <li><strong>Cancelación</strong> cuando ya no sean necesarios.</li>
          <li><strong>Oposición</strong> al tratamiento.</li>
        </ul>
        <p>
          Mediante correo electrónico a <a href="mailto:hola@drablue.pe">hola@drablue.pe</a>.
          También puede presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales del Perú.
        </p>

        <h2>7. Uso de inteligencia artificial</h2>
        <p>
          Este sitio web no utiliza sistemas de IA para tomar decisiones automatizadas sobre pacientes.
          Las herramientas de diagnóstico digital se usan únicamente con fines ilustrativos y
          supervisadas por la profesional.
        </p>

        <h2>8. Medidas de seguridad</h2>
        <p>
          Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales,
          incluyendo cifrado SSL/TLS, controles de acceso y procedimientos de gestión de brechas de seguridad.
        </p>
      </div>
    </section>
  );
}
