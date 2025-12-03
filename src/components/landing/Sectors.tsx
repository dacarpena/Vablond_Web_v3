import { Card } from "@/components/ui/card";
import { Ship, Factory, Building2, Wheat, Landmark } from "lucide-react";

export const Sectors = () => {
  const sectors = [
    {
      icon: Ship,
      title: "Puertos y Navieras",
      description: "Gestión de residuos MARPOL V y limpieza de zonas portuarias",
      benefits: ["Cumplimiento normativa marítima", "Recogida urgente 24/7", "Certificación internacional"]
    },
    {
      icon: Factory,
      title: "Industria Agroalimentaria",
      description: "SANDACH categorías 1 y 3, residuos orgánicos y subproductos",
      benefits: ["Trazabilidad completa", "Prevención de sanciones", "Gestión certificada"]
    },
    {
      icon: Building2,
      title: "Construcción y Rehabilitación",
      description: "Muebles, enseres, escombros y residuos de obra",
      benefits: ["Contenedores de gran capacidad", "Flexibilidad de recogida", "Valorización máxima"]
    },
    {
      icon: Landmark,
      title: "Administraciones Públicas",
      description: "Servicios de limpieza y gestión de residuos urbanos",
      benefits: ["Contratos marco", "Reporting periódico", "Cumplimiento legal garantizado"]
    },
    {
      icon: Wheat,
      title: "Sector Agrícola",
      description: "Residuos agrícolas, plásticos y envases fitosanitarios",
      benefits: ["Soluciones específicas", "Economía circular", "Sostenibilidad certificada"]
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sectores que Confiamos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experiencia multisectorial con soluciones específicas para cada industria. 
              Conocemos sus necesidades y su normativa aplicable.
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-smooth hover:scale-105 bg-card border-border"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {sector.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {sector.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-border">
                      {sector.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿Su sector no aparece aquí?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestra experiencia multisectorial nos permite adaptarnos a cualquier tipo de 
                industria. Contacte con nosotros para una solución personalizada.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
