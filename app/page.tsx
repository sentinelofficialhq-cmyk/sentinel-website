import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PreviewSection from "@/components/PreviewSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="page-bg min-h-screen">
      <Nav />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
