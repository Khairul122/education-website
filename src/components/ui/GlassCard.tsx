import { motion, type Variants } from "framer-motion";
import { clsx } from "clsx";

const cardVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}

export default function GlassCard({ children, className, accentColor }: GlassCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className={clsx(
        "rounded-2xl overflow-hidden",
        "bg-white/70 backdrop-blur-[12px] border border-white/20",
        "shadow-[0px_8px_32px_rgba(93,64,55,0.1)]",
        accentColor,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
