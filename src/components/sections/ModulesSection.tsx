import GlassCard from "../ui/GlassCard";
import ProgressChip from "../ui/ProgressChip";
import LinangkitDivider from "../ui/LinangkitDivider";
import { useRevealOnScroll } from "../../hooks/useScrollAnimation";
import { MODULES } from "../../lib/constants";

export default function ModulesSection() {
  useRevealOnScroll(".module-card");

  return (
    <section id="modules" className="py-20 px-6 md:px-12 bg-surface-container-low/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">
            Kurikulum
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-semibold text-on-surface"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Modul Pembelajaran Aktif
          </h2>
          <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">
            Dua modul utama yang menggabungkan kimia pangan dengan warisan kuliner
            Kadazan-Dusun Sabah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MODULES.map((mod) => (
            <GlassCard key={mod.id} className="module-card p-8" accentColor={mod.accentColor}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                    {mod.subtitle}
                  </span>
                  <h3
                    className="text-xl font-semibold text-on-surface mt-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {mod.title}
                  </h3>
                </div>
                <span className="text-4xl">{mod.emoji}</span>
              </div>

              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                {mod.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {mod.chemistry.split(" • ").map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <ProgressChip label={mod.progressLabel} percentage={mod.progress} />
                <button className="px-4 py-2 rounded-full bg-primary text-primary-fixed text-sm font-medium hover:bg-primary-container transition-colors">
                  Mulai →
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <LinangkitDivider />
    </section>
  );
}
