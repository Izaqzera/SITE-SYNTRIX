import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

interface DiagnosticModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DiagnosticModal({ open, onOpenChange }: DiagnosticModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "",
    employees: "",
    mainChallenge: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.forms.submitDiagnostic.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      toast.success(data.message);
      setTimeout(() => {
        onOpenChange(false);
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          revenue: "",
          employees: "",
          mainChallenge: "",
        });
      }, 3000);
    },
    onError: (error) => {
      toast.error(error.message || "Erro ao enviar formulário. Tente novamente.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Solicitação Enviada!</h3>
              <p className="text-muted-foreground">
                Recebemos seu pedido de diagnóstico premium. Nossa equipe entrará em contato em breve para agendar sua consultoria.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Diagnóstico Premium Gratuito
          </DialogTitle>
          <DialogDescription className="text-base">
            Preencha o formulário abaixo e nossa equipe entrará em contato para uma análise personalizada do seu negócio.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Dados Pessoais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Dados de Contato</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Nome da empresa"
                  required
                />
              </div>
            </div>
          </div>

          {/* Dados da Empresa */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Sobre sua Empresa</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="revenue">Faturamento Mensal *</Label>
                <Select value={formData.revenue} onValueChange={(value) => handleChange("revenue", value)}>
                  <SelectTrigger id="revenue">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50k-100k">R$ 50k - R$ 100k</SelectItem>
                    <SelectItem value="100k-250k">R$ 100k - R$ 250k</SelectItem>
                    <SelectItem value="250k-500k">R$ 250k - R$ 500k</SelectItem>
                    <SelectItem value="500k-1m">R$ 500k - R$ 1M</SelectItem>
                    <SelectItem value="1m+">Acima de R$ 1M</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="employees">Número de Funcionários *</Label>
                <Select value={formData.employees} onValueChange={(value) => handleChange("employees", value)}>
                  <SelectTrigger id="employees">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1 - 10</SelectItem>
                    <SelectItem value="11-50">11 - 50</SelectItem>
                    <SelectItem value="51-100">51 - 100</SelectItem>
                    <SelectItem value="101-500">101 - 500</SelectItem>
                    <SelectItem value="500+">Acima de 500</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mainChallenge">Principal Desafio/Objetivo *</Label>
              <Textarea
                id="mainChallenge"
                value={formData.mainChallenge}
                onChange={(e) => handleChange("mainChallenge", e.target.value)}
                placeholder="Descreva brevemente qual o principal desafio que você gostaria de resolver com automação..."
                rows={4}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={submitMutation.isPending}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              disabled={submitMutation.isPending}
            >
              {submitMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Solicitar Diagnóstico"
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            * Campos obrigatórios. Seus dados estão seguros e não serão compartilhados.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
