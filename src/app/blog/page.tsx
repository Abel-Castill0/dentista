import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog de Salud Bucal",
  description:
    "Consejos y guías de salud bucal escritos por la Dra. Blue: blanqueamiento, carillas, diseño de sonrisa y más.",
};

const posts = [
  {
    title: "¿Blanqueamiento dental o carillas? La guía definitiva",
    excerpt:
      "¿Tienes los dientes manchados y no sabes cuál tratamiento elegir? Te explico las diferencias para que tomes la mejor decisión.",
    date: "15 Julio 2026",
    readTime: "5 min",
    slug: "#",
  },
  {
    title: "Diseño de sonrisa: el antes y después que cambia vidas",
    excerpt:
      "Descubre cómo funciona el diseño de sonrisa digital y por qué cada vez más personas en Lima transforman su confianza.",
    date: "8 Julio 2026",
    readTime: "6 min",
    slug: "#",
  },
  {
    title: "5 hábitos que están dañando tu sonrisa sin que lo notes",
    excerpt:
      "El café, el tabaco, el bruxismo... Estos hábitos comunes pueden arruinar tus dientes. Aprende a detectarlos a tiempo.",
    date: "1 Julio 2026",
    readTime: "4 min",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#185ADB] font-medium text-sm uppercase tracking-widest mb-3">
            Blog
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0A1931]">
            Salud bucal, <span className="gradient-text">sin tecnicismos</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Consejos, guías y respuestas escritas por la Dra. Blue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="spatial-card rounded-2xl overflow-hidden bg-white border border-border/50 group flex flex-col">
              <div className="h-44 bg-gradient-to-br from-[#0A1931] via-[#185ADB] to-[#5B9BD5] flex items-center justify-center">
                <span className="text-5xl">🦷</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-heading font-semibold text-lg mb-2 group-hover:text-[#185ADB] transition-colors flex-1">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Próximamente más artículos. Sígueme en{" "}
            <a
              href="https://instagram.com/drablue.dentista"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#185ADB] hover:underline font-medium"
            >
              @drablue.dentista
            </a>{" "}
            para más tips.
          </p>
        </div>
      </div>
    </section>
  );
}
