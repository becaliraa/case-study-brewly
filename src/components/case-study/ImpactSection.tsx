import { useFadeIn } from "@/hooks/useFadeIn";
import { TrendingDown, TrendingUp, Heart } from "lucide-react";

export default function ImpactSection() {
  const ref = useFadeIn();

  const metrics = [
    {
      icon: TrendingDown,
      label: "Abandono de Carrinho",
      before: "68%",
      after: "41%",
      change: "−27 p.p.",
    },
    {
      icon: TrendingUp,
      label: "Taxa de Conversão",
      before: "14%",
      after: "28%",
      change: "+100%",
    },
    {
      icon: Heart,
      label: "Confiança do Usuário (NPS)",
      before: "32",
      after: "67",
      change: "+109%",
    },
  ];

  return (
    <section id="impact" className="py-24 px-5 bg-card">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">11 — Impacto</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">Resultados projetados</h2>
        <p className="text-sm text-muted-foreground mb-12 max-w-[520px]">Métricas estimadas com base nos benchmarks do setor e nos problemas específicos resolvidos.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background border border-border rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-medium mb-3">{m.label}</p>
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-lg text-muted-foreground/60 line-through tabular-nums">{m.before}</span>
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="font-sora text-3xl font-extrabold text-foreground tabular-nums">{m.after}</span>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-success/8 text-success text-xs font-semibold tabular-nums">{m.change}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
