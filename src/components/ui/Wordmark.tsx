import Image from "next/image";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/media/logo.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="h-7 w-7"
        sizes="28px"
      />
      <span className="font-display text-xl font-bold tracking-[0.06em] text-fg">
        dwatcher
      </span>
      <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-faint sm:inline">
        by Datadiorama
      </span>
    </span>
  );
}
