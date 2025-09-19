import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      content: "Madison High School ha sido fundamental en el desarrollo académico y personal de mi hija. Los profesores son excepcionales y el ambiente es muy acogedor.",
      rating: 5,
      category: "Padres"
    },
    {
      name: "Carlos Mendoza",
      role: "Estudiante de Bachillerato",
      content: "Gracias a la preparación que recibí aquí, pude ingresar a la universidad que soñaba. Los laboratorios y la metodología son de primer nivel.",
      rating: 5,
      category: "Estudiantes"
    },
    {
      name: "Ana Patricia Ruiz",
      role: "Ex-alumna, Clase 2020",
      content: "Madison me preparó no solo académicamente, sino también como persona. Los valores que aprendí aquí me acompañan en mi carrera universitaria.",
      rating: 5,
      category: "Egresados"
    },
    {
      name: "Roberto Silva",
      role: "Padre de familia",
      content: "La comunicación con los docentes es excelente. Siempre estamos informados del progreso de nuestro hijo y recibimos apoyo constante.",
      rating: 5,
      category: "Padres"
    },
    {
      name: "Isabella Torres",
      role: "Estudiante de Secundaria",
      content: "Me encanta estudiar aquí. Las clases son dinámicas, los proyectos son interesantes y tengo muy buenos amigos. Los profesores siempre nos apoyan.",
      rating: 5,
      category: "Estudiantes"
    },
    {
      name: "Dr. Andrés Vega",
      role: "Ex-alumno, Médico",
      content: "Madison me dio las bases sólidas que necesitaba para mi carrera en medicina. La formación integral y el nivel académico son excepcionales.",
      rating: 5,
      category: "Egresados"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-accent fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce las experiencias de nuestra comunidad educativa: estudiantes, padres y egresados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-medium transition-all duration-300 relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <div className="mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      testimonial.category === 'Padres' 
                        ? 'bg-primary/10 text-primary' 
                        : testimonial.category === 'Estudiantes'
                        ? 'bg-secondary/10 text-secondary'
                        : 'bg-accent/10 text-accent-foreground'
                    }`}>
                      {testimonial.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfacción de padres</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-secondary mb-2">95%</div>
            <div className="text-muted-foreground">Aprobación universitaria</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Egresados exitosos</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-secondary mb-2">13+</div>
            <div className="text-muted-foreground">Años de excelencia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;