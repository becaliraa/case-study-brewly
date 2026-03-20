import { useFadeIn } from "@/hooks/useFadeIn";

export default function ContextSection() {
  const ref = useFadeIn();

  return (
    <section id="context" className="py-24 px-5 bg-card">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">01 — Contexto</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-10 text-foreground text-balance leading-[1.15]">A Brewly enfrentava um problema crítico de conversão</h2>

        <div className="grid md:grid-cols-[1fr_300px] gap-10 items-start">
          <div className="space-y-5 text-muted-foreground leading-[1.7] text-[15px]">
            <p>
              A <strong className="text-foreground font-semibold">Brewly</strong> é uma plataforma de e-commerce mobile-first especializada em cafés artesanais e equipamentos de preparo. Com tráfego crescente e alto engajamento nos produtos, o negócio parecia saudável — até olharmos mais de perto para o funil.
            </p>
            <p>
              Os usuários navegavam, comparavam e adicionavam produtos ao carrinho com frequência. Mas no momento mais crítico da jornada — o checkout — uma parcela alarmante simplesmente abandonava. O impacto financeiro era direto: <strong className="text-foreground font-semibold">receita perdida a cada sessão</strong>.
            </p>
          </div>

          <div className="bg-background border border-border rounded-2xl p-7 text-center shadow-sm">
            <div className="font-sora text-6xl font-extrabold text-destructive mb-1 tabular-nums">68%</div>
            <p className="text-sm text-muted-foreground font-medium mb-4">Taxa de Abandono no Checkout</p>
            <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
              <div className="h-full bg-destructive rounded-full transition-all duration-1000" style={{ width: "68%" }} />
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed">
              Concentrado na etapa de checkout, não nas páginas de produto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
