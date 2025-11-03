import { Award, BookOpen, CreditCard, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickNav = () => {
  const navItems = [
    { icon: Award, label: "Becas", href: "#becas" },
    { icon: BookOpen, label: "Programas", href: "#programas" },
    { icon: CreditCard, label: "Financiación", href: "#financiacion" },
    { icon: Calendar, label: "Agenda tu asesoría", href: "#asesoria" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 py-4 justify-center lg:justify-start">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              asChild
              className="gap-2 hover:bg-accent hover:text-accent-foreground"
            >
              <a href={item.href}>
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default QuickNav;
