import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En producción, aquí iría la lógica de envío
    toast({
      title: "Solicitud enviada",
      description: "Nos pondremos en contacto con usted a la brevedad posible.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Solicite su Presupuesto
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dé el primer paso hacia una gestión de residuos eficiente, legal y sostenible. 
              Nuestro equipo responderá en menos de 24 horas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Teléfono</h3>
                    <p className="text-muted-foreground text-sm mb-1">+34 XXX XXX XXX</p>
                    <p className="text-xs text-muted-foreground">Lun - Vie: 8:00 - 18:00h</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-lg transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">info@vablond.es</p>
                    <p className="text-xs text-muted-foreground mt-1">Respuesta en 24h</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-lg transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Ubicación</h3>
                    <p className="text-muted-foreground text-sm">Andalucía Oriental</p>
                    <p className="text-xs text-muted-foreground mt-1">Zona de puertos y polígonos</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground">
                <h3 className="font-bold mb-3">Emergencias 24/7</h3>
                <p className="text-sm mb-4 opacity-90">
                  Para recogidas urgentes en puertos y situaciones críticas, disponemos de 
                  servicio de atención permanente.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => toast({
                    title: "Servicio de urgencias",
                    description: "Contacte al +34 XXX XXX XXX para emergencias"
                  })}
                >
                  Contacto Urgente
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card border-border shadow-elegant">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Formulario de Contacto
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan@empresa.com"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa *
                      </label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de la empresa"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <Input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+34 XXX XXX XXX"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describa el tipo de residuos que necesita gestionar, volumen estimado y frecuencia de recogida..."
                      rows={6}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Enviar Solicitud
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, acepta nuestra política de privacidad y 
                    el tratamiento de sus datos para gestionar su solicitud.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
