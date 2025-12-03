import { Card } from "@/components/ui/card";
import { CheckCircle2, FileCheck2, Scale, Leaf } from "lucide-react";

export const Compliance = () => {
  const compliancePoints = [
    {
      icon: Scale,
      title: "100% Cumplimiento Normativo",
      description: "Gestión conforme a la Ley 7/2022 de residuos y economía circular, normativa SANDACH, MARPOL y toda la legislación aplicable."
    },
    {
      icon: FileCheck2,
      title: "Trazabilidad Documental",
      description: "Control completo mediante Contratos de Aceptación y Entrega (CAE), certificados de gestión y registros oficiales ante organismos competentes."
    },
    {
      icon: CheckCircle2,
      title: "Seguridad Jurídica",
      description: "Eliminamos el riesgo de sanciones administrativas garantizando que todos los residuos se gestionan según la normativa vigente."
    },
    {
      icon: Leaf,
      title: "Compromiso Ambiental",
      description: "Procesos orientados a la valorización y economía circular. Minimizamos el vertedero y maximizamos la recuperación de materiales."
    }
  ];

  const certifications = [
    "Gestor Autorizado de Residuos",
    "Transportista Autorizado",
    "ISO 14001 en proceso",
    "Registros SANDACH",
    "MARPOL certificado"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cumplimiento y Sostenibilidad
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La tranquilidad de trabajar con un partner que garantiza el cumplimiento legal 
              y el compromiso con el medio ambiente
            </p>
          </div>

          {/* Compliance Points */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {compliancePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-xl transition-smooth bg-card border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Benefits Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-elegant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  ¿Por qué es importante el cumplimiento?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Evite sanciones de hasta 2.000.000 € según la Ley de Residuos",
                    "Proteja la reputación de su empresa ante clientes y sociedad",
                    "Demuestre su compromiso con la RSC y los ODS",
                    "Acceda a certificaciones ambientales y sellos de calidad",
                    "Cumpla con los requisitos de auditores y organismos oficiales"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Certificaciones y Autorizaciones
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center p-3 bg-card rounded-lg border border-border"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground italic">
                  * Actualizamos constantemente nuestras certificaciones para ofrecer 
                  el máximo nivel de garantía y cumplimiento.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
