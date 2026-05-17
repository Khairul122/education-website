import { motion } from "framer-motion";

interface ProgressChipProps {
  label: string;
  percentage: number;
}

export default function ProgressChip({ label, percentage }: ProgressChipProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15">
      <div className="w-16 h-1.5 bg-white/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        />
      </div>
      <span className="font-mono text-xs font-medium text-secondary">{label}</span>
    </div>
  );
}
