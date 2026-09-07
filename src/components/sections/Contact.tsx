import { SITE } from "@/data/site";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 relative overflow-hidden border-t border-line bg-base py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="inline-flex items-center gap-3 border border-line bg-panel/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" aria-hidden />
          07_// Kontakt
        </p>
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-wide sm:text-6xl">
          Vereinbaren Sie jetzt Ihr Erstgespräch
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-dim">
          Gerne zeigen wir Ihnen alle Features, die dwatcher mitbringt,
          persönlich und verschaffen uns dabei einen Überblick über Ihre
          IT-Landschaft.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${SITE.email}?subject=Erstgespräch dwatcher`}
            className="corners inline-flex items-center gap-2 bg-accent px-8 py-4 font-mono text-[14px] uppercase tracking-[0.16em] font-medium text-void transition-all hover:shadow-accent hover:brightness-110"
          >
            Jetzt anfragen
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
