import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { GraduationCap } from "lucide-react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.program) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    toast.success("¡Solicitud enviada! Nos contactaremos pronto contigo.");
    setFormData({ name: "", email: "", program: "" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8" />
              <span className="text-sm font-medium uppercase tracking-wider">Universidad EIA</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Estudia en la EIA y transforma tu futuro
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Programas acreditados, docentes expertos y empleabilidad garantizada
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <div className="text-3xl font-bold">+90%</div>
                <div className="text-sm text-white/80">Empleabilidad</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <div className="text-3xl font-bold">45+</div>
                <div className="text-sm text-white/80">Años de experiencia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Acreditación</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card shadow-eia-lg rounded-2xl p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">Solicita información</h3>
            <p className="text-muted-foreground mb-6">Completa el formulario y te contactaremos</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-medium mb-2 text-card-foreground">
                  Programa de interés
                </label>
                <Select value={formData.program} onValueChange={(value) => setFormData({ ...formData, program: value })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un programa" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="ingenieria-civil">Ingeniería Civil</SelectItem>
                    <SelectItem value="ingenieria-sistemas">Ingeniería de Sistemas</SelectItem>
                    <SelectItem value="ingenieria-industrial">Ingeniería Industrial</SelectItem>
                    <SelectItem value="medicina">Medicina</SelectItem>
                    <SelectItem value="biologia">Biología</SelectItem>
                    <SelectItem value="administracion">Administración de Negocios</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Enviar solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
