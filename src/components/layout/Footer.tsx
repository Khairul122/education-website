export default function Footer() {
  return (
    <footer className="bg-primary text-primary-fixed py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-fixed/20 flex items-center justify-center">
                <span className="text-primary-fixed text-sm font-bold font-mono">Av</span>
              </div>
              <span className="font-semibold text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                AmvaChem
              </span>
            </div>
            <p className="text-primary-fixed/70 text-sm max-w-sm">
              A culinary chemistry education platform rooted in the cultural heritage of Sabah, Malaysia.
              Bridging modern science with Kadazan-Dusun indigenous knowledge.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-primary-fixed/70">
            <p className="font-medium text-primary-fixed mb-1">Navigation</p>
            {[
              { label: "Home", href: "#hero" },
              { label: "Modules", href: "#modules" },
              { label: "Virtual Lab", href: "#lab" },
              { label: "Gallery", href: "#gallery" },
              { label: "Academic", href: "#academic" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-primary-fixed transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-fixed/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-fixed/50">
          <p>© 2024 AmvaChem. Sabah culinary heritage through the lens of chemistry.</p>
          <p>Built with ❤️ for chemistry education in Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
