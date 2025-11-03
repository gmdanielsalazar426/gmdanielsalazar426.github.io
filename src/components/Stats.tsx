import { Users, GraduationCap, BookOpen, Award, Trophy, Medal, UserCheck, BadgeDollarSign } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: UserCheck,
      value: "9,513",
      label: "Egresados",
    },
    {
      icon: Users,
      value: "2,259",
      label: "Estudiantes de Pregrado",
    },
    {
      icon: GraduationCap,
      value: "191",
      label: "Estudiantes de Posgrado",
    },
    {
      icon: BadgeDollarSign,
      value: "000",
      label: "Becados",
    },
    {
      icon: BookOpen,
      value: "16",
      label: "Pregrados",
    },
    {
      icon: Award,
      value: "12",
      label: "Especializaciones",
    },
    {
      icon: Trophy,
      value: "4",
      label: "Maestrías",
    },
    {
      icon: Medal,
      value: "1",
      label: "Doctorado",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:shadow-eia-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
