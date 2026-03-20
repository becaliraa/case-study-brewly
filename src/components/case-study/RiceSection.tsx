import { useFadeIn } from "@/hooks/useFadeIn";

export default function RiceSection() {
  const ref = useFadeIn();

  const items = [
    { solution: "Indicador de progresso", reach: 7, impact: 7, confidence: 9, effort: 1, score: 44.1 },
    { solution: "Selos de confiança e segurança", reach: 6, impact: 7, confidence: 7, effort: 1, score: 29.4 },
    { solution: "Reduzir campos do formulário", reach: 8, impact: 8, confidence: 9, effort: 2, score: 28.8 },
    { solution: "Preview do custo de frete", reach: 9, impact: 9, confidence: 8, effort: 3, score: 24.0 },
    { solution: "Otimização mobile completa", reach: 9, impact: 8, confidence: 8, effort: 4, score: 14.4 },
  ];

  return (
    <section id="rice" className="py-24 px-5">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">06 — Priorização</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">Framework RICE para decisão</h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-[520px]">Priorizamos as soluções com base em alcance, impacto, confiança e esforço para maximizar o resultado.</p>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/40">
                <th className="text-left py-3.5 px-5 font-semibold text-foreground text-[13px]">Solução</th>
                <th className="text-center py-3.5 px-3 font-semibold text-foreground text-[13px]">R</th>
                <th className="text-center py-3.5 px-3 font-semibold text-foreground text-[13px]">I</th>
                <th className="text-center py-3.5 px-3 font-semibold text-foreground text-[13px]">C</th>
                <th className="text-center py-3.5 px-3 font-semibold text-foreground text-[13px]">E</th>
                <th className="text-center py-3.5 px-5 font-semibold text-primary text-[13px]">Score</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={item.solution} className={`border-b border-border/50 transition-colors ${i === 0 ? "bg-primary/4" : "hover:bg-secondary/30"}`}>
                  <td className="py-4 px-5 font-medium text-foreground text-[13px]">
                    <div className="flex items-center gap-2">
                      {i === 0 && <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[9px] font-bold">1</span>}
                      {item.solution}
                    </div>
                  </td>
                  <td className="text-center py-4 px-3 text-muted-foreground tabular-nums">{item.reach}</td>
                  <td className="text-center py-4 px-3 text-muted-foreground tabular-nums">{item.impact}</td>
                  <td className="text-center py-4 px-3 text-muted-foreground tabular-nums">{item.confidence}0%</td>
                  <td className="text-center py-4 px-3 text-muted-foreground tabular-nums">{item.effort}</td>
                  <td className="text-center py-4 px-5 font-bold text-primary tabular-nums">{item.score.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
