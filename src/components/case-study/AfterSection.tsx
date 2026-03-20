import { useFadeIn } from "@/hooks/useFadeIn";
import { Truck, ShieldCheck, ArrowRight, Check } from "lucide-react";

export default function AfterSection() {
  const ref = useFadeIn();

  return (
    <section id="after" className="py-24 px-5 bg-card">
      <div ref={ref} className="section-fade-in max-w-[960px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">09 — Depois</p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance leading-[1.15]">A experiência redesenhada</h2>
        <p className="text-sm text-muted-foreground mb-12 max-w-[520px]">Cada tela foi reconstruída com foco em transparência, simplicidade e confiança.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Produto com frete */}
          <PhoneFrame title="Produto — com calculadora de frete">
            <div className="space-y-3">
              <div className="h-24 bg-secondary rounded-lg" />
              <div className="h-4 bg-secondary rounded w-2/3" />
              <div className="flex justify-between items-center">
                <span className="font-sora font-bold text-foreground text-sm tabular-nums">R$ 124,99</span>
              </div>
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="text-[11px] font-semibold text-foreground">Calculadora de Frete</span>
                </div>
                <div className="flex gap-2">
                  <div className="h-7 flex-1 bg-card border border-border rounded-md text-xs flex items-center px-2 text-muted-foreground">CEP</div>
                  <div className="h-7 px-3 bg-primary rounded-md flex items-center">
                    <span className="text-primary-foreground text-[10px] font-semibold">Calcular</span>
                  </div>
                </div>
                <p className="text-[10px] text-success mt-2 font-medium">✓ Frete grátis acima de R$ 150</p>
              </div>
              <div className="h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-[10px] font-semibold">Adicionar ao Carrinho — R$ 124,99</span>
              </div>
            </div>
          </PhoneFrame>

          {/* Carrinho */}
          <PhoneFrame title="Carrinho — total transparente">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-lg" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground">Café Blend Artesanal</div>
                  <div className="text-[11px] text-muted-foreground">Qtd: 2</div>
                </div>
                <span className="text-xs font-semibold text-foreground tabular-nums">R$ 249,98</span>
              </div>
              <div className="border-t border-border pt-3 space-y-1.5 text-xs">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground tabular-nums">R$ 249,98</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Frete</span><span className="text-success font-medium">Grátis</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Impostos</span><span className="text-foreground tabular-nums">R$ 21,25</span></div>
                <div className="flex justify-between font-bold border-t border-border pt-2"><span className="text-foreground">Total</span><span className="text-foreground tabular-nums">R$ 271,23</span></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <Truck className="w-3 h-3" /> Entrega estimada: 20–22 Mar
              </div>
              <div className="h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-[10px] font-semibold">Ir para o Checkout</span>
              </div>
            </div>
          </PhoneFrame>
        </div>

        {/* 3-step checkout */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <PhoneFrame title="Etapa 1 — Envio" highlight>
            <StepIndicator current={1} />
            <div className="space-y-2.5 mt-4">
              <InputMock label="Nome Completo" />
              <InputMock label="Endereço" />
              <div className="flex gap-2">
                <InputMock label="Cidade" />
                <InputMock label="CEP" />
              </div>
              <div className="h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-[10px] font-semibold flex items-center gap-1">Continuar <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          </PhoneFrame>

          <PhoneFrame title="Etapa 2 — Pagamento" highlight>
            <StepIndicator current={2} />
            <div className="space-y-2.5 mt-4">
              <InputMock label="Número do Cartão" />
              <div className="flex gap-2">
                <InputMock label="MM/AA" />
                <InputMock label="CVC" />
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground bg-success/5 border border-success/10 p-2 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-success" />
                Criptografia SSL de 256 bits
              </div>
              <div className="h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-[10px] font-semibold flex items-center gap-1">Revisar Pedido <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          </PhoneFrame>

          <PhoneFrame title="Etapa 3 — Revisão" highlight>
            <StepIndicator current={3} />
            <div className="space-y-2.5 mt-4">
              <div className="bg-secondary/50 rounded-lg p-2.5 text-xs space-y-1">
                <div className="flex justify-between"><span className="text-muted-foreground">Itens</span><span className="text-foreground tabular-nums">R$ 249,98</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Frete</span><span className="text-success">Grátis</span></div>
                <div className="flex justify-between font-bold pt-1 border-t border-border"><span>Total</span><span className="tabular-nums">R$ 271,23</span></div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-success">
                <ShieldCheck className="w-3 h-3" /> Garantia de devolução em 30 dias
              </div>
              <div className="h-8 bg-success rounded-lg flex items-center justify-center">
                <span className="text-success-foreground text-[10px] font-semibold flex items-center gap-1"><Check className="w-3 h-3" /> Finalizar Pedido</span>
              </div>
            </div>
          </PhoneFrame>
        </div>

        {/* Confirmation */}
        <PhoneFrame title="Confirmação do Pedido">
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 text-success" />
            </div>
            <p className="font-sora text-base font-bold text-foreground mb-1">Pedido Confirmado!</p>
            <p className="text-[11px] text-muted-foreground mb-3">Pedido #BRW-2847 • Entrega estimada 20–22 Mar</p>
            <div className="bg-secondary/50 rounded-lg p-3 text-xs text-left space-y-1 max-w-[200px] mx-auto">
              <div className="flex justify-between"><span className="text-muted-foreground">Total pago</span><span className="font-bold text-foreground tabular-nums">R$ 271,23</span></div>
            </div>
          </div>
        </PhoneFrame>
      </div>
    </section>
  );
}

function PhoneFrame({ title, children, highlight }: { title: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`bg-accent rounded-[1.5rem] p-2.5 shadow-lg ${highlight ? "ring-2 ring-primary/15" : ""}`}>
      <div className="bg-background rounded-[1rem] overflow-hidden">
        <div className={`px-4 py-2 border-b ${highlight ? "bg-primary/5 border-primary/10" : "bg-secondary/50 border-border"}`}>
          <span className="text-[11px] font-semibold text-foreground">{title}</span>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-1 flex-1">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
            s <= current ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          }`}>{s}</div>
          <span className={`text-[9px] font-medium ${s <= current ? "text-foreground" : "text-muted-foreground"}`}>
            {s === 1 ? "Envio" : s === 2 ? "Pagar" : "Revisar"}
          </span>
          {s < 3 && <div className={`flex-1 h-[2px] ${s < current ? "bg-primary" : "bg-border"}`} />}
        </div>
      ))}
    </div>
  );
}

function InputMock({ label }: { label: string }) {
  return (
    <div>
      <div className="text-[9px] text-muted-foreground mb-0.5 font-medium">{label}</div>
      <div className="h-7 bg-card border border-border rounded-md" />
    </div>
  );
}
