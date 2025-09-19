import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Estudiantes de Madison High School en actividades educativas"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in">
            ¡Empezamos clases en 
            <span className="text-primary"> septiembre</span>!
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Únete a la familia Madison High School y descubre una educación de excelencia que prepara a tus hijos para el futuro. Desde Kinder hasta Bachillerato.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              variant="enrollment" 
              size="lg"
              onClick={() => scrollToSection('inscripciones')}
              className="text-lg px-8 py-4 h-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Inscripciones Abiertas
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contacto')}
              className="text-lg px-8 py-4 h-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contactar Ahora
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-soft border border-border">
              <h3 className="font-semibold text-primary mb-2">Niveles Educativos</h3>
              <p className="text-muted-foreground">Kinder a Bachillerato</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-soft border border-border">
              <h3 className="font-semibold text-primary mb-2">Educación Bilingüe</h3>
              <p className="text-muted-foreground">Español e Inglés</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-soft border border-border">
              <h3 className="font-semibold text-primary mb-2">Instalaciones Modernas</h3>
              <p className="text-muted-foreground">Laboratorios y tecnología</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;