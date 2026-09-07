import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-crit">
        Status: 404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">
        Diese Seite ist offline.
      </h1>
      <p className="mt-4 max-w-md text-dim">
        Keine Sorge – Ihre Infrastruktur läuft weiter. Die gesuchte Seite gibt es
        nur nicht (mehr).
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-[13px] uppercase tracking-[0.16em] font-medium text-void transition-all hover:shadow-accent hover:brightness-110"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
