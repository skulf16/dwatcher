export function SectionHeading({
  index,
  kicker,
  title,
  lead,
}: {
  index: string;
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="reveal max-w-2xl">
      <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-accent">
        <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
        <span className="text-faint">{index}_//</span> {kicker}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.02] tracking-wide sm:text-5xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-dim">{lead}</p> : null}
    </div>
  );
}
