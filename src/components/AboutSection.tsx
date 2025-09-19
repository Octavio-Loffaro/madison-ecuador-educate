import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestra historia, valores y compromiso con la excelencia educativa
          </p>
        </div>

        {/* School Image */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-large">
            <img 
              src={schoolBuilding} 
              alt="Instalaciones de Madison High School"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-display font-semibold text-2xl text-foreground mb-6">
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Madison High School fue fundado en 2010 con la visión de crear una institución educativa 
                que combine la excelencia académica con el desarrollo integral de cada estudiante.
              </p>
              <p>
                Durante más de una década, hemos crecido y evolucionado, manteniéndonos siempre fieles 
                a nuestros valores fundamentales: la calidad educativa, el respeto, la innovación y 
                el compromiso con la comunidad.
              </p>
              <p>
                Hoy somos una de las instituciones educativas más reconocidas de Ecuador, con graduados 
                que destacan en las mejores universidades del país y del extranjero.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center border-border">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">13+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center border-border">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Estudiantes graduados</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center border-border">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Aprobación universitaria</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center border-border">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Docentes calificados</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 border-border hover:shadow-medium transition-all duration-300">
            <CardContent className="p-0">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">Misión</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Formar estudiantes integrales con sólidos valores, pensamiento crítico y competencias 
                para ser líderes en un mundo globalizado.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-border hover:shadow-medium transition-all duration-300">
            <CardContent className="p-0">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                  <Eye className="h-6 w-6 text-secondary-foreground" />
                </div>
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">Visión</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ser la institución educativa líder en Ecuador, reconocida por la excelencia académica 
                y la formación de ciudadanos comprometidos con la sociedad.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-border hover:shadow-medium transition-all duration-300">
            <CardContent className="p-0">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">Valores</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Respeto, responsabilidad, honestidad, solidaridad, perseverancia e innovación 
                guían todas nuestras acciones educativas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-foreground mb-8 text-center">
            Nuestras Instalaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h5 className="font-semibold text-foreground">Biblioteca Digital</h5>
                <p className="text-sm text-muted-foreground">Acceso a miles de recursos</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
              <Award className="h-8 w-8 text-secondary" />
              <div>
                <h5 className="font-semibold text-foreground">Laboratorios</h5>
                <p className="text-sm text-muted-foreground">Ciencias y computación</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <h5 className="font-semibold text-foreground">Áreas Deportivas</h5>
                <p className="text-sm text-muted-foreground">Canchas y gimnasio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;