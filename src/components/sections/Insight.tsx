import { SectionHeading } from "@/components/ui/SectionHeading";

export function Insight() {
  return (
    <section id="einblick" className="scroll-mt-24 overflow-hidden border-t border-line bg-base py-12 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div className="max-w-3xl">
          <SectionHeading
            index="03"
            kicker="dwatcher"
            title="Machen Sie Ihre IT unsichtbar stabil"
            lead="Schluss mit Reagieren, jetzt alles am Laufen halten."
          />
        </div>

        <a
          href="#kontakt"
          className="corners inline-flex shrink-0 items-center gap-2 bg-accent px-7 py-3.5 font-mono text-[13px] uppercase tracking-[0.16em] font-medium text-void transition-all hover:shadow-accent hover:brightness-110"
        >
          Jetzt anfragen
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
