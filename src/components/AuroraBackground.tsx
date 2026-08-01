"use client";

import { useEffect, useRef } from "react";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      section.style.setProperty("--aurora-y", `${scrollProgress * 20}px`);
      section.style.setProperty("--aurora-x", `${scrollProgress * 10}px`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at calc(50% + var(--aurora-x, 0px)) calc(-20% + var(--aurora-y, 0px)), oklch(0.52 0.12 175 / 0.15), transparent),
            radial-gradient(ellipse 60% 40% at calc(30% - var(--aurora-x, 0px)) calc(50% + var(--aurora-y, 0px) * 0.5), oklch(0.75 0.08 80 / 0.1), transparent),
            radial-gradient(ellipse 50% 30% at calc(80% - var(--aurora-x, 0px) * 0.5) calc(70% - var(--aurora-y, 0px)), oklch(0.6 0.1 260 / 0.08), transparent)
          `,
          transition: "background 0.1s ease-out",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
