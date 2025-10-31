import { AlertTriangle, Clock, DollarSign, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Problem() {
  const problems = [
    {
      icon: DollarSign,
      title: "Desperdício Financeiro",
      description: "Empresas perdem em média R$ 15.000/mês com processos manuais e retrabalho desnecessário.",
      color: "text-secondary",
    },
    {
      icon: Clock,
      title: "Tempo Desperdiçado",
      description: "Até 40% do tempo da equipe é gasto em tarefas repetitivas que poderiam ser automatizadas.",
      color: "text-accent",
    },
    {
      icon: TrendingDown,
      title: "Perda de Competitividade",
      description: "Concorrentes que automatizam crescem 3x mais rápido e conquistam seu mercado.",
      color: "text-primary",
    },
    {
      icon: AlertTriangle,
      title: "Erros Humanos",
      description: "Processos manuais geram até 30% mais erros, comprometendo qualidade e reputação.",
      color: "text-destructive",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-destructive">Quanto sua empresa</span>
            <br />
            <span className="text-foreground">está perdendo hoje?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada dia sem automação representa perdas reais e mensuráveis no seu faturamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-background/50 ${problem.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-destructive/10 via-primary/10 to-secondary/10 border border-destructive/20">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Não deixe para amanhã o que está custando caro hoje.
            </p>
            <p className="text-lg text-muted-foreground">
              Descubra quanto você pode economizar com automação inteligente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
