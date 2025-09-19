import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg text-foreground">Madison High School</h1>
              <p className="text-xs text-muted-foreground">Excelencia Educativa</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('niveles')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Niveles Educativos
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('noticias')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Noticias
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button 
              variant="hero"
              onClick={() => scrollToSection('inscripciones')}
            >
              Inscríbete Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('niveles')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Niveles Educativos
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('noticias')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Noticias
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button 
              variant="hero"
              className="w-full"
              onClick={() => scrollToSection('inscripciones')}
            >
              Inscríbete Ahora
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;