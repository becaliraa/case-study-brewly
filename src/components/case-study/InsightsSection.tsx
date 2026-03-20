import { useFadeIn } from "@/hooks/useFadeIn";
import { Eye, Brain, ShieldAlert } from "lucide-react";

export default function InsightsSection() {
  const ref = useFadeIn();

  const insights = [
    {
      icon: Eye,
      number: "01",
      title: "Falta de Transparência no Frete",
      description: "Os usuários só descobriam o custo do frete na última etapa do checkout. Essa surpresa gerava frustração e quebra de confiança — o principal gatilho de abandono.",
      stat: "72% citaram surpresas com frete",
    },
    {
      icon: Brain,
      number: "02",
      title: "Alta Carga Cognitiva nos Formulários",
      description: "Um checkout de página única com 12+ campos sobrecarregava os usuários, especialmente no mobile. Sem indicador de progresso, o processo parecia interminável.",
      stat: "4.2 min tempo médio no formulário",
    },
    {
      icon: ShieldAlert,
      number: "03",
      title: "Baixa Percepção de Segurança",
      description: "Ausência de selos SSL, garantias de devolução e prova social deixava os usuários inseguros para compartilhar dados de pagamento.",
      stat: "58% hesitaram no campo do cartão",
    },
  ];

  return (
    <section id="insights" className="py-24 px-5 bg-card">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">05 — Insights</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">Três barreiras invisíveis</h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-[520px]">A pesquisa convergiu para três problemas centrais que se reforçavam mutuamente.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {insights.map((insight) => (
            <div key={insight.title} className="rounded-2xl p-6 bg-background border border-border group hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <insight.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">{insight.number}</span>
              </div>
              <h3 className="font-sora text-[15px] font-bold mb-2 text-foreground">{insight.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{insight.description}</p>
              <div className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/10">
                <span className="text-[11px] font-medium text-primary">{insight.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
