import { SectionHeading } from "@/components/ui/SectionHeading";

const INCLUDED = [
  "Bis zu 10 Infrastruktur-Geräte (NAS, Netzwerkbauteile, Server)",
  "Mindestlaufzeit: 6 Monate, danach monatlich kündbar zum Monatsende.",
] as const;

export function Pricing() {
  return (
    <section id="preise" className="scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="08"
          kicker="Preise"
          title="Preisgestaltung"
        />

        {/* Ein vollbreiter Preis-Banner in einer Zeile */}
        <div className="reveal corners relative mt-14 overflow-hidden border border-accent/40 bg-panel shadow-panel">
          <div aria-hidden className="stripes pointer-events-none absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
          />
          <div className="relative grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
            <p className="flex items-baseline gap-2 lg:border-r lg:border-line lg:pr-12">
              <span className="font-display text-6xl font-bold tracking-tight">€125,00</span>
              <span className="font-mono text-sm tracking-[0.14em] text-dim">/ Monat</span>
            </p>

            <ul className="space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-dim">
                  <span className="mt-0.5 font-mono text-accent" aria-hidden>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="corners inline-flex items-center justify-center gap-2 self-center bg-accent px-7 py-3.5 font-mono text-[13px] uppercase tracking-[0.16em] font-medium text-void transition-all hover:shadow-accent hover:brightness-110"
            >
              Jetzt anfragen
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
