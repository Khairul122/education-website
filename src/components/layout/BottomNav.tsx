import { NAV_ITEMS } from "../../lib/constants";

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-[12px] border-t border-outline-variant">
      <div className="flex items-center justify-around px-2 py-2">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl hover:bg-surface-container transition-colors"
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="text-[10px] text-on-surface-variant font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
