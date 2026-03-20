import { useFadeIn } from "@/hooks/useFadeIn";

export default function ResearchSection() {
  const ref1 = useFadeIn();
  const ref2 = useFadeIn();

  const funnel = [
    { stage: "Página Inicial", pct: 100, users: "10.000", drop: null },
    { stage: "Página do Produto", pct: 72, users: "7.200", drop: "-28%" },
    { stage: "Adicionou ao Carrinho", pct: 45, users: "4.500", drop: "-38%" },
    { stage: "Iniciou o Checkout", pct: 28, users: "2.800", drop: "-38%" },
    { stage: "Concluiu a Compra", pct: 14, users: "1.440", drop: "-50%" },
  ];

  const quotes = [
    { text: "Eu não sabia quanto custaria o frete até o final. Me senti enganada.", persona: "Sara, 28 — usuária recorrente" },
    { text: "O formulário era tão longo que desisti no meio. No celular é pior ainda.", persona: "Marco, 34 — primeira compra" },
    { text: "Não tinha certeza se o site era seguro o suficiente para colocar meu cartão.", persona: "Priya, 25 — abandonou 2x" },
  ];

  return (
    <section id="research" className="py-24 px-5 bg-card">
      <div className="max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">03 — Pesquisa</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">Entendendo o comportamento real</h2>
        <p className="text-sm text-muted-foreground mb-12 max-w-[560px]">Combinamos dados quantitativos (analytics) com pesquisa qualitativa (entrevistas) para mapear onde e por quê os usuários desistiam.</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Quantitativa */}
          <div ref={ref1} className="section-fade-in">
            <h3 className="font-sora text-base font-semibold mb-5 text-foreground flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-xs">📊</span>
              Análise Quantitativa
            </h3>

            <div className="space-y-2.5">
              {funnel.map((f, i) => (
                <div key={f.stage}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className={`font-medium ${i >= 3 ? "text-destructive" : "text-foreground"}`}>{f.stage}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground tabular-nums">{f.users}</span>
                      {f.drop && <span className={`font-semibold tabular-nums ${i >= 3 ? "text-destructive" : "text-muted-foreground"}`}>{f.drop}</span>}
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        i >= 3 ? "bg-destructive/60" : "bg-primary/50"
                      }`}
                      style={{ width: `${f.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 px-4 py-3 bg-destructive/5 border border-destructive/10 rounded-xl">
              <p className="text-xs text-destructive font-medium">Maior queda: Carrinho → Checkout (−38%) — ponto crítico de fricção</p>
            </div>
          </div>

          {/* Qualitativa */}
          <div ref={ref2} className="section-fade-in">
            <h3 className="font-sora text-base font-semibold mb-5 text-foreground flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-xs">💬</span>
              Pesquisa Qualitativa
            </h3>

            <div className="space-y-4">
              {quotes.map((q) => (
                <div key={q.persona} className="bg-background border border-border rounded-xl p-5 relative">
                  <div className="absolute -top-2 left-4 w-4 h-4 rotate-45 bg-background border-l border-t border-border" />
                  <p className="text-sm text-foreground leading-relaxed mb-3 italic">"{q.text}"</p>
                  <p className="text-[11px] text-muted-foreground font-medium">— {q.persona}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
