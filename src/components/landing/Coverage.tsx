import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

// Placeholder hasta que se añada la imagen real en src/assets/coverage-map.jpg
const coverageMap = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80";

export const Coverage = () => {
  const coverageAreas = [
    "Granada y área metropolitana",
    "Málaga y Costa del Sol",
    "Almería y zona de Poniente",
    "Jaén (zona sur)",
    "Puertos de Motril, Málaga y Almería",
    "Polígonos industriales de Andalucía Oriental"
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cobertura Geográfica
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Operamos principalmente en <strong>Andalucía Oriental</strong> y zona de puertos, 
              con capacidad de expansión según las necesidades de nuestros clientes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden shadow-elegant border-border">
                <img 
                  src={coverageMap} 
                  alt="Mapa de cobertura en Andalucía Oriental"
                  className="w-full h-auto"
                />
              </Card>
            </div>

            {/* Coverage Details */}
            <div className="order-1 lg:order-2 space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Zonas de Actuación
                    </h3>
                    <ul className="space-y-2">
                      {coverageAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2"></div>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Disponibilidad
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Servicio disponible 24/7 para emergencias y recogidas urgentes en 
                      puertos y sectores críticos.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Horario estándar: Lunes a Viernes, 8:00 - 18:00h
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      ¿Fuera de Nuestra Zona?
                    </h3>
                    <p className="text-muted-foreground">
                      Estudiamos cada caso de forma personalizada. Si su empresa opera fuera 
                      de nuestras zonas habituales, contacte con nosotros para valorar 
                      opciones de colaboración y servicio.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
