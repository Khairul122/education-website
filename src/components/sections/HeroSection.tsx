import { useRef } from "react";
import { useHeroAnimation } from "../../hooks/useScrollAnimation";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  useHeroAnimation(containerRef);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(68,42,34,0.08) 0%, rgba(251,251,226,0) 50%, rgba(30,55,0,0.06) 100%)",
      }}
    >
      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 animate-float"
        style={{ background: "radial-gradient(circle, #442a22, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #8ec64c, transparent)",
          animation: "float 8s ease-in-out infinite 2s",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
          <span className="text-secondary text-sm font-medium">
            ⚗️ Platform Edukasi Kimia Kuliner
          </span>
        </div>

        <h1
          className="hero-title font-bold text-on-surface mb-6"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
          }}
        >
          Kimia di Balik{" "}
          <span className="text-primary">Rasa Sabah</span>
        </h1>

        <p
          className="hero-subtitle text-on-surface-variant max-w-2xl mx-auto mb-10"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", lineHeight: "1.75" }}
        >
          Jelajahi ilmu kimia yang tersembunyi dalam masakan tradisional Sabah —
          dari gelatinisasi Ambuyat hingga denaturasi protein Hinava. Sains yang
          hidup dalam setiap gigitan.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#modules"
            className="px-8 py-4 rounded-full bg-primary text-primary-fixed font-semibold text-base hover:bg-primary-container transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Mulai Belajar →
          </a>
          <a
            href="#lab"
            className="px-8 py-4 rounded-full border border-outline text-on-surface-variant font-medium text-base hover:bg-surface-container transition-all"
          >
            Masuk Lab Virtual
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-outline-variant/50">
          {[
            { value: "2", label: "Modul Aktif" },
            { value: "8", label: "Eksperimen Virtual" },
            { value: "3", label: "Warisan Kuliner" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold text-primary"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-on-surface-variant mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
