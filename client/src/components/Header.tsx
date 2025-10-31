import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DiagnosticModal from "@/components/DiagnosticModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navItems = [
    { label: "Soluções", href: "#solutions" },
    { label: "Resultados", href: "#results" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/syntrix-logo.png" 
              alt="Syntrix Systems" 
              className="h-8 sm:h-10 w-auto"
            />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">
              Syntrix Systems
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button 
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              onClick={() => setModalOpen(true)}
            >
              Solicitar Diagnóstico
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border/50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              size="sm"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              onClick={() => setModalOpen(true)}
            >
              Solicitar Diagnóstico
            </Button>
          </div>
        )}
      </div>

      <DiagnosticModal open={modalOpen} onOpenChange={setModalOpen} />
    </header>
  );
}
