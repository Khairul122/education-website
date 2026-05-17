# 🧪 AmvaChem — Perencanaan Website Edukasi Interaktif
## *Sabahan Culinary Chemistry Platform — Single Page*

> **Status:** Diperbarui — fokus pada **1 halaman** scrollable (sesuai `code.html`)

---

## 📋 RINGKASAN PROYEK

**AmvaChem** adalah platform edukasi kimia kuliner berbasis warisan budaya Sabah, Malaysia.

**Perubahan dari versi sebelumnya:**
- **1 halaman scrollable** dengan 8 section
- **tidak diperlukan** (single page)
- **React useState/useRef** sudah cukup
- **4 minggu** roadmap lebih realistis

---

## 🗂️ PEMETAAN SECTION (dari `code.html` baris 1–390)

| No | Section | Komponen React |
|----|---------|----------------|
| 1 | Sticky header + logo | `TopAppBar` |
| 2 | Hero full-screen + tagline + CTA | `HeroSection` |
| 3 | Bento grid kimia | `AboutSection` |
| 4 | Daftar modul aktif | `ModulesSection` |
| 5 | Virtual Lab teaser | `LabTeaser` |
| 6 | Galeri foto warisan Sabah | `GallerySection` |
| 7 | Academic Foundations + References | `AcademicSection` |
| 8 | Footer + BottomNav (mobile) | `Footer` / `BottomNav` |

---

## 🏗️ STRUKTUR PROYEK

```
amvachem/
├── public/
│   └── assets/
│       ├── images/       # Gambar hero, galeri, bahan
│       └── svgs/         # Logo, Linangkit pattern, ikon kimia
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopAppBar.jsx        # Sticky header glassmorphism
│   │   │   ├── BottomNav.jsx        # Fixed bottom nav (mobile only)
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── GlassCard.jsx        # Glassmorphism card Level 2
│   │   │   ├── ProgressChip.jsx     # Badge progress modul
│   │   │   └── LinangkitDivider.jsx # Divider motif tenun Sabah
│   │   └── sections/
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx     # Bento grid
│   │       ├── ModulesSection.jsx   # Module 1 & 2 cards
│   │       ├── LabTeaser.jsx
│   │       ├── GallerySection.jsx
│   │       └── AcademicSection.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js   # GSAP ScrollTrigger helper
│   ├── lib/
│   │   └── constants.js            # Warna, teks konten
│   ├── styles/
│   │   └── globals.css             # Background pattern
│   ├── App.jsx                     # Root: semua section disusun di sini
│   └── main.jsx
├── tailwind.config.js              # Dari DESIGN.md
├── vite.config.js
└── package.json
```

---

## 📦 DEPENDENCIES (lebih ringan)

# Tailwind
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms
npx tailwindcss init -p

# Animasi
npm install gsap @gsap/react framer-motion

# Utility
npm install clsx tailwind-merge
```

> ❌ `react-router-dom` — tidak diperlukan
> ❌ `zustand` — tidak diperlukan
> ❌ `@react-three/fiber` — bukan scope halaman ini

---

## 🎨 TAILWIND CONFIG (dari DESIGN.md)

```javascript
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#442a22",
        "secondary": "#00639a",
        "tertiary": "#1e3700",
        "background": "#fbfbe2",
        "surface": "#fbfbe2",
        "on-surface": "#1b1d0e",
        "on-surface-variant": "#504441",
        "primary-container": "#5d4037",
        "secondary-container": "#51b2fe",
        "tertiary-container": "#2e5000",
        "on-tertiary-container": "#8ec64c",
        "surface-container-low": "#f5f5dc",
        "surface-container": "#efefd7",
        "outline": "#827470",
        "outline-variant": "#d4c3be",
        "primary-fixed": "#f9ded5",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        "body-md": ["16px", { lineHeight: "24px" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
      spacing: {
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "container-max": "1280px",
      },
      backdropBlur: {
        "glass": "12px",
        "glass-heavy": "24px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
```

---

## 📐 ARSITEKTUR App.jsx

```jsx
export default function App() {
  return (
    <div className="bg-background text-on-surface font-inter min-h-screen molecular-bg">
      <TopAppBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ModulesSection />
        <LabTeaser />
        <GallerySection />
        <AcademicSection />
      </main>
      <Footer />
      <BottomNav /> {/* md:hidden */}
    </div>
  );
}
```

---

## 🎬 STRATEGI ANIMASI

### GSAP — Scroll Reveal
```javascript
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Hero reveal saat halaman load
useGSAP(() => {
  gsap.from(".hero-title",    { opacity: 0, y: 60, duration: 1, ease: "power3.out" });
  gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8, delay: 0.3 });
  gsap.from(".hero-cta",      { opacity: 0, scale: 0.9, duration: 0.6, delay: 0.5 });
}, []);

// Section cards reveal saat scroll
ScrollTrigger.batch(".reveal-card", {
  onEnter: (elements) => {
    gsap.from(elements, { opacity: 0, y: 50, stagger: 0.15, duration: 0.8 });
  },
  once: true,
});
```

### Framer Motion — Card Hover
```jsx
const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }
};

