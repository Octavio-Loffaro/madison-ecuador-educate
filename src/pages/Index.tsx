import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducationalLevels from "@/components/EducationalLevels";
import AboutSection from "@/components/AboutSection";
import NewsEvents from "@/components/NewsEvents";
import Testimonials from "@/components/Testimonials";
import AdmissionsSection from "@/components/AdmissionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EducationalLevels />
        <AboutSection />
        <NewsEvents />
        <Testimonials />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
