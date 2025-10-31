import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const submitMutation = trpc.forms.submitContact.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Erro ao enviar mensagem. Tente novamente.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold px-4">
            <span className="text-foreground">Entre em</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Contato Conosco
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Tem dúvidas ou quer saber mais sobre nossas soluções? Envie uma mensagem e responderemos em breve.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <a 
                        href="mailto:contato@syntrix.com.br" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contato@syntrix.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">WhatsApp</div>
                      <a 
                        href="https://wa.me/5511999999999" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Localização</div>
                      <p className="text-muted-foreground">
                        São Paulo, SP - Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p className="text-sm pt-2 text-primary font-medium">
                    Respostas em até 24 horas úteis
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envie sua Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nome *</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Telefone</Label>
                  <Input
                    id="contact-phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Assunto *</Label>
                  <Input
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Mensagem *</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Descreva sua necessidade ou dúvida..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