// Gallery hover overlay
const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } }
};
```

---

## 🧩 KOMPONEN KUNCI

### GlassCard
```jsx
const GlassCard = ({ children, className, accentColor }) => (
  <motion.div
    variants={cardVariants}
    initial="rest"
    whileHover="hover"
    className={clsx(
      "rounded-lg overflow-hidden",
      "bg-white/70 backdrop-blur-glass border border-white/20",
      "shadow-[0px_8px_32px_rgba(93,64,55,0.1)]",
      accentColor && `border-t-4 ${accentColor}`,
      className
    )}
  >
    {children}
  </motion.div>
);
```

### LinangkitDivider
```jsx
const LinangkitDivider = () => (
  <div className="relative h-[4px] my-12 mx-auto max-w-[300px]">
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: "repeating-linear-gradient(45deg, #442a22, #442a22 10px, #8ec64c 10px, #8ec64c 20px)",
        maskImage: "linear-gradient(to right, transparent, black, transparent)"
      }}
    />
  </div>
);
```

### ProgressChip
```jsx
const ProgressChip = ({ label, percentage }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15">
    <div className="w-16 h-1.5 bg-white/30 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-secondary rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      />
    </div>
    <span className="font-mono text-label-sm text-secondary">{label}</span>
  </div>
);
```

---

## 🎨 POLA VISUAL

### Background
```css
/* globals.css */
.molecular-bg {
  background-color: #fbfbe2;
  background-image:
    radial-gradient(circle at 2px 2px, rgba(93,64,55,0.05) 1px, transparent 0),
    repeating-linear-gradient(-45deg, transparent, transparent 20px,
      rgba(142,198,76,0.02) 20px, rgba(142,198,76,0.02) 40px);
  background-size: 24px 24px, 80px 80px;
}
```

### Glassmorphism
```css
.glass-card  { background: rgba(255,255,255,0.70); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.20); }
.glass-heavy { background: rgba(255,255,255,0.85); backdrop-filter: blur(24px); box-shadow: 0px 8px 32px rgba(93,64,55,0.1); }
```

---

## 📱 RESPONSIVITAS

| Layar | Layout | Nav |
|-------|--------|-----|
| < 768px | 1 kolom, margin 16px | Bottom nav |
| 768–1024px | 2 kolom | Top app bar |
| > 1024px | 3–4 kolom, margin 48px | Top app bar |

---

## 🗓️ ROADMAP (4 Minggu)

### Minggu 1 — Setup
```
□ Vite + React + Tailwind (konfigurasi DESIGN.md)
□ Google Fonts: Montserrat, Inter, JetBrains Mono
□ GlassCard, LinangkitDivider, ProgressChip
□ TopAppBar (glassmorphism sticky), BottomNav, Footer
□ globals.css: molecular-bg background pattern
```

### Minggu 2 — HeroSection + AboutSection
```
□ HeroSection: full-screen, logo, tagline, CTA
□ GSAP hero text reveal animation
□ AboutSection: bento grid 3 kolom
□ Gelatinization card + Protein Denaturation card
□ GSAP ScrollTrigger untuk bento cards
```

### Minggu 3 — ModulesSection + LabTeaser + GallerySection
```
□ ModulesSection: Module 1 (Ambuyat) + Module 2 (Hinava)
□ ProgressChip pada setiap modul card
□ LabTeaser: dark-bg CTA section
□ GallerySection: grid foto 2×3 + hover overlay Framer Motion
```

### Minggu 4 — AcademicSection + Polish
```
□ AcademicSection: Constructivism, Ethnoscience, References
□ LinangkitDivider di antara semua section besar
□ Uji responsivitas: 375px / 768px / 1280px
□ Accessibility: ARIA labels, keyboard nav
□ Optimasi: lazy loading gambar, reduce-motion check
```

---

## ⚡ URUTAN IMPLEMENTASI

1. `GlassCard` + `LinangkitDivider` + `ProgressChip` — shared UI
2. `TopAppBar` + `BottomNav` + `Footer` — layout shell
3. `HeroSection` — first impression
4. `ModulesSection` — konten inti
5. `AboutSection` — bento kimia
6. `GallerySection` — visual heritage
7. `LabTeaser` — CTA lab
8. `AcademicSection` — referensi

---

## 📝 CATATAN

- Semua warna → `tailwind.config.js` (jangan hardcode hex)
- Glassmorphism: `bg-white/70 backdrop-blur-[12px] border border-white/20`
- LinangkitDivider wajib muncul di antara setiap section besar
- Bottom nav: `className="md:hidden fixed bottom-0 ..."`
- GSAP untuk scroll global, Framer Motion untuk komponen individual
- Test di 375px width terlebih dahulu (mobile-first)