export function StructuredData() {
  const dentist = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dra. Blue - Odontología Estética",
    description:
      "Diseño de sonrisa, carillas, blanqueamiento y rehabilitación oral en Surco, Lima. Atención 100% personalizada con la Dra. Blue.",
    url: "https://drablue.pe",
    telephone: "+51999999999",
    email: "hola@drablue.pe",
    founder: {
      "@type": "Person",
      name: "Dra. Blue",
      jobTitle: "Odontóloga especialista en rehabilitación oral y estética dental",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Caminos del Inca 1234",
      addressLocality: "Santiago de Surco",
      addressRegion: "Lima",
      postalCode: "15023",
      addressCountry: "PE",
    },
    areaServed: "Santiago de Surco, Lima, Perú",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    image: "https://placehold.co/1200x630/0A1931/FFFFFF?text=Dra.+Blue",
    sameAs: [
      "https://instagram.com/drablue.dentista",
      "https://facebook.com/drablue.dentista",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
    },
    medicalSpecialty: "Dentistry",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Diseño de sonrisa" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Carillas dentales" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Blanqueamiento dental" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Prótesis dental" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Rehabilitación oral" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Limpieza dental" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dentist) }}
    />
  );
}
