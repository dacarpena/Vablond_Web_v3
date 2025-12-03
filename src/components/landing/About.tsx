import { Card } from "@/components/ui/card";
import { Target, Shield, Leaf, Users } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Experiencia Multisectorial",
      description: "Soluciones adaptadas a las necesidades específicas de cada sector industrial"
    },
    {
      icon: Shield,
      title: "Cumplimiento Legal",
      description: "Gestión conforme a toda la normativa ambiental y de residuos vigente"
    },
    {
      icon: Leaf,
      title: "Innovación Sostenible",
      description: "Tecnología y procesos que minimizan el impacto ambiental"
    },
    {
      icon: Users,
      title: "Proximidad al Cliente",
      description: "Atención personalizada y respuesta rápida a sus necesidades"
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quiénes Somos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>Vablond S.L.</strong> es una empresa especializada en <strong>gestión integral de residuos</strong> con 
              un firme compromiso con la sostenibilidad y el cumplimiento normativo. Ofrecemos soluciones 
              completas de transporte, tratamiento y valorización de residuos para empresas que buscan 
              <strong> seguridad jurídica, eficiencia operativa y responsabilidad ambiental</strong>.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 md:p-12 mb-12 bg-card shadow-elegant border-primary/20">
            <p className="text-lg text-center text-foreground leading-relaxed">
              No solo gestionamos residuos, <strong className="text-primary">creamos valor</strong>. 
              Transformamos los residuos de su empresa en recursos aprovechables, 
              reduciendo costes, minimizando riesgos legales y contribuyendo a un futuro más sostenible.
            </p>
          </Card>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-smooth hover:scale-105 bg-card border-border"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
