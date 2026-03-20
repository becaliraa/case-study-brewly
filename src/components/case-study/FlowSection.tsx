import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";

export default function FlowSection() {
  const ref = useFadeIn();

  const steps = [
    { label: "Produto", icon: "📦", desc: "Calculadora de frete integrada" },
    { label: "Carrinho", icon: "🛒", desc: "Total transparente + prazo" },
    { label: "Envio", icon: "🚚", desc: "Etapa 1 — dados simplificados" },
    { label: "Pagamento", icon: "💳", desc: "Etapa 2 — com selos SSL" },
    { label: "Revisão", icon: "📋", desc: "Etapa 3 — resumo completo" },
    { label: "Confirmação", icon: "✅", desc: "Feedback claro do pedido" },
  ];

  return (
    <section id="flow" className="py-24 px-5">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">08 — Novo Fluxo</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">Fluxo redesenhado</h2>
        <p className="text-sm text-muted-foreground mb-12 max-w-[520px]">Cada etapa foi desenhada para reduzir fricção e aumentar a confiança progressivamente.</p>

        <div className="flex flex-wrap items-start justify-center gap-2 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center w-24 md:w-28">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-2.5 transition-all ${
                  i >= 2 && i <= 4
                    ? "bg-primary/10 border-2 border-primary/25 shadow-sm shadow-primary/5"
                    : "bg-card border border-border"
                }`}>
                  {step.icon}
                </div>
                <span className="text-xs font-semibold text-foreground mb-0.5">{step.label}</span>
                <span className="text-[10px] text-muted-foreground text-center leading-tight">{step.desc}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-border mx-1 shrink-0 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/5 border border-primary/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs text-primary font-medium">Checkout dividido em 3 etapas claras e progressivas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
