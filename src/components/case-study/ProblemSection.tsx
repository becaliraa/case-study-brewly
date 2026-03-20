import { useFadeIn } from "@/hooks/useFadeIn";
import { X } from "lucide-react";

export default function ProblemSection() {
  const ref = useFadeIn();

  const assumptions = [
    { text: "O frete era muito caro", detail: "Os preços estavam na média do mercado" },
    { text: "Os usuários estavam apenas navegando", detail: "Dados mostravam alta intenção de compra" },
    { text: "As opções de pagamento eram limitadas", detail: "Pix, cartão e boleto já estavam disponíveis" },
  ];

  return (
    <section id="problem" className="py-24 px-5">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">02 — Problema</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance leading-[1.15]">O que estava impedindo a conversão?</h2>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-10 shadow-sm">
          <p className="text-lg text-foreground font-medium leading-relaxed text-pretty">
            "Os usuários demonstravam alta intenção de compra — adicionavam itens ao carrinho, selecionavam quantidades — mas <span className="text-destructive font-bold">68% abandonavam durante o checkout</span>, especialmente em dispositivos móveis."
          </p>
        </div>

        <h3 className="font-sora text-lg font-semibold mb-5 text-foreground">Hipóteses iniciais descartadas</h3>
        <div className="space-y-3">
          {assumptions.map((a) => (
            <div key={a.text} className="flex items-start gap-3 px-5 py-4 bg-destructive/4 border border-destructive/10 rounded-xl">
              <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3 h-3 text-destructive" />
              </div>
              <div>
                <span className="text-sm text-foreground font-medium">{a.text}</span>
                <p className="text-xs text-muted-foreground mt-0.5">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-[640px]">
          A pesquisa revelou que os verdadeiros problemas estavam em três pilares: <strong className="text-foreground">transparência, esforço e confiança</strong> — não no preço em si.
        </p>
      </div>
    </section>
  );
}
