import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-dim">
        {/* TODO: Datenschutzerklärung von der bestehenden dwatcher.de übernehmen */}
        <p>
          Die vollständige Datenschutzerklärung wird vor dem Livegang aus der
          bestehenden Seite übernommen.
        </p>
      </div>
    </div>
  );
}
