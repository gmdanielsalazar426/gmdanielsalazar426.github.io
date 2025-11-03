import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard, Percent, Building2, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Financing = () => {
  const financingOptions = [
    {
      icon: Percent,
      title: "Descuentos por Pronto Pago",
      description: "Obtén descuentos pagando tu matrícula anticipadamente",
      details: [
        "Pago único semestre: hasta 10% de descuento",
        "Pago único año completo: hasta 15% de descuento",
        "Aplica únicamente en pagos antes de inicio de semestre",
      ],
    },
    {
      icon: CreditCard,
      title: "Crédito Directo EIA",
      description: "Financia tu matrícula directamente con la universidad",
      details: [
        "Hasta 12 cuotas sin interés",
        "Sin requisitos bancarios complejos",
        "Proceso de aprobación ágil",
        "Condiciones flexibles según perfil",
      ],
    },
    {
      icon: Building2,
      title: "Bancos Aliados",
      description: "Accede a créditos educativos con condiciones preferenciales",
      details: [
        "Convenios con Bancolombia, Davivienda, BBVA",
        "Plazos hasta 10 años",
        "Períodos de gracia disponibles",
        "Tasas preferenciales para estudiantes EIA",
      ],
    },
  ];

  return (
    <section id="financiacion" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Financiación y Descuentos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Múltiples opciones para hacer realidad tu educación superior
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {financingOptions.map((option, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-border rounded-lg px-6 shadow-sm hover:shadow-eia transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-lg font-semibold text-card-foreground block">{option.title}</span>
                      <span className="text-sm text-muted-foreground">{option.description}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 pl-13">
                  <ul className="space-y-2">
                    {option.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Comparison Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-card rounded-lg overflow-hidden shadow-eia border-border border">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Modalidad</th>
                  <th className="px-6 py-4 text-left font-semibold">Plazo</th>
                  <th className="px-6 py-4 text-left font-semibold">Beneficio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-accent/50 transition-colors">
                  <td className="px-6 py-4 text-card-foreground font-medium">Pronto Pago</td>
                  <td className="px-6 py-4 text-muted-foreground">Pago único</td>
                  <td className="px-6 py-4 text-success font-semibold">Hasta 15% descuento</td>
                </tr>
                <tr className="hover:bg-accent/50 transition-colors">
                  <td className="px-6 py-4 text-card-foreground font-medium">Crédito EIA</td>
                  <td className="px-6 py-4 text-muted-foreground">Hasta 12 meses</td>
                  <td className="px-6 py-4 text-success font-semibold">Sin interés</td>
                </tr>
                <tr className="hover:bg-accent/50 transition-colors">
                  <td className="px-6 py-4 text-card-foreground font-medium">Bancos Aliados</td>
                  <td className="px-6 py-4 text-muted-foreground">Hasta 10 años</td>
                  <td className="px-6 py-4 text-success font-semibold">Tasas preferenciales</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Métodos de Financiación */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-4 text-foreground text-center">Métodos de Financiación</h3>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              La Universidad EIA cuenta con un plan de financiación directa para pagar por cuotas. También tenemos convenio con las siguientes entidades:
            </p>

            {/* Financiación Directa EIA */}
            <Card className="mb-8 shadow-eia border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Building2 className="w-5 h-5" />
                  Financiación Directa Universidad EIA
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Para más información sobre nuestro plan de financiación directa, comunícate con la Oficina de Contabilidad:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-card-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    <span><strong>Teléfono:</strong> 354 90 90, opción 1 – Ext. 349</span>
                  </div>
                  <div className="flex items-center gap-2 text-card-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    <span><strong>Email:</strong> financiacion@eia.edu.co</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Entidades Aliadas */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* ICETEX */}
              <Card className="shadow-sm hover:shadow-eia transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">ICETEX</CardTitle>
                  <p className="text-sm text-muted-foreground">Créditos educativos para pregrado y postgrados</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-2">Asesor ICETEX:</p>
                    <div className="space-y-2 pl-2">
                      <p className="text-card-foreground">Daniel Alberto Castaño</p>
                      <div className="flex items-center gap-2 text-sm">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <span>+57 333 602 5656</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>dcastano@icetex.gov.co</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-2">Enlace Universidad EIA:</p>
                    <div className="space-y-2 pl-2">
                      <p className="text-card-foreground">Yessenia Tobio Jaraba</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>354 9090 – Opción 1, Ext. 229</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>icetex@eia.edu.co</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* SUFI */}
              <Card className="shadow-sm hover:shadow-eia transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">SUFI - Bancolombia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-card-foreground"><strong>Asesor:</strong> Juan Felipe Arrieta Osorio</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>404 3119</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span>300 407 3624</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>juarriet@bancolombia.com.co</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Más información <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* COMFAMA */}
              <Card className="shadow-sm hover:shadow-eia transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">COMFAMA</CardTitle>
                  <p className="text-sm text-muted-foreground">Créditos educativos para pregrado</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Consulta toda la información <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* NESA */}
              <Card className="shadow-sm hover:shadow-eia transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">NESA</CardTitle>
                  <p className="text-sm text-muted-foreground">Aplica para estudiantes de Rionegro, Antioquia</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-card-foreground"><strong>Asesora:</strong> Manuela Jaramillo</p>
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span>319 323 5443</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>servicioalcliente@fnesa.org</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Más información <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* SAPIENCIA */}
              <Card className="shadow-sm hover:shadow-eia transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">SAPIENCIA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-card-foreground"><strong>Asesora:</strong> Liseth Rincón Moncada</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>444 7947, Ext. 162</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>liseth.rincon@sapiencia.gov.co</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Más información <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* FINCOMERCIO */}
              <Card className="shadow-sm hover:shadow-eia transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">FINCOMERCIO</CardTitle>
                  <p className="text-sm text-muted-foreground">Renovación 100% virtual</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Consulta toda la información <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* FONDOFUTURO */}
              <Card className="shadow-sm hover:shadow-eia transition-shadow md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">FONDOFUTURO</CardTitle>
                  <p className="text-sm text-muted-foreground">Financia tu matrícula con modalidad corto y largo plazo</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-card-foreground">Corto Plazo</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                        <li>• Mínimo 3% de cuota inicial</li>
                        <li>• Hasta mínimo el 30% del valor de la matrícula</li>
                        <li>• De 3 a 6 cuotas incluida la cuota inicial</li>
                        <li>• Tasa de interés: 1.4% N.M.V.</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-card-foreground">Largo Plazo</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                        <li>• Máximo 70% del valor de la matrícula</li>
                        <li>• Pagas hasta en 1.5 veces del periodo financiado</li>
                        <li>• Tasa de interés: IPC + 9 puntos E.A.</li>
                        <li>• Codeudor obligatorio</li>
                      </ul>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Consulta toda la información <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;
