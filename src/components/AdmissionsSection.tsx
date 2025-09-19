import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, FileText, Clock, Users, DollarSign } from "lucide-react";

const AdmissionsSection = () => {
  const requirements = [
    {
      level: "Kinder",
      age: "4-5 años",
      documents: [
        "Cédula de identidad del estudiante",
        "Cédula de identidad de los padres",
        "Certificado de nacimiento",
        "Fotos tamaño carnet",
        "Certificado médico",
        "Libreta de vacunas actualizada"
      ]
    },
    {
      level: "Primaria",
      age: "6-11 años",
      documents: [
        "Cédula de identidad del estudiante",
        "Cédula de identidad de los padres",
        "Certificado de nacimiento",
        "Fotos tamaño carnet",
        "Certificado médico",
        "Libreta de vacunas actualizada",
        "Certificado de promoción del año anterior"
      ]
    },
    {
      level: "Secundaria",
      age: "12-14 años",
      documents: [
        "Cédula de identidad del estudiante",
        "Cédula de identidad de los padres",
        "Fotos tamaño carnet",
        "Certificado médico",
        "Certificado de promoción del año anterior",
        "Récord académico de años anteriores",
        "Carta de buena conducta"
      ]
    },
    {
      level: "Bachillerato",
      age: "15-17 años",
      documents: [
        "Cédula de identidad del estudiante",
        "Cédula de identidad de los padres",
        "Fotos tamaño carnet",
        "Certificado médico",
        "Certificado de promoción del año anterior",
        "Récord académico completo",
        "Carta de buena conducta",
        "Examen de ingreso"
      ]
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: "Solicitud de Información",
      description: "Contacta con nosotros para recibir información detallada",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Entrega de Documentos",
      description: "Presenta toda la documentación requerida",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Entrevista y Evaluación",
      description: "Reunión con el equipo académico y evaluación del estudiante",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Confirmación de Cupo",
      description: "Notificación de aceptación y reserva de cupo",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inscripciones" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Admisiones e Inscripciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Forma parte de nuestra comunidad educativa. Conoce los requisitos y el proceso de admisión
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-16 p-8 bg-gradient-hero rounded-lg text-center text-white">
          <h3 className="font-display font-bold text-2xl mb-4">
            ¡Inscripciones Abiertas para el Periodo 2024-2025!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Asegura el futuro educativo de tu hijo. Cupos limitados disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Solicitar Información
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
            >
              <FileText className="mr-2 h-5 w-5" />
              Descargar Formulario
            </Button>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-2xl text-foreground mb-8 text-center">
            Proceso de Admisión
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((step) => (
              <Card key={step.step} className="text-center border-border hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mb-3">
                    {step.icon}
                  </div>
                  <Badge variant="secondary" className="mx-auto w-fit">
                    Paso {step.step}
                  </Badge>
                  <CardTitle className="text-lg text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements by Level */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-foreground mb-8 text-center">
            Requisitos por Nivel Educativo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((level) => (
              <Card key={level.level} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">
                      {level.level}
                    </CardTitle>
                    <Badge variant="outline">
                      {level.age}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">Documentos requeridos:</h4>
                  <ul className="space-y-2">
                    {level.documents.map((document, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{document}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border text-center p-6">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Fechas Importantes</h4>
            <p className="text-sm text-muted-foreground">
              Inscripciones abiertas hasta el 30 de agosto. Inicio de clases: 4 de septiembre.
            </p>
          </Card>
          
          <Card className="border-border text-center p-6">
            <DollarSign className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Becas Disponibles</h4>
            <p className="text-sm text-muted-foreground">
              Ofrecemos becas académicas y deportivas. Consulta requisitos y condiciones.
            </p>
          </Card>
          
          <Card className="border-border text-center p-6">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Asesoría Personalizada</h4>
            <p className="text-sm text-muted-foreground">
              Nuestro equipo te acompañará durante todo el proceso de admisión.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;