import { Workflow, Brain, Shield, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  const expertise = [
    {
      icon: Workflow,
      title: "Integrações n8n",
      description: "Especialistas certificados em criar fluxos complexos que conectam dezenas de sistemas em automações perfeitas.",
    },
    {
      icon: Brain,
      title: "IA Aplicada ao Negócio",
      description: "Implementamos inteligência artificial que resolve problemas reais, não apenas tecnologia pela tecnologia.",
    },
    {
      icon: Shield,
      title: "Segurança e Escalabilidade",
      description: "Arquiteturas robustas que crescem com seu negócio, mantendo dados protegidos e processos confiáveis.",
    },
    {
      icon: Rocket,
      title: "Processos Empresariais",
      description: "Profundo conhecimento em operações empresariais para automatizar o que realmente importa.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">
                <span className="text-foreground">Consultoria Boutique</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  em Tecnologia
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Não somos apenas desenvolvedores. Somos estrategistas de automação que entendem profundamente 
                como empresas de alto faturamento operam e onde a tecnologia pode gerar impacto real.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Na <span className="font-bold text-primary">Syntrix Systems</span>, combinamos expertise técnica 
                de ponta com visão de negócios para criar soluções que não apenas funcionam, mas transformam 
                completamente a forma como sua empresa opera.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada projeto é tratado como único. Mergulhamos nos seus processos, identificamos gargalos 
                invisíveis e desenhamos automações que se integram perfeitamente ao seu ecossistema tecnológico.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Automações Entregues</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right side - Expertise cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="space-y-4">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-foreground mb-2">
            Tecnologia de Elite para Empresas de Elite
          </p>
          <p className="text-lg text-muted-foreground">
            Porque automação mediana gera resultados medianos.
          </p>
        </div>
      </div>
    </section>
  );
}
