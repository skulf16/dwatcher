import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpandPoint } from "@/components/ui/ExpandPoint";

const REPORT_PDFS = [
  ["Mai 2026", "/media/reports/reporting-2026-05.pdf"],
  ["Juni 2026", "/media/reports/reporting-2026-06.pdf"],
  ["Juli 2026", "/media/reports/reporting-2026-07.pdf"],
  ["August 2026", "/media/reports/reporting-2026-08.pdf"],
] as const;

export function Reports() {
  return (
    <section id="berichte" className="scroll-mt-24 overflow-hidden border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              index="06"
              kicker="Monitoring"
              title="Ständiger Überblick"
              lead="Regelmäßig erhalten Sie einen Report zur Gesundheit Ihrer IT-Systeme, so dass Sie ruhig schlafen können und notwendige Investitionen schon lange vor ihrer Notwendigkeit kommen sehen."
            />
            <div className="mt-8">
              <ExpandPoint code="EXP_KNOW" title="Erfahrung statt Datenflut">
                Die Zusammenstellung der regelmäßig geprüften Parameter basiert
                auf der jahrelangen Erfahrung von Datadiorama in der
                Systembetreuung. So werden Sie nicht mit unverständlichen Daten
                überschüttet, sondern erhalten einen einfachen, leicht
                verständlichen Überblick, der Ihnen IT-Entscheidungen erleichtert
                und Sie zum Experten für Ihre eigenen Systeme macht.
              </ExpandPoint>
            </div>

            {/* Beispiel-Berichte als PDF */}
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-faint">
              Beispiel-Berichte_
            </p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {REPORT_PDFS.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 border border-line-strong bg-panel/60 px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <span aria-hidden>▤</span>
                    {label} (PDF)
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Echter Monatsbericht aus dem dwatcher-Portal */}
          <figure className="reveal relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-full bg-brand/10 blur-3xl"
            />
            <div className="corners relative mx-auto max-w-md overflow-hidden border border-line bg-panel shadow-panel">
              <Image
                src="/media/screenshots/shot-04-monatsbericht.png"
                alt="dwatcher Monitoring-Bericht (Beispiel): Zusammenfassung, Kennzahlen zu Geräten, Verfügbarkeit, Meldungen, Behebungszeiten und Gerätetabelle"
                width={1555}
                height={2200}
                className="w-full"
                sizes="(min-width: 1024px) 448px, 100vw"
              />
            </div>
            <figcaption className="relative mt-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              Der monatliche Monitoring-Bericht · Originalansicht
            </figcaption>
          </figure>
        </div>

        {/* Echter Sofort-Alarm aus dem dwatcher-Portal */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <figure className="reveal">
            <div className="corners overflow-hidden border border-line bg-panel shadow-panel">
              <Image
                src="/media/screenshots/shot-02-stoerung.png"
                alt="dwatcher-Störungsansicht (Beispiel): 2 Störungen im Betrieb, 1 von 2 bereits in Bearbeitung, mit 30-Tage-Protokoll und Ausfallzeit"
                width={2020}
                height={1288}
                className="w-full"
                sizes="(min-width: 1024px) 540px, 100vw"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              Wenn etwas hakt: Störungsansicht mit Status „In Bearbeitung“
            </figcaption>
          </figure>

          <div>
            <h3 className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-accent">
              <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
              Email-Alerts_
            </h3>
            <div className="mt-5">
              <ExpandPoint code="MAIL_14D" title="Gesundheitsreport per E-Mail">
                Diese Benachrichtigungen sendet dwatcher alle zwei Wochen oder
                bei Dringlichkeit an Sie: Alle zwei Wochen bekommen Sie einen
                Gesundheitsreport zu Ihren Systemen – ein kurzer, verständlicher
                Text fasst das Gesamtergebnis zusammen, darunter finden Sie die
                einzelnen Systeme und ihre Gesundheit als einfache Ampel.
              </ExpandPoint>
            </div>
            <p className="mt-4 max-w-xl border-l-2 border-crit/60 bg-crit/5 px-4 py-3 leading-relaxed text-fg">
              Wenn ein Rechner oder Bauelement in den roten Bereich rutscht,
              werden Sie sofort informiert.
            </p>
          </div>
        </div>

        {/* Echte Verfügbarkeits-/SLA-Ansicht aus dem dwatcher-Portal */}
        <figure className="reveal mt-16">
          <div className="corners overflow-hidden border border-line bg-panel shadow-panel">
            <Image
              src="/media/screenshots/shot-03-verfuegbarkeit.png"
              alt="dwatcher-Verfügbarkeitsansicht (Beispiel): Verfügbarkeit je System, gemessen am SLA-Ziel von 99,5 %, mit Werten pro System und Standort"
              width={2020}
              height={1188}
              className="w-full"
              sizes="(min-width: 1152px) 1088px, 100vw"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            Verfügbarkeit je System – jederzeit nachvollziehbar
          </figcaption>
        </figure>

        {/* Compliance: Sorgfaltspflicht & Nachweis */}
        <div className="corners reveal mt-16 border border-accent/40 bg-panel p-8 shadow-panel sm:p-10">
          <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-accent">
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
            Compliance_
          </p>
          <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            Nachweisbar sorgfältig.
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-dim">
            Mit der permanenten Überwachung Ihrer Systeme genügen Sie Ihrer
            Sorgfaltspflicht – und haben einen regelmäßigen Nachweis über das
            ordnungsgemäße Funktionieren und die durchgeführten Updates Ihrer
            gesamten IT. So gewinnen Ihre Systeme an Sicherheit. Und kommt es
            dennoch zu einem IT-Vorfall, können Sie belegen, dass Sie Ihrer
            Sorgfaltspflicht nachgekommen sind – gegenüber:
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {["Versicherungen", "Behörden", "Aufsichtsräten"].map((who) => (
              <li
                key={who}
                className="inline-flex items-center gap-2 border border-line-strong bg-base px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.1em] text-fg"
              >
                <span aria-hidden className="text-ok">✓</span>
                {who}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
