import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";
import DiagnosticModal from "@/components/DiagnosticModal";

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main message */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Garanta sua Posição
              </span>
              <br />
              <span className="text-foreground">no Futuro do seu Mercado</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enquanto você lê isso, seus concorrentes estão automatizando. 
              A pergunta não é "se" você vai automatizar, mas "quando" — e se será antes ou depois deles.
            </p>
          </div>

          {/* Value proposition */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">Gratuito</div>
              <div className="text-sm text-muted-foreground">Diagnóstico Premium sem compromisso</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-secondary mb-2">60 min</div>
              <div className="text-sm text-muted-foreground">Consultoria estratégica personalizada</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-accent mb-2">ROI Claro</div>
              <div className="text-sm text-muted-foreground">Projeção de economia e ganhos</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all hover:scale-105 shadow-2xl shadow-primary/30"
                onClick={() => setModalOpen(true)}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Diagnóstico Premium
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MessageSquare className="w-4 h-4" />
              <span>Ou fale conosco via WhatsApp para dúvidas rápidas</span>
            </div>
          </div>

          {/* Trust elements */}
          <div className="pt-12 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="text-sm font-semibold">Sem Compromisso</div>
              <div className="text-sm font-semibold">100% Confidencial</div>
              <div className="text-sm font-semibold">Consultoria Exclusiva</div>
              <div className="text-sm font-semibold">Resultados Garantidos</div>
            </div>
          </div>

          {/* Final statement */}
          <div className="pt-8">
            <p className="text-lg text-muted-foreground italic">
              "O melhor momento para automatizar foi ontem. O segundo melhor momento é agora."
            </p>
          </div>
        </div>
      </div>

      <DiagnosticModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
