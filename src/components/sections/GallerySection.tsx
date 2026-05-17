import { motion } from "framer-motion";
import LinangkitDivider from "../ui/LinangkitDivider";
import { useRevealOnScroll } from "../../hooks/useScrollAnimation";
import { GALLERY_ITEMS } from "../../lib/constants";

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

export default function GallerySection() {
  useRevealOnScroll(".gallery-item");

  return (
    <section id="gallery" className="py-20 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-medium uppercase tracking-widest">
            Warisan Visual
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-semibold text-on-surface"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Galeri Kuliner Sabah
          </h2>
          <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">
            Dokumentasi visual warisan kuliner dan budaya Kadazan-Dusun yang menjadi
            inspirasi platform edukasi ini.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              className={`gallery-item relative rounded-2xl overflow-hidden aspect-square ${item.bg} flex items-center justify-center cursor-pointer`}
              initial="rest"
              whileHover="hover"
            >
              <span className="text-6xl">{item.emoji}</span>

              <motion.div
                variants={overlayVariants}
                className="absolute inset-0 bg-primary/80 backdrop-blur-[4px] flex flex-col items-center justify-center p-4 text-center"
              >
                <span className="text-3xl mb-2">{item.emoji}</span>
                <h3 className="text-primary-fixed font-semibold text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-primary-fixed/80 text-xs mt-1">{item.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <LinangkitDivider />
    </section>
  );
}
