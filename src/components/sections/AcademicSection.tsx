import GlassCard from "../ui/GlassCard";
import { useRevealOnScroll } from "../../hooks/useScrollAnimation";
import { ACADEMIC_FOUNDATIONS, REFERENCES } from "../../lib/constants";

export default function AcademicSection() {
  useRevealOnScroll(".academic-card");

  return (
    <section id="academic" className="py-20 px-6 md:px-12 bg-surface-container-low/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">
            Landasan Teori
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-semibold text-on-surface"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Fondasi Akademik
          </h2>
          <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">
            AmvaChem dibangun di atas tiga pilar teori pendidikan yang saling
            melengkapi dan telah terbukti efektif dalam pembelajaran sains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ACADEMIC_FOUNDATIONS.map((found) => (
            <GlassCard key={found.id} className="academic-card p-6" accentColor="border-t-4 border-tertiary">
              <span className="text-3xl mb-4 block">{found.icon}</span>
              <h3
                className="text-lg font-semibold text-on-surface mb-1"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {found.title}
              </h3>
              <p className="text-xs text-secondary font-medium font-mono mb-3">{found.author}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {found.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* References */}
        <div className="bg-white/50 backdrop-blur-[8px] border border-white/30 rounded-2xl p-8">
          <h3
            className="text-xl font-semibold text-on-surface mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            📚 Referensi Akademik
          </h3>
          <ol className="space-y-3">
            {REFERENCES.map((ref, i) => (
              <li key={i} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                <span className="font-mono text-secondary font-medium shrink-0 mt-0.5">
                  [{i + 1}]
                </span>
                <span>{ref}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
