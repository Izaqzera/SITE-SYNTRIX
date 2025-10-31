import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import DiagnosticModal from "@/components/DiagnosticModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Animated network nodes */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Automação Inteligente com IA
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              O Futuro da sua Empresa
            </span>
            <br />
            <span className="text-foreground">Começa Agora</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 px-4">
            Transforme processos manuais em fluxos automatizados inteligentes. 
            Reduza custos, aumente produtividade e escale seu negócio com tecnologia de elite.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              onClick={() => setModalOpen(true)}
            >
              Solicitar Diagnóstico Premium
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
            >
              Conhecer Soluções
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 animate-fade-in-up delay-500 px-4">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                -60%
              </div>
              <div className="text-sm text-muted-foreground">Redução de Custos Operacionais</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                +300%
              </div>
              <div className="text-sm text-muted-foreground">Aumento de Produtividade</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Operação Automatizada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      <DiagnosticModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
