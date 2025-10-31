import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Rotas de formulários
  forms: router({
    // Formulário de Diagnóstico Premium
    submitDiagnostic: publicProcedure
      .input(z.object({
        name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
        email: z.string().email("Email inválido"),
        phone: z.string().min(10, "Telefone inválido"),
        company: z.string().min(2, "Nome da empresa é obrigatório"),
        revenue: z.string(),
        employees: z.string(),
        mainChallenge: z.string().min(10, "Descreva seu principal desafio"),
      }))
      .mutation(async ({ input }) => {
        // Enviar notificação para o owner
        const emailContent = `
**Novo Pedido de Diagnóstico Premium**

**Dados do Lead:**
- Nome: ${input.name}
- Email: ${input.email}
- Telefone: ${input.phone}
- Empresa: ${input.company}
- Faturamento Mensal: ${input.revenue}
- Número de Funcionários: ${input.employees}

**Principal Desafio:**
${input.mainChallenge}

---
Entre em contato o mais rápido possível!
        `;

        const success = await notifyOwner({
          title: `🎯 Novo Lead: ${input.name} - ${input.company}`,
          content: emailContent,
        });

        if (!success) {
          throw new Error("Falha ao enviar notificação. Tente novamente.");
        }

        return {
          success: true,
          message: "Diagnóstico solicitado com sucesso! Entraremos em contato em breve.",
        };
      }),

    // Formulário de Contato
    submitContact: publicProcedure
      .input(z.object({
        name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
        email: z.string().email("Email inválido"),
        phone: z.string().optional(),
        subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
        message: z.string().min(20, "Mensagem deve ter pelo menos 20 caracteres"),
      }))
      .mutation(async ({ input }) => {
        // Enviar notificação para o owner
        const emailContent = `
**Nova Mensagem de Contato**

**Dados:**
- Nome: ${input.name}
- Email: ${input.email}
- Telefone: ${input.phone || "Não informado"}
- Assunto: ${input.subject}

**Mensagem:**
${input.message}
        `;

        const success = await notifyOwner({
          title: `📧 Contato: ${input.name} - ${input.subject}`,
          content: emailContent,
        });

        if (!success) {
          throw new Error("Falha ao enviar mensagem. Tente novamente.");
        }

        return {
          success: true,
          message: "Mensagem enviada com sucesso! Responderemos em breve.",
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
