import { useFadeIn } from "@/hooks/useFadeIn";
import { Eye, Zap, Shield } from "lucide-react";

export default function LearningsSection() {
  const ref = useFadeIn();

  const learnings = [
    { icon: Eye, title: "Transparência", desc: "Custos ocultos no final do processo geram desconfiança. Mostrar o frete desde o início transforma uma barreira em expectativa gerenciável." },
    { icon: Zap, title: "Esforço", desc: "Cada campo extra é um ponto de desistência. Dividir o checkout em etapas curtas com indicador de progresso muda a percepção de complexidade." },
    { icon: Shield, title: "Confiança", desc: "Selos de segurança não são decorativos — são pré-requisitos. Os usuários precisam sentir segurança antes de compartilhar dados sensíveis." },
  ];

  return (
    <section id="learnings" className="py-24 px-5">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">12 — Aprendizados</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">Nunca foi só sobre o preço</h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-[560px] text-pretty">
          A suposição inicial de que o frete caro gerava o abandono era superficial. As barreiras reais eram estruturais — e precisavam de design para serem resolvidas.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {learnings.map((l) => (
            <div key={l.title} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/15 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
                <l.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-sora text-[15px] font-bold mb-2 text-foreground">{l.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center border-t border-border pt-12">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground text-sm font-bold font-sora">B</span>
          </div>
          <p className="font-sora text-lg font-semibold text-foreground mb-2">Redesign do Checkout Brewly</p>
          <p className="text-sm text-muted-foreground max-w-[400px] mx-auto">
            Um estudo de caso sobre como pesquisa de UX e design orientado por dados reduziram o abandono de carrinho.
          </p>
          <p className="text-xs text-muted-foreground/50 mt-8 font-mono">Case Study • 2026</p>
        </div>
      </div>
    </section>
  );
}
