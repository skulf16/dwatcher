const CHECKS = [
  "SMART-Werte",
  "RAID-Status",
  "Speicherbelegung",
  "Firmware-Stände",
  "Login-Anomalien",
  "Erreichbarkeit",
  "Temperaturen",
  "Backup-Ziele",
  "Zertifikats-Laufzeiten",
  "Netzwerk-Latenz",
] as const;

export function Ticker() {
  const items = [...CHECKS, ...CHECKS];
  return (
    <div className="overflow-hidden border-y border-line bg-panel/60 py-3" aria-hidden>
      <div className="flex w-max animate-ticker gap-10">
        {items.map((check, i) => (
          <span
            key={`${check}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.2em] text-faint"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            {check}
          </span>
        ))}
      </div>
    </div>
  );
}
