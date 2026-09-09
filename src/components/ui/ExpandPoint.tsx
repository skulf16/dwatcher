import type { ReactNode } from "react";

/*
  Aufklappbarer Stichpunkt: geschlossen nur Code + Titel (Bulletpoint),
  Klick zeigt den vollen Text. Natives <details> — der komplette Text
  bleibt im HTML (SEO / KI-Lesbarkeit), ohne JavaScript.
*/
export function ExpandPoint({
  code,
  title,
  children,
}: {
  code: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="group relative border-l-2 border-line pl-5 transition-colors hover:border-accent open:border-accent">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <span>
          <span
            aria-hidden
            className="font-mono text-[11px] tracking-[0.18em] text-faint transition-colors group-hover:text-accent group-open:text-accent"
          >
            [{code}]
          </span>
          <h3 className="mt-1 font-display text-xl font-semibold uppercase tracking-wide text-fg">
            {title}
          </h3>
        </span>
        <span
          aria-hidden
          className="font-mono text-xl leading-none text-accent transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="mt-2 max-w-xl leading-relaxed text-dim">{children}</p>
    </details>
  );
}
