import Link from "next/link";
import { NAV } from "@/data/site";
import { Wordmark } from "@/components/ui/Wordmark";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="dwatcher – Startseite">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="corners inline-flex items-center gap-2.5 border border-accent/50 bg-panel px-4 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-accent transition-all hover:bg-accent hover:text-void hover:shadow-accent"
        >
          Jetzt anfragen
          <span aria-hidden>⌁</span>
        </a>
      </div>
    </header>
  );
}
