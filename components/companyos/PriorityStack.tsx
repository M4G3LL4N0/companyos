type Priority = { title: string; owner: string; lane: string; rank?: "P0" | "P1" | "P2" };

const rankStyle: Record<NonNullable<Priority["rank"]>, string> = {
  P0: "bg-rose-500/20 text-rose-100 ring-rose-400/30",
  P1: "bg-violet-500/20 text-violet-100 ring-violet-400/25",
  P2: "bg-white/10 text-zinc-200 ring-white/10",
};

export function PriorityStack({ priorities, title = "Weekly priorities" }: { priorities: Priority[]; title?: string }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/35 p-4 shadow-inner shadow-black/20 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <span className="text-[0.65rem] font-medium uppercase tracking-wider text-zinc-500">Stack</span>
      </div>
      <ol className="mt-3 space-y-2">
        {priorities.map((p, i) => (
          <li
            key={`${p.title}-${i}`}
            className="rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent px-3 py-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium leading-snug text-zinc-100">{p.title}</p>
              {p.rank ? (
                <span className={`shrink-0 rounded-md px-2 py-0.5 text-[0.65rem] font-semibold uppercase ring-1 ${rankStyle[p.rank]}`}>
                  {p.rank}
                </span>
              ) : (
                <span className="shrink-0 text-[0.65rem] font-semibold uppercase text-zinc-500">P{i}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-zinc-500">
              {p.lane} · <span className="text-violet-200/90">{p.owner}</span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
