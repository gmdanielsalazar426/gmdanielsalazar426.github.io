import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Universidad EIA</h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Formando líderes éticos y competentes desde 1978
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>jorge.gamboa@eia.edu.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>318 415 4792</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Envigado, Antioquia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#programas" className="hover:text-secondary-foreground transition-colors">Programas</a></li>
              <li><a href="#becas" className="hover:text-secondary-foreground transition-colors">Becas</a></li>
              <li><a href="#financiacion" className="hover:text-secondary-foreground transition-colors">Financiación</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Universidad EIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
