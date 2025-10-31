import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator as CalcIcon, TrendingDown } from "lucide-react";

export default function Calculator() {
  const [revenue, setRevenue] = useState(100000);
  const [employees, setEmployees] = useState(10);
  const [manualHours, setManualHours] = useState([30]);
  const [modalOpen, setModalOpen] = useState(false);

  // Cálculos
  const hoursPerMonth = manualHours[0];
  const costPerHour = 50; // Custo médio por hora de trabalho
  const monthlyCost = hoursPerMonth * employees * costPerHour;
  const yearlyLoss = monthlyCost * 12;
  const errorRate = 0.15; // 15% de taxa de erro em processos manuais
  const errorCost = revenue * errorRate * 0.1; // 10% do faturamento afetado por erros
  const totalLoss = yearlyLoss + (errorCost * 12);

  const potentialSavings = totalLoss * 0.7; // 70% de economia com automação

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-destructive/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
            <TrendingDown className="w-4 h-4" />
            Calculadora de Perdas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold px-4">
            <span className="text-foreground">Calcule quanto sua empresa</span>
            <br />
            <span className="text-destructive">está desperdiçando</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Card */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <CalcIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Seus Dados</h3>
              </div>

              <div className="space-y-6">
                {/* Revenue */}
                <div className="space-y-2">
                  <Label htmlFor="revenue" className="text-foreground">
                    Faturamento Mensal (R$)
                  </Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="bg-background/50"
                  />
                </div>

                {/* Employees */}
                <div className="space-y-2">
                  <Label htmlFor="employees" className="text-foreground">
                    Número de Funcionários
                  </Label>
                  <Input
                    id="employees"
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="bg-background/50"
                  />
                </div>

                {/* Manual Hours Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-foreground">
                      Horas em Tarefas Manuais/Mês (por pessoa)
                    </Label>
                    <span className="text-2xl font-bold text-primary">
                      {manualHours[0]}h
                    </span>
                  </div>
                  <Slider
                    value={manualHours}
                    onValueChange={setManualHours}
                    min={5}
                    max={160}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5h</span>
                    <span>160h</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Results Card */}
            <Card className="p-8 bg-gradient-to-br from-destructive/10 via-card/50 to-primary/10 backdrop-blur border-destructive/30">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Suas Perdas Anuais
              </h3>

              <div className="space-y-6">
                {/* Cost breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">Custo com Tarefas Manuais</span>
                    <span className="text-lg font-semibold text-foreground">
                      R$ {yearlyLoss.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">Perdas com Erros Humanos</span>
                    <span className="text-lg font-semibold text-foreground">
                      R$ {(errorCost * 12).toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                {/* Total Loss */}
                <div className="p-6 rounded-xl bg-destructive/20 border border-destructive/30">
                  <div className="text-sm text-muted-foreground mb-2">Perda Total Anual</div>
                  <div className="text-4xl font-bold text-destructive">
                    R$ {totalLoss.toLocaleString('pt-BR')}
                  </div>
                </div>

                {/* Potential Savings */}
                <div className="p-6 rounded-xl bg-primary/20 border border-primary/30">
                  <div className="text-sm text-muted-foreground mb-2">
                    Economia Potencial com Automação
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    R$ {potentialSavings.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    (~70% de redução)
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => setModalOpen(true)}
                >
                  Quero Economizar Agora
                </Button>
              </div>
            </Card>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            * Cálculos baseados em médias de mercado. Valores reais podem variar conforme seu setor e processos.
          </p>
        </div>
      </div>

      <DiagnosticModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
