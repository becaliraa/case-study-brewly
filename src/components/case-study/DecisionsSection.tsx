import { useFadeIn } from "@/hooks/useFadeIn";
import { Eye, Layers, ShieldCheck } from "lucide-react";

export default function DecisionsSection() {
  const ref = useFadeIn();

  const decisions = [
    {
      icon: Eye,
      title: "Visibilidade antecipada do frete",
      before: "Custo revelado apenas no checkout final",
      after: "Calculadora de frete na página do produto e total transparente no carrinho",
      why: "Elimina a surpresa nº 1 que causava abandono. Decisões informadas geram mais confiança.",
    },
    {
      icon: Layers,
      title: "Checkout progressivo em 3 etapas",
      before: "Formulário único com 12+ campos",
      after: "3 etapas focadas: Envio → Pagamento → Revisão com indicador de progresso",
      why: "Reduz a carga cognitiva. Cada etapa é curta e clara, tornando o processo gerenciável.",
    },
    {
      icon: ShieldCheck,
      title: "Sinais de confiança estratégicos",
      before: "Nenhum selo ou garantia visível",
      after: "SSL, garantia de devolução e criptografia em pontos-chave do fluxo",
      why: "Confiança é pré-requisito para conversão. Sem ela, os usuários hesitam no pagamento.",
    },
  ];

  return (
    <section id="decisions" className="py-24 px-5">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">10 — Decisões de Design</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">Racional por trás de cada mudança</h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-[520px]">Cada decisão foi fundamentada nos insights da pesquisa, não em opinião.</p>

        <div className="space-y-5">
          {decisions.map((d) => (
            <div key={d.title} className="rounded-2xl bg-card border border-border p-6 md:p-7">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <d.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-sora text-base font-bold text-foreground pt-1.5">{d.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="px-4 py-3 rounded-xl bg-destructive/4 border border-destructive/10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-destructive block mb-1">Antes</span>
                  <p className="text-sm text-foreground/80">{d.before}</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-success/4 border border-success/10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-success block mb-1">Depois</span>
                  <p className="text-sm text-foreground/80">{d.after}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-medium">Por quê:</strong> {d.why}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
