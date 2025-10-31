import { Bot, Cog, Link2, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Solutions() {
  const solutions = [
    {
      icon: Bot,
      title: "Automação de Atendimento",
      description: "Chatbots inteligentes com IA que atendem clientes 24/7, qualificam leads e resolvem dúvidas instantaneamente, liberando sua equipe para tarefas estratégicas.",
      features: ["Atendimento 24/7", "Qualificação automática", "Integração com CRM"],
      gradient: "from-primary to-primary/50",
    },
    {
      icon: Cog,
      title: "Automação Operacional",
      description: "Fluxos automatizados que eliminam tarefas repetitivas, processam documentos, gerenciam aprovações e mantêm sistemas sincronizados sem intervenção manual.",
      features: ["Processamento de documentos", "Aprovações automáticas", "Sincronização de dados"],
      gradient: "from-secondary to-secondary/50",
    },
    {
      icon: Link2,
      title: "Integração de Sistemas",
      description: "Conectamos todos os seus sistemas e ferramentas em um ecossistema integrado, eliminando silos de informação e garantindo fluxo contínuo de dados.",
      features: ["Integração n8n avançada", "APIs personalizadas", "Sincronização em tempo real"],
      gradient: "from-accent to-accent/50",
    },
    {
      icon: Brain,
      title: "IA para Decisões",
      description: "Inteligência artificial aplicada à análise de dados, previsões de tendências e recomendações estratégicas para decisões mais rápidas e precisas.",
      features: ["Análise preditiva", "Insights automáticos", "Recomendações estratégicas"],
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Soluções que Transformam
            </span>
            <br />
            <span className="text-foreground">seu Negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de elite para empresas que não aceitam ficar para trás.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${solution.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-muted-foreground mb-4">
            Todas as soluções trabalham juntas em perfeita harmonia
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Um ecossistema completo de automação inteligente
          </p>
        </div>
      </div>
    </section>
  );
}
