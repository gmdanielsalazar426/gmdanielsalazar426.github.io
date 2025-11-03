import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="asesoria" className="py-20 gradient-hero scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Únete a la comunidad de estudiantes que están transformando el futuro desde la Universidad EIA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto group"
              asChild
            >
              <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                Solicita información ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="https://wa.me/573184154792" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Chatea con nosotros
              </a>
            </Button>
          </div>

          <p className="text-white/80">
            También puedes agendar una asesoría personalizada por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
