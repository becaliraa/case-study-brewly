import { useFadeIn } from "@/hooks/useFadeIn";

export default function JourneySection() {
  const ref = useFadeIn();

  const stages = [
    {
      name: "Descoberta",
      icon: "🔍",
      actions: "Navega pelos produtos, lê avaliações",
      thoughts: "Parece interessante!",
      emotion: "neutral" as const,
    },
    {
      name: "Avaliação",
      icon: "⚖️",
      actions: "Compara itens, verifica preços",
      thoughts: "Gostei desse café",
      emotion: "positive" as const,
    },
    {
      name: "Checkout",
      icon: "🛒",
      actions: "Preenche formulários, insere pagamento",
      thoughts: "Quanto vai custar o frete?",
      emotion: "negative" as const,
      painPoints: ["Custo de frete oculto", "Formulário extenso e confuso", "Sem selos de segurança", "Sem indicador de progresso"],
    },
    {
      name: "Entrega",
      icon: "📦",
      actions: "Rastreia o pedido, recebe o produto",
      thoughts: "Quando vai chegar?",
      emotion: "neutral" as const,
    },
  ];

  const emotionStyle = {
    positive: "border-success/20 bg-success/3",
    negative: "border-destructive/20 bg-destructive/3 ring-2 ring-destructive/8",
    neutral: "border-border bg-card",
  };

  return (
    <section id="journey" className="py-24 px-5">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">04 — Jornada do Usuário</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">Mapeando a experiência completa</h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-[500px]">O checkout era o único ponto da jornada onde a emoção do usuário caía drasticamente.</p>

        {/* Emotion line */}
        <div className="hidden md:flex items-center justify-between mb-4 px-8">
          {stages.map((s, i) => (
            <div key={s.name} className="flex items-center flex-1">
              <div className={`w-3 h-3 rounded-full ${
                s.emotion === "negative" ? "bg-destructive" : s.emotion === "positive" ? "bg-success" : "bg-border"
              }`} />
              {i < stages.length - 1 && (
                <div className={`flex-1 h-[2px] ${
                  i === 1 ? "bg-gradient-to-r from-success/40 to-destructive/40" : "bg-border"
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stages.map((s) => (
            <div
              key={s.name}
              className={`rounded-2xl p-5 border transition-all ${emotionStyle[s.emotion]}`}
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <h4 className={`font-sora text-sm font-bold mb-2 ${s.emotion === "negative" ? "text-destructive" : "text-foreground"}`}>
                {s.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-1">
                <span className="font-medium text-foreground/70">Ação:</span> {s.actions}
              </p>
              <p className="text-xs text-muted-foreground italic mb-3">"{s.thoughts}"</p>
              {s.painPoints && (
                <div className="space-y-1.5 pt-2 border-t border-destructive/10">
                  {s.painPoints.map((p) => (
                    <div key={p} className="text-[10px] px-2 py-1 bg-destructive/8 text-destructive rounded-md font-medium">
                      {p}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
