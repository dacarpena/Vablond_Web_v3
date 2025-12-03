import { Card } from "@/components/ui/card";
import { Truck, Recycle, Package, FileCheck, ArrowRight } from "lucide-react";

// Imagen de contenedores industriales
const containersImg = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80";

export const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Transporte Especializado",
      items: [
        "Residuos asimilables a urbanos (RAU)",
        "Muebles y enseres",
        "Residuos agrícolas",
        "MARPOL V (residuos de buques)",
        "SANDACH categorías 1 y 3"
      ]
    },
    {
      icon: Package,
      title: "Contenedores a Medida",
      items: [
        "Contenedores de 5 m³",
        "Contenedores de 8 m³",
        "Contenedores de 20 m³",
        "Contenedores de 30 m³",
        "Instalación y retirada flexible"
      ]
    },
    {
      icon: Recycle,
      title: "Valorización y Tratamiento",
      items: [
        "Clasificación y separación",
        "Reciclaje de materiales",
        "Valorización energética",
        "Reducción de vertedero",
        "Economía circular"
      ]
    },
    {
      icon: FileCheck,
      title: "Gestión Documental CAE",
      items: [
        "Contratos de Aceptación y Entrega",
        "Trazabilidad completa",
        "Certificados de gestión",
        "Cumplimiento normativo",
        "Auditorías ambientales"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicios Integrales
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ciclo completo de gestión: desde la recogida hasta la valorización final, 
              garantizando el cumplimiento legal y la máxima eficiencia
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-xl transition-smooth bg-card border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Process Flow */}
          <Card className="p-8 bg-card border-primary/20 shadow-elegant">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Nuestro Proceso: Ciclo Integral
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Recogida", desc: "Contenedores adaptados a su volumen" },
                { step: "2", title: "Transporte", desc: "Flota especializada y certificada" },
                { step: "3", title: "Tratamiento", desc: "Clasificación y procesamiento" },
                { step: "4", title: "Valorización", desc: "Reciclaje y recuperación de valor" }
              ].map((phase, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {phase.step}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Image */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-elegant">
            <img 
              src={containersImg} 
              alt="Contenedores de gestión de residuos de diferentes tamaños"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
