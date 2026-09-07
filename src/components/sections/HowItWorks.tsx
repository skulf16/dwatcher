import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Anschließen",
    text: "Box an das Netzwerk anschließen.",
  },
  {
    step: "02",
    title: "Konfigurieren",
    text: "Einmalig Grenzwerte für Warnungen definieren.",
  },
  {
    step: "03",
    title: "Monitoren",
    text: "Regelmäßigen Statusbericht und Sofort-Alarme erhalten.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="funktionsweise" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          kicker="So funktioniert’s"
          title="Drei einfache Schritte zu mehr IT-Stabilität"
        />

        {/* Karten-Stapel: die Schritte schieben sich beim Scrollen übereinander */}
        <ol className="mt-14 space-y-6 lg:space-y-0 lg:pb-24">
          {STEPS.map((s) => (
            <li key={s.step} className="stack-item">
              <div className="stack-card corners group flex flex-col border border-line bg-panel shadow-panel">
                <div className="flex items-center justify-between border-b border-line px-6 py-3 sm:px-10">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    Schritt_{s.step}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    {s.step} / 03
                  </span>
                </div>
                <div className="stripes flex flex-1 flex-col justify-center gap-6 p-8 sm:flex-row sm:items-center sm:gap-12 sm:p-12">
                  <span
                    aria-hidden
                    className="font-display text-7xl font-bold leading-none text-accent/30 sm:text-9xl"
                  >
                    {s.step}
                  </span>
                  <div className="max-w-xl">
                    <h3 className="font-display text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-dim">{s.text}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
