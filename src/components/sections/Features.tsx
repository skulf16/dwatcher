import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    code: "HW_CORE",
    title: "Ihre Hardware voll im Blick",
    text: "Fehler erkennen und beheben, bevor teure Ausfälle den Betrieb stoppen.",
  },
  {
    code: "MON_GRID",
    title: "Präzises Monitoring",
    text: "Behalte alle wichtigen Werte im Blick. Die IT-Box für proaktive Wartung und Stabilität.",
  },
  {
    code: "REP_LOG",
    title: "Zuverlässiger Sekretär",
    text: "Regelmäßige, verständliche Statusberichte für Sicherheit, Nachweisbarkeit, Compliance.",
  },
  {
    code: "AUTO_EXEC",
    title: "Automatisierte Routine",
    text: "Keine manuellen System-Checks mehr. dwatcher liefert Admins alle Fakten.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 border-t border-line bg-base">
      {/* Desktop: vertikaler Scroll schiebt die Karten seitlich durch */}
      <div className="hscroll-wrap">
        <div className="hscroll-sticky py-20 sm:py-28 lg:py-0">
          <div className="hscroll-container mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SectionHeading
              index="01"
              kicker="Features"
              title="Diese Funktionen erwarten Sie"
            />

            <div className="mt-14">
              <div className="hscroll-track grid gap-px border border-line bg-line sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <article
                    key={f.code}
                    className="hscroll-card group relative bg-panel p-8 transition-colors hover:bg-panel-2"
                  >
                    <span
                      aria-hidden
                      className="absolute right-6 top-6 font-mono text-[11px] tracking-[0.18em] text-faint transition-colors group-hover:text-accent"
                    >
                      [{f.code}]
                    </span>
                    <span
                      aria-hidden
                      className="inline-block h-2.5 w-2.5 rounded-full border border-accent/60 bg-accent/20 transition-all group-hover:bg-accent group-hover:shadow-accent"
                    />
                    <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-wide text-fg">
                      {f.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-dim">{f.text}</p>
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"
                    />
                  </article>
                ))}
              </div>

              {/* Fortschrittsbalken des seitlichen Scrollens */}
              <div className="hscroll-progress mt-8" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      {/* Original-Screenshot: echter dwatcher-Status-Output */}
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <figure className="corners reveal overflow-hidden border border-line bg-[#0a0a0a] shadow-panel">
          <Image
            src="/media/status-terminal.png"
            alt="Terminal-Ausgabe von „dwatcher status“: UniFi Controller verbunden, 12 Access Points online, 4 Switches online, 87 Clients, System Status HEALTHY, Uptime 45 Tage"
            width={1331}
            height={363}
            className="w-full"
            sizes="(min-width: 1152px) 1088px, 100vw"
          />
          <figcaption className="border-t border-line px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-faint">
            <span className="text-accent">$</span> dwatcher status
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
