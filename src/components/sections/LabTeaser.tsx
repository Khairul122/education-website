import { motion } from "framer-motion";
import LinangkitDivider from "../ui/LinangkitDivider";

export default function LabTeaser() {
  return (
    <>
      <section
        id="lab"
        className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{ backgroundColor: "#5d4037" }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #8ec64c, #8ec64c 2px, transparent 2px, transparent 40px)",
          }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-12 right-12 text-6xl opacity-20 hidden md:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          ⚗️
        </motion.div>
        <motion.div
          className="absolute bottom-12 left-12 text-5xl opacity-20 hidden md:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          🔬
        </motion.div>

        <div className="max-w-[1280px] mx-auto relative z-10 text-center">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-white/20 text-white/70 mb-6 uppercase tracking-widest">
            Fitur Unggulan
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.02em" }}
          >
            Lab Virtual AmvaChem
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Simulasikan reaksi kimia kuliner secara interaktif — ubah suhu, pH, dan
            konsentrasi sambil mengamati perubahan struktur molekuler secara real-time.
            Tanpa risiko, tanpa bahan kimia berbahaya.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {[
              "🌡️ Kontrol Suhu",
              "⚖️ pH Meter Virtual",
              "🧬 Visualisasi Molekul",
              "📊 Grafik Real-time",
            ].map((feature) => (
              <span
                key={feature}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-full font-semibold text-primary cursor-pointer text-base"
            style={{ backgroundColor: "#f9ded5" }}
          >
            Masuk Lab Virtual →
          </motion.button>
        </div>
      </section>

      <LinangkitDivider />
    </>
  );
}
