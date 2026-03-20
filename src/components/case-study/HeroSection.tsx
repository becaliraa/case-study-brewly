import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const ref = useFadeIn();

  return (
    <section id="hero" className="pt-24 pb-28 px-5">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <div className="grid md:grid-cols-[1fr_380px] gap-12 items-center">
          {/* Left — Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Estudo de Caso UX — 2026
            </div>

            <h1 className="font-sora text-4xl md:text-[3.25rem] font-800 leading-[1.08] mb-5 text-foreground text-balance">
              Reduzindo o Abandono
              <br />
              de Carrinho em <span className="text-primary">68%→41%</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-[520px] leading-relaxed mb-8 text-pretty">
              Como a pesquisa de UX revelou que fricção, carga cognitiva e falta de confiança — não o preço do frete — eram os verdadeiros causadores do abandono no checkout mobile da Brewly.
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["UX Research", "UI Design", "E-commerce", "Mobile-first"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-secondary border border-border font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Mockup */}
          <div className="relative">
            {/* Phone frame */}
            <div className="mx-auto w-[280px] md:w-full max-w-[320px]">
              <div className="bg-accent rounded-[2rem] p-3 shadow-2xl shadow-primary/10">
                <div className="bg-card rounded-[1.4rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="px-5 pt-3 pb-2 flex items-center justify-between">
                    <span className="text-[10px] font-medium text-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-2 rounded-sm bg-foreground/20" />
                      <div className="w-2 h-2 rounded-full bg-foreground/20" />
                    </div>
                  </div>
                  {/* Stepper */}
                  <div className="px-4 py-3">
                    <div className="flex items-center gap-1.5 mb-4">
                      {["Envio", "Pagamento", "Revisão"].map((step, i) => (
                        <div key={step} className="flex items-center gap-1 flex-1">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${
                            i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                          }`}>{i + 1}</div>
                          <span className={`text-[9px] font-medium ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}>{step}</span>
                          {i < 2 && <ArrowRight className="w-2.5 h-2.5 text-border ml-auto" />}
                        </div>
                      ))}
                    </div>
                    {/* Form preview */}
                    <div className="space-y-2.5">
                      <div><div className="text-[8px] text-muted-foreground mb-0.5 font-medium">Nome completo</div><div className="h-7 rounded-md bg-secondary border border-border" /></div>
                      <div><div className="text-[8px] text-muted-foreground mb-0.5 font-medium">Endereço</div><div className="h-7 rounded-md bg-secondary border border-border" /></div>
                      <div className="flex gap-2">
                        <div className="flex-1"><div className="text-[8px] text-muted-foreground mb-0.5 font-medium">Cidade</div><div className="h-7 rounded-md bg-secondary border border-border" /></div>
                        <div className="w-20"><div className="text-[8px] text-muted-foreground mb-0.5 font-medium">CEP</div><div className="h-7 rounded-md bg-secondary border border-border" /></div>
                      </div>
                      <div className="h-9 bg-primary rounded-lg flex items-center justify-center mt-1">
                        <span className="text-primary-foreground text-[10px] font-semibold">Continuar para Pagamento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
