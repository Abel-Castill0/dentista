import type { LucideIcon } from "lucide-react";
import { Sparkles, Crown, Droplets, Smile, Layers, Wind } from "lucide-react";

export interface Service {
  slug: string;
  titulo: string;
  tituloCorto: string;
  icon: LucideIcon;
  descripcionCorta: string;
  descripcionLarga: string;
  beneficios: string[];
  proceso: string[];
  faq: { pregunta: string; respuesta: string }[];
  precioDesde?: string;
  color: string;
}

export const services: Service[] = [
  {
    slug: "diseno-de-sonrisa",
    titulo: "Diseño de Sonrisa",
    tituloCorto: "Diseño de Sonrisa",
    icon: Sparkles,
    color: "from-[#185ADB] to-[#5B9BD5]",
    descripcionCorta:
      "El cambio de imagen dental completo que necesitas para brillar en cada momento. Un plan personalizado que combina forma, color y proporción.",
    descripcionLarga:
      "El diseño de sonrisa es mucho más que estética: es un cambio de vida. Analizo tu rostro, tus labios, tu sonrisa y tus expectativas para crear un plan totalmente personalizado. Usamos tecnología digital para que veas el resultado antes de empezar. Cada diseño es único, como tú.",
    beneficios: [
      "Resultado natural y proporcionado a tu rostro",
      "Ves una simulación digital de tu sonrisa antes de empezar",
      "Combinación de técnicas: carillas, blanqueamiento y ortodoncia",
      "Aumenta tu confianza y seguridad al sonreír",
      "Plan adaptado a tu presupuesto y tiempo",
    ],
    proceso: [
      "Evaluación completa de tu sonrisa y expectativas",
      "Diseño digital: ves tu nueva sonrisa antes de empezar",
      "Preparación y ejecución de tu tratamiento",
      "Pulido final y ajustes de detalle",
    ],
    faq: [
      {
        pregunta: "¿Cuánto dura un diseño de sonrisa?",
        respuesta: "Depende del caso, pero entre 3 y 5 sesiones. En la evaluación te doy un plan exacto con fechas.",
      },
      {
        pregunta: "¿El resultado se ve natural?",
        respuesta: "Sí, mi enfoque es la naturalidad. Diseño sonrisas que se ven como las tuyas, pero perfectas.",
      },
      {
        pregunta: "¿Puedo ver el resultado antes?",
        respuesta: "¡Claro! Usamos diseño digital 3D para que veas tu nueva sonrisa antes de comenzar.",
      },
    ],
    precioDesde: "Consultar en evaluación",
  },
  {
    slug: "carillas-dentales",
    titulo: "Carillas Dentales",
    tituloCorto: "Carillas",
    icon: Crown,
    color: "from-[#D4AF37] to-[#F0D48A]",
    descripcionCorta:
      "Láminas ultra finas de porcelana que transforman la forma, el color y el tamaño de tus dientes. Resultados de impacto en pocas sesiones.",
    descripcionLarga:
      "Las carillas de porcelana son la solución preferida para corregir dientes manchados, desgastados, separados o con forma irregular. Son láminas ultra delgadas que se adhieren a la superficie del diente con resultados espectaculares y naturales. El color, la forma y el tamaño se diseñan a medida para tu rostro.",
    beneficios: [
      "Corrige color, forma, tamaño y separación",
      "Resultado natural, como dientes perfectos reales",
      "Ultra resistentes y duraderas (10-15 años)",
      "Pocas sesiones: resultado visible rápido",
      "No manchan con café, té ni vino",
    ],
    proceso: [
      "Evaluación del color, forma y armonía facial",
      "Preparación mínima del diente",
      "Toma de impresiones digitales",
      "Prueba y colocación definitiva",
    ],
    faq: [
      {
        pregunta: "¿Carillas o blanqueamiento?",
        respuesta: "Si tus dientes están sanos pero manchados, el blanqueamiento puede bastar. Las carillas son ideales para corregir forma, tamaño y manchas profundas. Te ayudo a elegir la mejor opción.",
      },
      {
        pregunta: "¿Se notan de cerca?",
        respuesta: "No. Diseñadas a nivel microscópico, imitan la translucidez natural del esmalte. Nadie notará que las tienes.",
      },
    ],
    precioDesde: "Desde $300 por unidad",
  },
  {
    slug: "blanqueamiento-dental",
    titulo: "Blanqueamiento Dental",
    tituloCorto: "Blanqueamiento",
    icon: Droplets,
    color: "from-[#5B9BD5] to-[#9CC8F0]",
    descripcionCorta:
      "Recupera el blanco natural de tu sonrisa con técnicas modernas, seguras y sin sensibilidad. Resultado visible desde la primera sesión.",
    descripcionLarga:
      "El café, el té, el vino y el paso del tiempo opacan la sonrisa. Mi blanqueamiento dental usa tecnología de última generación que aclara el esmalte sin dañarlo y con mínima sensibilidad. En una sola sesión notas la diferencia y tu sonrisa recupera esa luz que la hace brillar.",
    beneficios: [
      "Resultado visible desde la primera sesión",
      "Técnicas sin sensibilidad post-tratamiento",
      "Seguro para esmalte y encías",
      "Aclara hasta 5-8 tonos",
      "Rápido: ideal para ocasiones especiales",
    ],
    proceso: [
      "Evaluación del estado de tu esmalte",
      "Limpieza previa para mejores resultados",
      "Aplicación del gel blanqueador con luz LED",
      "Protocolo de cuidados post-blanqueamiento",
    ],
    faq: [
      {
        pregunta: "¿Duele el blanqueamiento dental?",
        respuesta: "No, usamos técnicas modernas sin sensibilidad. Además tengo protocolos de confort para pacientes sensibles.",
      },
      {
        pregunta: "¿Cuánto dura el resultado?",
        respuesta: "Entre 1 y 3 años dependiendo de tus hábitos. Te doy pautas para mantener el blanco por más tiempo.",
      },
    ],
    precioDesde: "Desde $180",
  },
  {
    slug: "protesis-dental",
    titulo: "Prótesis Dental",
    tituloCorto: "Prótesis",
    icon: Smile,
    color: "from-[#0A1931] to-[#185ADB]",
    descripcionCorta:
      "Recupera la función de masticar y hablar con naturalidad. Prótesis fijas y removibles diseñadas para tu comodidad.",
    descripcionLarga:
      "Si te faltan piezas dentales, la prótesis dental devuelve no solo la función sino la seguridad de sonreír y comer sin miedo. Trabajo con materiales de alta calidad para crear prótesis cómodas, duraderas y de apariencia completamente natural, adaptadas a la anatomía de tu boca.",
    beneficios: [
      "Comes y hablas sin preocupación",
      "Diseño natural que combina con tu rostro",
      "Materiales de alta calidad y durabilidad",
      "Recupera la forma de tu rostro",
      "Opciones fijas y removibles",
    ],
    proceso: [
      "Evaluación y planificación de tu caso",
      "Preparación y toma de impresiones",
      "Pruebas de ajuste y estética",
      "Colocación final y seguimiento",
    ],
    faq: [
      {
        pregunta: "¿Cuánto tiempo toma el tratamiento?",
        respuesta: "Depende del tipo de prótesis, pero generalmente entre 2 y 4 semanas desde la evaluación.",
      },
      {
        pregunta: "¿Se nota que es una prótesis?",
        respuesta: "No, con la tecnología actual las prótesis se ven y se sienten naturales. Es mi prioridad que nadie lo note.",
      },
    ],
    precioDesde: "Consultar en evaluación",
  },
  {
    slug: "rehabilitacion-oral",
    titulo: "Rehabilitación Oral",
    tituloCorto: "Rehabilitación Oral",
    icon: Layers,
    color: "from-[#185ADB] to-[#0A1931]",
    descripcionCorta:
      "Tratamiento integral que devuelve la salud y función a tu boca. Recupera tu autoestima con un plan completo y personalizado.",
    descripcionLarga:
      "La rehabilitación oral es el tratamiento integral para pacientes con múltiples piezas dañadas o ausentes. Es mi especialidad: combino diferentes técnicas (implantes, prótesis, carillas, endodoncia) en un plan único que recupera la salud, la función y la estética de tu boca completa. Es un antes y después que cambia tu vida.",
    beneficios: [
      "Plan integral para toda tu boca",
      "Recuperas la función de masticar y hablar",
      "Resultados estéticos que devuelven autoestima",
      "Coordinación de todas las especialidades",
      "Seguimiento y mantenimiento incluidos",
    ],
    proceso: [
      "Diagnóstico completo y plan de tratamiento",
      "Fases de preparación (endodoncias, extracciones)",
      "Colocación de implantes y/o prótesis",
      "Finalización estética y controles",
    ],
    faq: [
      {
        pregunta: "¿Cuánto dura una rehabilitación completa?",
        respuesta: "Cada caso es diferente; entre 2 y 6 meses dependiendo de la complejidad. Te doy un cronograma claro desde el inicio.",
      },
      {
        pregunta: "¿Puedo pagarlo en partes?",
        respuesta: "Sí, tenemos opciones de financiamiento. Consúltame por WhatsApp y te doy alternativas.",
      },
    ],
    precioDesde: "Consultar en evaluación",
  },
  {
    slug: "limpieza-dental",
    titulo: "Limpieza Dental",
    tituloCorto: "Limpieza",
    icon: Wind,
    color: "from-[#5B9BD5] to-[#185ADB]",
    descripcionCorta:
      "La base de toda sonrisa saludable. Elimina placa, sarro y manchas para una boca fresca y encías sanas.",
    descripcionLarga:
      "La limpieza dental profesional es la mejor inversión en tu salud bucal. Elimino la placa y el sarro que el cepillado diario no puede, dejando tus dientes limpios y tus encías sanas. Es rápida, indolora y el primer paso para prevenir problemas mayores. Tu sonrisa se ve más brillante al instante.",
    beneficios: [
      "Previene caries y enfermedades de encías",
      "Elimina manchas superficiales",
      "Encías sanas y sin sangrado",
      "Aliento fresco y confianza inmediata",
      "Recomendada cada 6 meses",
    ],
    proceso: [
      "Evaluación del estado de tu boca",
      "Eliminación de placa y sarro",
      "Pulido y eliminación de manchas",
      "Recomendaciones personalizadas",
    ],
    faq: [
      {
        pregunta: "¿Cada cuánto debo hacerme una limpieza?",
        respuesta: "Recomiendo una limpieza profesional cada 6 meses para mantener tu boca sana.",
      },
      {
        pregunta: "¿Duele?",
        respuesta: "No, con técnicas modernas es completamente indolora. Puede haber una ligera sensibilidad que desaparece rápido.",
      },
    ],
    precioDesde: "Desde $50",
  },
];
