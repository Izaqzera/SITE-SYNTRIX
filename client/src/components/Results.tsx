import { TrendingUp, Zap, Target, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Results() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "85%",
      label: "Redução de Tempo em Processos",
      description: "Tarefas que levavam horas agora são concluídas em minutos",
    },
    {
      icon: Zap,
      value: "3x",
      label: "Aumento de Velocidade Operacional",
      description: "Equipes processam 3x mais demandas no mesmo período",
    },
    {
      icon: Target,
      value: "99.9%",
      label: "Precisão em Processos Automatizados",
      description: "Eliminação quase total de erros humanos",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Rastreabilidade e Conformidade",
      description: "Todos os processos auditáveis e em conformidade",
    },
  ];

  const caseStudies = [
    {
      industry: "E-commerce",
      challenge: "Processamento manual de 500+ pedidos/dia",
      result: "Automação completa com redução de 70% no tempo de processamento",
      impact: "R$ 45.000/mês economizados",
    },
    {
      industry: "Serviços Financeiros",
      challenge: "Análise manual de documentos e aprovações",
      result: "IA para classificação e aprovação automática de 90% dos casos",
      impact: "Redução de 15 dias para 2 horas no processo",
    },
    {
      industry: "Saúde",
      challenge: "Agendamentos e confirmações manuais",
      result: "Sistema inteligente de agendamento e lembretes automáticos",
      impact: "95% de redução em no-shows",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-foreground">Resultados que</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Falam por Si
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Números reais de empresas que escolheram automatizar e escalar.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Casos de <span className="text-primary">Sucesso</span>
          </h3>
          
          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm font-semibold text-secondary mb-2">
                      {study.industry}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Desafio:</span> {study.challenge}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Solução:</span> {study.result}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-accent">
                      {study.impact}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Estes resultados podem ser seus.
            </p>
            <p className="text-lg text-muted-foreground">
              A única diferença entre você e eles é a decisão de automatizar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
