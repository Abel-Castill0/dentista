import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dra. Blue | Odontología Estética en Surco, Lima",
    template: "%s | Dra. Blue",
  },
  description:
    "Diseño de sonrisa, carillas, blanqueamiento y rehabilitación oral en Surco, Lima. Atención 100% personalizada con la Dra. Blue. Agenda tu evaluación gratis.",
  keywords: [
    "dra blue",
    "dentista surco",
    "diseño de sonrisa lima",
    "carillas dentales lima",
    "blanqueamiento dental surco",
    "dentista estético mujer",
    "rehabilitación oral lima",
  ],
  openGraph: {
    title: "Dra. Blue | Odontología Estética en Surco, Lima",
    description:
      "Tratamientos estéticos dentales personalizados en Surco, Lima. Diseño de sonrisa, carillas, blanqueamiento y más. Atención 100% personalizada con la Dra. Blue.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics - Descomenta y añade tu ID
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        */}
        {/* Meta Pixel - Descomenta y añade tu ID
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        */}
      </head>
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
