import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, BookOpen, Trophy, Users } from "lucide-react";

const NewsEvents = () => {
  const news = [
    {
      title: "Inicio del Año Lectivo 2024-2025",
      description: "Las clases iniciarán el 4 de septiembre. Bienvenidos a un nuevo ciclo de aprendizaje y crecimiento.",
      date: "2024-09-04",
      category: "Académico",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "Feria de Ciencias 2024",
      description: "Nuestros estudiantes presentarán proyectos innovadores en la feria anual de ciencias.",
      date: "2024-10-15",
      category: "Evento",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "Reunión de Padres de Familia",
      description: "Primera reunión del año para coordinación académica y administrativa.",
      date: "2024-09-20",
      category: "Administrativo",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const importantAnnouncements = [
    {
      title: "Proceso de Inscripciones 2024-2025",
      content: "Las inscripciones para el nuevo año lectivo están abiertas hasta el 30 de agosto. No pierdas la oportunidad de formar parte de nuestra comunidad educativa.",
      urgent: true
    },
    {
      title: "Protocolo de Salud",
      content: "Mantenemos los más altos estándares de higiene y salud para garantizar un ambiente seguro para todos nuestros estudiantes.",
      urgent: false
    },
    {
      title: "Programa de Becas",
      content: "Conoce nuestro programa de becas académicas y deportivas disponibles para estudiantes destacados.",
      urgent: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-EC', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="noticias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Noticias y Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias y próximos eventos de nuestra institución
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News and Events */}
          <div>
            <h3 className="font-display font-semibold text-2xl text-foreground mb-6">
              Próximos Eventos
            </h3>
            <div className="space-y-6">
              {news.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 text-foreground">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {item.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Announcements */}
          <div>
            <h3 className="font-display font-semibold text-2xl text-foreground mb-6">
              Comunicados Importantes
            </h3>
            <div className="space-y-6">
              {importantAnnouncements.map((announcement, index) => (
                <Card 
                  key={index} 
                  className={`border-border hover:shadow-medium transition-all duration-300 ${
                    announcement.urgent ? 'border-l-4 border-l-accent bg-accent-light/10' : ''
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-foreground">
                        {announcement.title}
                      </CardTitle>
                      {announcement.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          Urgente
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {announcement.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* School Calendar Highlight */}
        <div className="mt-16 p-8 bg-gradient-subtle rounded-lg border border-border">
          <div className="text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">
              Calendario Escolar 2024-2025
            </h3>
            <p className="text-muted-foreground mb-6">
              Consulta las fechas importantes del año lectivo y planifica con anticipación
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-card rounded-lg border border-border">
                <div className="font-semibold text-primary">Inicio de clases</div>
                <div className="text-muted-foreground">4 de septiembre</div>
              </div>
              <div className="p-3 bg-card rounded-lg border border-border">
                <div className="font-semibold text-secondary">Vacaciones de invierno</div>
                <div className="text-muted-foreground">15-26 de julio</div>
              </div>
              <div className="p-3 bg-card rounded-lg border border-border">
                <div className="font-semibold text-primary">Graduación</div>
                <div className="text-muted-foreground">Febrero 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;