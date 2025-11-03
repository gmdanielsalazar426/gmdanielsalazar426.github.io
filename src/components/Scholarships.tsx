import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Scholarships = () => {
  const scholarships = [
    {
      title: "Beca Excelencia Académica",
      description: "Para estudiantes con percentil entre 85 y 95",
      coverage: "Becas desde 10% hasta 50% del valor de matrícula",
    },
    {
      title: "Beca Convenio con Colegios",
      description: "Estudiantes graduados de colegios con convenio vigente",
      coverage: "50% del valor de matrícula",
    },
    {
      title: "Beca Región",
      description: "Para estudiantes de regiones específicas del país",
      coverage: "50% del valor de matrícula",
    },
    {
      title: "Beca Antioquia",
      description: "Estudiantes del departamento de Antioquia (fuera del Valle de Aburrá)",
      coverage: "50% del valor de matrícula",
    },
    {
      title: "Beca Oriente",
      description: "Para estudiantes del Oriente Antioqueño",
      coverage: "40% del valor de matrícula",
    },
    {
      title: "Beca Sur del Valle de Aburrá",
      description: "Estudiantes de municipios del sur del Valle de Aburrá",
      coverage: "30% del valor de matrícula",
    },
  ];

  return (
    <section id="becas" className="py-20 bg-gradient-accent scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Becas IngEnIA Oportunidades</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Becas disponibles</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Apoyamos tu talento con múltiples opciones de financiación
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {scholarships.map((scholarship, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-border rounded-lg px-6 shadow-sm hover:shadow-eia transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-card-foreground text-left">{scholarship.title}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  <p className="mb-2">{scholarship.description}</p>
                  <p className="font-semibold text-success">{scholarship.coverage}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-card p-8 rounded-2xl shadow-eia border-border border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">¿Necesitas más información?</h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está listo para asesorarte en el proceso de becas
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="mailto:jorge.gamboa@eia.edu.co">
                  <Mail className="w-4 h-4" />
                  jorge.gamboa@eia.edu.co
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 border-success text-success hover:bg-success hover:text-success-foreground">
                <a href="https://wa.me/573184154792" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" />
                  WhatsApp: 318 415 4792
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
