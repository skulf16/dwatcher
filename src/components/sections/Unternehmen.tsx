import { SectionHeading } from "@/components/ui/SectionHeading";

const POINTS = [
  {
    code: "PLUG_RUN",
    title: "Einfach anschließen, fertig",
    text: "Ein cleveres kleines Gerät, das Ihre gesamte IT-Infrastruktur rund um die Uhr im Auge behält – ohne eigene IT-Abteilung und ohne Installation auf jedem Rechner.",
  },
  {
    code: "SCAN_ALL",
    title: "Vom WLAN bis zum NAS",
    text: "Der dwatcher scannt alles: das WLAN, den Netzwerkdrucker, das NAS wie eine Synology, bis hin zu den einzelnen Clients. Volllaufende Festplatten fallen sofort auf – bevor sie Ihren Betrieb ausbremsen.",
  },
  {
    code: "CLEAR_REP",
    title: "Klartext statt Kauderwelsch",
    text: "Sie erhalten regelmäßig einen glasklaren, einfachen Statusbericht. Auf einen Blick sehen Sie, dass alles läuft – und können sich entspannt auf Ihr Geschäft konzentrieren.",
  },
] as const;

export function Unternehmen() {
  return (
    <section
      id="unternehmen"
      className="scroll-mt-24 overflow-hidden border-t border-line py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            index="05"
            kicker="Für Unternehmen"
            title="IT, die einfach läuft – bis es knallt? Nicht mit dwatcher."
            lead="Hand aufs Herz: Sie hoffen, dass Ihre Firmen-IT läuft – bis es plötzlich knallt. Genau dafür gibt es den dwatcher."
          />

          <div className="mt-9 space-y-6">
            {POINTS.map((p) => (
              <article key={p.code} className="group relative border-l-2 border-line pl-5 transition-colors hover:border-accent">
                <span
                  aria-hidden
                  className="font-mono text-[11px] tracking-[0.18em] text-faint transition-colors group-hover:text-accent"
                >
                  [{p.code}]
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold uppercase tracking-wide text-fg">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-dim">{p.text}</p>
              </article>
            ))}
          </div>

          <a
            href="#kontakt"
            className="corners mt-9 inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-[13px] uppercase tracking-[0.16em] font-medium text-void transition-all hover:shadow-accent hover:brightness-110"
          >
            IT unsichtbar stabil machen
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Video für Unternehmen */}
        <figure className="reveal relative mx-auto w-full max-w-[320px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="corners relative overflow-hidden border border-line bg-panel shadow-panel">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                dwatcher://unternehmen
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
              poster="/media/dwatcher-unternehmen-poster.jpg"
              className="aspect-[9/16] w-full object-cover"
            >
              <source src="/media/dwatcher-unternehmen.mp4" type="video/mp4" />
              Ihr Browser kann dieses Video nicht abspielen.
            </video>
          </div>
          <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <span className="text-accent">▶</span> 0:52 Min.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
