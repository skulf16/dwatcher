import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SPECS = [
  ["Kompakte Bauweise", "Passt in jedes Rack oder auf den Schreibtisch."],
  ["Low Energy", "Minimaler Stromverbrauch bei maximaler Überwachungsleistung."],
  ["Sichere Daten", "Kommunikation erfolgt verschlüsselt und DSGVO-konform."],
] as const;

export function Tech() {
  return (
    <section id="technik" className="scroll-mt-24 border-t border-line bg-base py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          kicker="Technik"
          title="Technische Details"
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <dl className="grid gap-px border border-line bg-line">
            {SPECS.map(([term, def], i) => (
              <div key={term} className="flex items-start gap-5 bg-panel px-6 py-6">
                <span
                  aria-hidden
                  className="mt-0.5 font-display text-2xl font-bold text-accent/40"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <dt className="font-display text-xl font-semibold uppercase tracking-wide text-fg">
                    {term}
                  </dt>
                  <dd className="mt-1.5 leading-relaxed text-dim">{def}</dd>
                </div>
              </div>
            ))}
          </dl>

          {/* Original-Produktfoto der Box */}
          <figure className="reveal relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 bottom-0 top-12 rounded-full bg-brand/15 blur-3xl"
            />
            <Image
              src="/media/box.png"
              alt="Die dwatcher-Box: kompaktes schwarzes Gehäuse mit Datadiorama-Schriftzug und Lüftungsschlitzen"
              width={550}
              height={500}
              className="relative mx-auto w-full max-w-sm drop-shadow-[0_32px_48px_rgba(0,0,0,0.9)]"
              sizes="(min-width: 1024px) 400px, 80vw"
            />
            <figcaption className="relative mt-2 text-center font-mono text-[11px] tracking-[0.2em] text-faint">
              dwatcher Hardware · Originalfoto
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
