import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Madison High School</h3>
                <p className="text-sm opacity-80">Excelencia Educativa</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Formando líderes del futuro con educación integral desde Kinder hasta Bachillerato. 
              Comprometidos con la excelencia académica y el desarrollo personal de cada estudiante.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="opacity-80 hover:opacity-100 transition-opacity">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#niveles" className="opacity-80 hover:opacity-100 transition-opacity">
                  Niveles Educativos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="opacity-80 hover:opacity-100 transition-opacity">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#noticias" className="opacity-80 hover:opacity-100 transition-opacity">
                  Noticias y Eventos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="opacity-80 hover:opacity-100 transition-opacity">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#inscripciones" className="opacity-80 hover:opacity-100 transition-opacity">
                  Inscripciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 opacity-80" />
                <p className="opacity-80">
                  Av. República del Salvador N34-183 y Suiza<br />
                  Quito, Ecuador
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-80" />
                <p className="opacity-80">(02) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-80" />
                <p className="opacity-80">info@madisonhighschool.edu.ec</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>
            © {currentYear} Madison High School. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Política de Privacidad
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;