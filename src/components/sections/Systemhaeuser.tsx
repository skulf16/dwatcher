import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpandPoint } from "@/components/ui/ExpandPoint";

const POINTS = [
  {
    code: "MULTI_SITE",
    title: "Alle Standorte, eine Konsole",
    text: "Verwalten Sie mehrere Standorte oder die komplette Infrastruktur Ihrer Kunden zentral, live und übersichtlich – ohne sich durch ein Dutzend Monitoring-Tools zu klicken.",
  },
  {
    code: "PRE_TICKET",
    title: "Vor dem Helpdesk-Ticket",
    text: "Der dwatcher erkennt kritische Fehler und volllaufende Festplatten autonom im Hintergrund – bevor das Ticket im Helpdesk landet und der Kunde anruft.",
  },
  {
    code: "FULL_SCOPE",
    title: "Vom Server bis zum Client",
    text: "Netzwerk-Performance, Druckerstatus und Server-Uptime bis hin zu Client-Zuständen und anstehenden Updates: alle Fakten für Ihre Techniker, automatisch erfasst.",
  },
] as const;

export function Systemhaeuser() {
  return (
    <section
      id="systemhaeuser"
      className="scroll-mt-24 overflow-hidden border-t border-line bg-base py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Video für Systemhäuser */}
        <figure className="reveal relative mx-auto w-full max-w-[320px] lg:order-first">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="corners relative overflow-hidden border border-line bg-panel shadow-panel">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                dwatcher://systemhaeuser
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
              poster="/media/dwatcher-systemhaeuser-poster.jpg"
              className="aspect-[9/16] w-full object-cover"
            >
              <source src="/media/dwatcher-systemhaeuser.mp4" type="video/mp4" />
              Ihr Browser kann dieses Video nicht abspielen.
            </video>
          </div>
          <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <span className="text-accent">▶</span> 0:41 Min.
          </figcaption>
        </figure>

        <div>
          <SectionHeading
            index="04"
            kicker="Für Systemhäuser"
            title="Die Infrastruktur Ihrer Kunden in einer Konsole"
            lead="Mal ehrlich: Durch wie viele Monitoring-Tools klicken Sie sich, um zu wissen, ob im Netzwerk alles okay ist? Der dwatcher holt die Kontrolle zurück."
          />

          <div className="mt-9 space-y-6">
            {POINTS.map((p) => (
              <ExpandPoint key={p.code} code={p.code} title={p.title}>
                {p.text}
              </ExpandPoint>
            ))}
          </div>

          <a
            href="#kontakt"
            className="corners mt-9 inline-flex items-center gap-2 border border-accent/50 bg-panel px-7 py-3.5 font-mono text-[13px] uppercase tracking-[0.16em] font-medium text-accent transition-all hover:bg-accent hover:text-void hover:shadow-accent"
          >
            dwatcher testen
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
