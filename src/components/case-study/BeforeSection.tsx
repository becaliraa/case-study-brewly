import { useFadeIn } from "@/hooks/useFadeIn";

export default function BeforeSection() {
  const ref = useFadeIn();

  return (
    <section id="before" className="py-24 px-5 bg-card">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">07 — Antes</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">A experiência problemática</h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-[520px]">Pontos de fricção identificados nas três telas principais do fluxo original.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <MockupCard title="Página do Produto" annotations={["Sem informação de frete", "Sem previsão de entrega", "Preço isolado sem contexto"]}>
            <div className="space-y-3">
              <div className="h-28 bg-secondary rounded-lg" />
              <div className="h-4 bg-secondary rounded w-3/4" />
              <div className="h-3 bg-secondary rounded w-1/2" />
              <div className="flex justify-between items-center">
                <span className="font-sora font-bold text-foreground text-sm tabular-nums">R$ 124,99</span>
                <div className="h-8 w-28 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground text-xs font-medium">Adicionar</span>
                </div>
              </div>
            </div>
          </MockupCard>

          <MockupCard title="Carrinho" annotations={["Sem detalhamento do total", "Sem estimativa de entrega"]}>
            <div className="space-y-3">
              {[1, 2].map((n) => (
                <div key={n} className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-secondary rounded" />
                  <div className="flex-1">
                    <div className="h-3 bg-secondary rounded w-3/4 mb-1" />
                    <div className="h-3 bg-secondary rounded w-1/4" />
                  </div>
                </div>
              ))}
              <div className="border-t border-border pt-2 flex justify-between text-xs">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground font-medium tabular-nums">R$ 249,98</span>
              </div>
              <div className="h-8 bg-accent rounded-lg" />
            </div>
          </MockupCard>

          <MockupCard title="Checkout (página única)" annotations={["12+ campos em uma só tela", "Sem barra de progresso", "Sem sinais de confiança"]}>
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-7 bg-secondary rounded border border-border" />
              ))}
              <div className="h-7 bg-secondary rounded border border-border" />
              <div className="h-8 bg-accent rounded-lg mt-1" />
            </div>
          </MockupCard>
        </div>
      </div>
    </section>
  );
}

function MockupCard({ title, annotations, children }: { title: string; annotations: string[]; children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="bg-accent rounded-[1.5rem] p-2.5 shadow-lg">
        <div className="bg-background rounded-[1rem] overflow-hidden">
          <div className="bg-secondary/70 px-4 py-2 border-b border-border">
            <span className="text-[11px] font-semibold text-foreground">{title}</span>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {annotations.map((a) => (
          <span key={a} className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 bg-destructive/8 text-destructive rounded-full font-medium">
            ✕ {a}
          </span>
        ))}
      </div>
    </div>
  );
}
