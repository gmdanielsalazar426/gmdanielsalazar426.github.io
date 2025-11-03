import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const Programs = () => {
  const schools = [
    {
      id: "ingenieria",
      name: "Ingeniería y Ciencias Básicas",
      programs: [
        { name: "Ingeniería Civil", duration: "10 semestres", modality: "Presencial" },
        { name: "Ingeniería de Sistemas", duration: "10 semestres", modality: "Presencial" },
        { name: "Ingeniería Industrial", duration: "10 semestres", modality: "Presencial" },
        { name: "Ingeniería Mecánica", duration: "10 semestres", modality: "Presencial" },
      ],
    },
    {
      id: "ciencias",
      name: "Ciencias de la Vida y Medicina",
      programs: [
        { name: "Medicina", duration: "12 semestres", modality: "Presencial" },
        { name: "Biología", duration: "8 semestres", modality: "Presencial" },
        { name: "Ingeniería Biomédica", duration: "10 semestres", modality: "Presencial" },
      ],
    },
    {
      id: "business",
      name: "Tech Business School",
      programs: [
        { name: "Administración de Negocios", duration: "8 semestres", modality: "Presencial" },
        { name: "Economía y Finanzas", duration: "8 semestres", modality: "Presencial" },
        { name: "Ingeniería Financiera", duration: "10 semestres", modality: "Presencial" },
      ],
    },
  ];

  return (
    <section id="programas" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Oferta Académica</h2>
          <p className="text-xl text-muted-foreground">Programas acreditados para construir tu futuro</p>
        </div>

        <Tabs defaultValue="ingenieria" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto gap-2 bg-muted p-2">
            {schools.map((school) => (
              <TabsTrigger
                key={school.id}
                value={school.id}
                className="text-sm md:text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {school.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {schools.map((school) => (
            <TabsContent key={school.id} value={school.id} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {school.programs.map((program, index) => (
                  <Card key={index} className="p-6 hover:shadow-eia transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                    <h3 className="text-xl font-bold mb-4 text-card-foreground">{program.name}</h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{program.modality}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Conoce más
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Programs;
