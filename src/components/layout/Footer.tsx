import Link from "next/link";
import { SITE } from "@/data/site";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Wordmark />
            <p className="text-sm leading-relaxed text-dim">
              Der dwatcher ist ein von{" "}
              <a
                href={SITE.parent.url}
                className="text-accent transition-colors hover:text-fg"
                rel="noopener"
              >
                {SITE.parent.name}
              </a>{" "}
              entwickeltes Gerät speziell zur Überwachung der Funktionen der an
              Ihr Netzwerk angeschlossenen Geräte.
            </p>
          </div>

          <nav
            className="flex gap-10 font-mono text-[12px] uppercase tracking-[0.14em] text-dim"
            aria-label="Rechtliches"
          >
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] tracking-[0.24em] text-faint">Produkt_</span>
              <a href="#features" className="transition-colors hover:text-accent">Features</a>
              <a href="#technik" className="transition-colors hover:text-accent">Technik</a>
              <a href="#preise" className="transition-colors hover:text-accent">Preise</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] tracking-[0.24em] text-faint">Rechtliches_</span>
              <Link href="/impressum" className="transition-colors hover:text-accent">Impressum</Link>
              <Link href="/datenschutz" className="transition-colors hover:text-accent">Datenschutz</Link>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] tracking-[0.14em] text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>SYS.DATE: {new Date().getFullYear()} // {SITE.fullName}</span>
          <span className="inline-flex items-center gap-2 text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-led" aria-hidden />
            Status: Aktiv
          </span>
        </div>
      </div>
    </footer>
  );
}
