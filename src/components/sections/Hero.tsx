import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Atmosphäre: Radar-Ringe + blauer Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-20%] top-[-10%] h-[820px] w-[820px] rounded-full border border-line"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[4%] h-[560px] w-[560px] rounded-full border border-line"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-brand/25 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-[-15%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-[160px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="animate-fade-up inline-flex items-center gap-3 border border-line bg-panel/70 px-3 py-1.5 font-mono text-[11px] tracking-[0.24em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" aria-hidden />
            dwatcher by Datadiorama
          </p>
          <h1 className="animate-fade-up delay-1 mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide sm:text-7xl">
            Messen,
            <br />
            Wissen,
            <br />
            <span className="text-accent">Informieren</span>
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-lg leading-relaxed text-dim">
            Der dwatcher ist ein von Datadiorama entwickeltes Gerät speziell zur
            Überwachung der Funktionen der an Ihr Netzwerk angeschlossenen Geräte.
            Rund um die Uhr sorgt er dafür, dass kein Speicherausfall, keine
            voll-laufende Festplatte, kein ungewöhnlicher Login, kein überfälliges
            Update Ihrer Aufmerksamkeit entgeht.
          </p>
          <p className="animate-fade-up delay-2 mt-4 max-w-lg font-mono text-[13px] uppercase tracking-[0.08em] text-fg">
            &gt;&gt; In kritischen Situationen werden Sie sofort informiert.
          </p>

          <div className="animate-fade-up delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="corners inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-[13px] uppercase tracking-[0.16em] font-medium text-void transition-all hover:shadow-accent hover:brightness-110"
            >
              Jetzt anfragen
              <span aria-hidden>→</span>
            </a>
            <a
              href="#funktionsweise"
              className="inline-flex items-center gap-2 border border-line-strong bg-panel/50 px-7 py-3.5 font-mono text-[13px] uppercase tracking-[0.16em] text-fg transition-colors hover:border-accent/70 hover:text-accent"
            >
              So funktioniert&rsquo;s
            </a>
          </div>

          <dl className="animate-fade-up delay-4 mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border border-line bg-panel/50">
            {[
              ["5 Min.", "Einrichtungszeit"],
              ["100+", "Unterstützte Geräte"],
              ["24/7", "Aktives Monitoring"],
            ].map(([value, label]) => (
              <div key={label} className="stripes px-4 py-4">
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-bold text-fg">{value}</dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Echter Servicestatus aus dem dwatcher-Portal */}
        <div className="animate-fade-up delay-3 relative">
          <div className="corners relative overflow-hidden border border-line bg-panel shadow-panel">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="font-mono text-[11px] tracking-[0.2em] text-faint">
                dwatcher://servicestatus
              </span>
              <span className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-led" aria-hidden />
                Verbunden
              </span>
            </div>
            <Image
              src="/media/screenshots/shot-01-servicestatus.png"
              alt="dwatcher-Servicestatus: Alle Systeme laufen, 14 Systeme überwacht, 99,9 % Verfügbarkeit im 30-Tage-Protokoll, SLA erreicht, Liste behobener Störungen"
              width={2020}
              height={1872}
              className="w-full"
              sizes="(min-width: 1024px) 540px, 100vw"
              priority
            />
          </div>

          {/* Die dwatcher-Box: Original-Produktfoto */}
          <div className="absolute -bottom-14 -left-8 hidden w-40 sm:block lg:-left-20 lg:w-48">
            <Image
              src="/media/box-angle.png"
              alt="Die dwatcher-Box von Datadiorama"
              width={550}
              height={500}
              className="drop-shadow-[0_24px_40px_rgba(0,0,0,0.85)]"
              priority
            />
            <span className="absolute -right-6 bottom-8 inline-flex items-center gap-2 border border-line-strong bg-raise/90 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dim backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-led" aria-hidden />
              Unit_01
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
