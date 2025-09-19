import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Trophy, Globe } from "lucide-react";
import kindergartenImage from "@/assets/kindergarten.jpg";
import primaryImage from "@/assets/primary-lab.jpg";
import highSchoolImage from "@/assets/high-school-tech.jpg";

const EducationalLevels = () => {
  const levels = [
    {
      title: "Kinder",
      age: "4-5 años",
      description: "Desarrollo integral a través del juego y la exploración",
      subjects: ["Lenguaje", "Motricidad", "Juegos didácticos", "Socialización", "Arte y creatividad"],
      image: kindergartenImage,
      icon: <Users className="h-6 w-6" />,
      color: "bg-accent"
    },
    {
      title: "Primaria",
      age: "6-11 años",
      description: "Fundamentos sólidos para el aprendizaje futuro",
      subjects: ["Matemática", "Lengua y Literatura", "Ciencias Naturales", "Estudios Sociales", "Inglés", "Educación Física", "Arte"],
      image: primaryImage,
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-primary"
    },
    {
      title: "Secundaria",
      age: "12-14 años",
      description: "Preparación para desafíos académicos avanzados",
      subjects: ["Matemática", "Lengua y Literatura", "Física", "Química", "Biología", "Historia", "Filosofía", "Computación", "Inglés"],
      image: highSchoolImage,
      icon: <Globe className="h-6 w-6" />,
      color: "bg-secondary"
    },
    {
      title: "Bachillerato",
      age: "15-17 años",
      description: "Especialización y preparación universitaria",
      subjects: ["Matemática avanzada", "Lengua", "Historia", "Física", "Química", "Biología", "Filosofía", "Economía", "Emprendimiento", "Inglés", "Optativas"],
      image: highSchoolImage,
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section id="niveles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Niveles Educativos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompañamos el crecimiento de nuestros estudiantes desde sus primeros pasos hasta su preparación universitaria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {levels.map((level, index) => (
            <Card key={level.title} className="overflow-hidden hover:shadow-medium transition-all duration-300 border-border bg-card">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={level.image} 
                  alt={`Estudiantes de ${level.title} en Madison High School`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className={`p-3 rounded-full ${level.color} text-white shadow-medium`}>
                    {level.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-display text-foreground">{level.title}</CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    {level.age}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {level.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">Materias principales:</h4>
                <div className="flex flex-wrap gap-2">
                  {level.subjects.map((subject) => (
                    <Badge key={subject} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalLevels;