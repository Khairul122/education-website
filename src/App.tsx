import TopAppBar from "./components/layout/TopAppBar";
import BottomNav from "./components/layout/BottomNav";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ModulesSection from "./components/sections/ModulesSection";
import LabTeaser from "./components/sections/LabTeaser";
import GallerySection from "./components/sections/GallerySection";
import AcademicSection from "./components/sections/AcademicSection";

export default function App() {
  return (
    <div className="bg-background text-on-surface min-h-screen molecular-bg" style={{ fontFamily: "Inter, sans-serif" }}>
      <TopAppBar />
      <main className="pt-16 pb-20 md:pb-0">
        <HeroSection />
        <AboutSection />
        <ModulesSection />
        <LabTeaser />
        <GallerySection />
        <AcademicSection />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
