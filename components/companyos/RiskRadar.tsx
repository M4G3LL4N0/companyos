import type { RiskRadar as RiskRadarModel } from "@/lib/briefGenerator";

function bar(level: RiskRadarModel[keyof RiskRadarModel]) {
  if (level === "high") return "bg-gradient-to-r from-rose-500/90 to-rose-400/50";
  if (level === "med") return "bg-gradient-to-r from-amber-400/90 to-amber-300/40";
  return "bg-gradient-to-r from-emerald-400/80 to-cyan-300/30";
}

const rows: Array<[keyof RiskRadarModel, string]> = [
  ["delivery", "Delivery"],
  ["market", "Market"],
  ["team", "Team"],
  ["capital", "Capital"],
  ["reputation", "Reputation"],
];

export function RiskRadar({ radar, title = "Risk radar" }: { radar: RiskRadarModel; title?: string }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {rows.map(([key, label]) => (
          <li key={key} className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="w-24 shrink-0 text-zinc-500">{label}</span>
            <span className={`h-2 flex-1 rounded-full ${bar(radar[key])}`} />
            <span className="w-10 shrink-0 text-right text-[0.65rem] uppercase text-zinc-500">{radar[key]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
