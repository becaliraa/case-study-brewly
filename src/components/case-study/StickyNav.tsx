import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { id: "hero", label: "Início" },
  { id: "context", label: "Contexto" },
  { id: "problem", label: "Problema" },
  { id: "research", label: "Pesquisa" },
  { id: "journey", label: "Jornada" },
  { id: "insights", label: "Insights" },
  { id: "rice", label: "RICE" },
  { id: "before", label: "Antes" },
  { id: "flow", label: "Novo Fluxo" },
  { id: "after", label: "Depois" },
  { id: "decisions", label: "Decisões" },
  { id: "impact", label: "Impacto" },
  { id: "learnings", label: "Aprendizados" },
];

interface Props {
  activeId: string;
}

export default function StickyNav({ activeId }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const progress = SECTIONS.findIndex((s) => s.id === activeId);
  const progressPct = ((progress + 1) / SECTIONS.length) * 100;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_3px_0_hsl(var(--border))]"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[960px] mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-95 group-active:scale-90">
            <span className="text-primary-foreground text-xs font-bold font-sora">B</span>
          </div>
          <span className="font-sora text-sm font-semibold text-foreground hidden sm:block">
            Brewly Case Study
          </span>
        </button>

        {/* Desktop pills */}
        <div className="hidden md:flex items-center gap-0.5 overflow-x-auto">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all whitespace-nowrap ${
                activeId === s.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] bg-border">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-5 py-3">
          <div className="grid grid-cols-3 gap-1.5">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-2 py-2 rounded-lg text-[11px] font-medium transition-all text-center ${
                  activeId === s.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export { SECTIONS };
