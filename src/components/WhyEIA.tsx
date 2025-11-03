import { CheckCircle, Globe, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyEIA = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Acreditación de Alta Calidad",
      description: "Reconocimiento institucional que garantiza excelencia académica",
    },
    {
      icon: TrendingUp,
      title: "+90% Empleabilidad",
      description: "Nuestros egresados son altamente valorados en el mercado laboral",
    },
    {
      icon: Globe,
      title: "Alianzas Internacionales",
      description: "Convenios con universidades de prestigio en el mundo",
    },
    {
      icon: Users,
      title: "Formación Ética y Científica",
      description: "Desarrollamos líderes comprometidos con la transformación social",
    },
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">¿Por qué elegir la EIA?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde 1978, formamos líderes que transforman el país con conocimiento, ética y visión global
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-eia-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEIA;
