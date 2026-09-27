import type { SignalItem } from "@/lib/founderDashboardDemo";

const strengthDot: Record<SignalItem["strength"], string> = {
  high: "bg-rose-400 shadow-[0_0_12px_rgba(251,113,133,0.55)]",
  med: "bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.35)]",
  low: "bg-emerald-400/80",
};

export function CustomerSignalFeed({
  signals,
  themes,
  title = "Customer signal feed",
}: {
  signals?: SignalItem[];
  themes?: string[];
  title?: string;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {themes && themes.length > 0 ? (
          <span className="hidden text-[0.65rem] text-violet-200/80 sm:inline">Themes locked</span>
        ) : null}
      </div>
      {themes && themes.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {themes.map((t) => (
            <span key={t} className="rounded-full border border-violet-400/25 bg-violet-500/10 px-2.5 py-1 text-[0.7rem] text-violet-100">
              {t}
            </span>
          ))}
        </div>
      ) : null}
      {signals && signals.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {signals.map((s) => (
            <li key={s.id} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
              <div className="flex items-start gap-2">
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${strengthDot[s.strength]}`} />
                <div className="min-w-0">
                  <p className="text-sm text-zinc-200">{s.title}</p>
                  <p className="mt-1 text-[0.7rem] text-zinc-500">{s.source}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : themes && themes.length > 0 ? null : (
        <p className="mt-3 text-sm text-zinc-500">Paste verbatim customer language—CompanyOS surfaces repetition before it becomes churn.</p>
      )}
    </section>
  );
}
