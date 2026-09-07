import { SectionHeading } from "@/components/ui/SectionHeading";

export function Insight() {
  return (
    <section id="einblick" className="scroll-mt-24 overflow-hidden border-t border-line bg-base py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            index="03"
            kicker="Video"
            title="Machen Sie Ihre IT unsichtbar stabil"
            lead="Schluss mit Reagieren, jetzt alles am Laufen halten."
          />

          <a
            href="#kontakt"
            className="corners mt-9 inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-[13px] uppercase tracking-[0.16em] font-medium text-void transition-all hover:shadow-accent hover:brightness-110"
          >
            Jetzt anfragen
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Original-Video von der bestehenden Seite */}
        <figure className="reveal relative mx-auto w-full max-w-[320px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="corners relative overflow-hidden border border-line bg-panel shadow-panel">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                dwatcher://vorstellung
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-crit">
                <span className="h-1.5 w-1.5 rounded-full bg-crit animate-blink" aria-hidden />
                REC
              </span>
            </div>
            <video
              controls
              playsInline
              preload="none"
              poster="/media/dwatcher-video-poster.jpg"
              className="aspect-[9/16] w-full object-cover"
            >
              <source src="/media/dwatcher-video.mp4" type="video/mp4" />
              Ihr Browser kann dieses Video nicht abspielen.
            </video>
          </div>
          <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <span className="text-accent">▶</span> 1:19 Min.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
