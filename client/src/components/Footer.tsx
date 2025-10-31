import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/syntrix-logo.png" 
                alt="Syntrix Systems" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Syntrix Systems
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automação inteligente com IA para empresas que não aceitam ficar para trás.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#results" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contato@syntrix.com.br" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@syntrix.com.br
              </a>
              <div className="flex gap-4 pt-2">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Syntrix Systems. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
