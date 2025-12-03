import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-8 h-8 text-brand-green-light" />
                <span className="text-2xl font-bold">Vablond</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Gestión eficiente, futuro sostenible. Soluciones integrales de gestión de 
                residuos para empresas comprometidas con el cumplimiento y la sostenibilidad.
              </p>
              <p className="text-sm text-background/60">
                © 2025 Vablond S.L. Todos los derechos reservados.
              </p>
            </div>

            {/* Enlaces */}
            <div>
              <h3 className="font-bold mb-4">Servicios</h3>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="#servicios" className="hover:text-brand-green-light transition-colors">Transporte de residuos</a></li>
                <li><a href="#servicios" className="hover:text-brand-green-light transition-colors">Contenedores</a></li>
                <li><a href="#servicios" className="hover:text-brand-green-light transition-colors">Valorización</a></li>
                <li><a href="#servicios" className="hover:text-brand-green-light transition-colors">Gestión CAE</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="#" className="hover:text-brand-green-light transition-colors">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-brand-green-light transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-brand-green-light transition-colors">Política de Cookies</a></li>
                <li><a href="#" className="hover:text-brand-green-light transition-colors">Certificaciones</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
            <p>
              Vablond S.L. - NIF: BXXXXXXXX - Gestor Autorizado de Residuos - 
              Registro SANDACH - Transportista Certificado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
