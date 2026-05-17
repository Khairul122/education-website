import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#modules", label: "Modules" },
  { href: "#lab", label: "Virtual Lab" },
  { href: "#gallery", label: "Gallery" },
  { href: "#academic", label: "Academic" },
];

export default function TopAppBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-[12px] border-b border-white/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-fixed text-sm font-bold font-mono">Av</span>
          </div>
          <span className="font-semibold text-primary text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
            AmvaChem
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#modules"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-fixed text-sm font-medium hover:bg-primary-container transition-colors"
        >
          Start Learning
        </a>
      </div>
    </header>
  );
}
