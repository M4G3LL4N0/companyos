type Owner = { name: string; focus: string; load: "light" | "balanced" | "heavy" };

const loadColor: Record<Owner["load"], string> = {
  heavy: "text-rose-200",
  balanced: "text-amber-100",
  light: "text-emerald-200",
};

export function OwnerMap({ owners, title = "Owner map" }: { owners: Owner[]; title?: string }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {owners.map((o) => (
          <div key={o.name} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium text-zinc-100">{o.name}</p>
              <span className={`text-[0.65rem] font-semibold uppercase tracking-wide ${loadColor[o.load]}`}>{o.load} load</span>
            </div>
            <p className="mt-1 text-xs text-zinc-500">{o.focus}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
