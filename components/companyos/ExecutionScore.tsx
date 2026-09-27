type Props = {
  score: number;
  label?: string;
  hint?: string;
  size?: "sm" | "md" | "lg";
};

export function ExecutionScore({ score, label = "Execution score", hint, size = "md" }: Props) {
  const v = Math.min(100, Math.max(0, Math.round(score)));
  const ring =
    size === "lg" ? "h-20 w-20 border-[5px]" : size === "sm" ? "h-12 w-12 border-[3px]" : "h-16 w-16 border-4";
  const textSize = size === "lg" ? "text-4xl" : size === "sm" ? "text-2xl" : "text-3xl";

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-500/10 via-zinc-950/80 to-indigo-500/5 px-4 py-3">
      <div
        className={`${ring} shrink-0 rounded-full border-white/10`}
        style={{
          background: `conic-gradient(from -90deg, #a78bfa 0deg, #6366f1 ${v * 3.6}deg, rgba(255,255,255,0.06) ${v * 3.6}deg)`,
        }}
        aria-hidden
      />
      <div className="min-w-0">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-200/85">{label}</p>
        <p className={`${textSize} font-semibold tracking-tight text-white`}>{v}</p>
        {hint ? <p className="text-xs text-zinc-500">{hint}</p> : null}
      </div>
    </div>
  );
}
