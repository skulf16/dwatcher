import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight">Impressum</h1>
      <div className="prose-invert mt-8 space-y-4 leading-relaxed text-dim">
        {/* TODO: Impressum-Angaben von der bestehenden dwatcher.de bzw. datadiorama.de übernehmen */}
        <p>
          Die vollständigen Anbieterangaben werden vor dem Livegang aus dem
          bestehenden Impressum übernommen.
        </p>
      </div>
    </div>
  );
}
