import { clsx } from "clsx";
import GlassCard from "../ui/GlassCard";
import LinangkitDivider from "../ui/LinangkitDivider";
import { useRevealOnScroll } from "../../hooks/useScrollAnimation";
import { BENTO_CARDS } from "../../lib/constants";

export default function AboutSection() {
  useRevealOnScroll(".bento-card");

  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">
            Kimia dalam Budaya
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-semibold text-on-surface"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Sains di Balik Tradisi Sabah
          </h2>
          <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">
            Setiap masakan tradisional menyimpan reaksi kimia yang menakjubkan —
            menunggu untuk dijelajahi dan dipahami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENTO_CARDS.map((card) => (
            <GlassCard
              key={card.id}
              className={clsx("bento-card p-6", card.colSpan)}
              accentColor={card.accentColor}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant mb-3">
                {card.tag}
              </span>
              <h3 className="text-lg font-semibold text-on-surface mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {card.title}
              </h3>
              <p className="text-xs text-secondary font-medium mb-3">{card.subtitle}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {card.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      <LinangkitDivider />
    </section>
  );
}
