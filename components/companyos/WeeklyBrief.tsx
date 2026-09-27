export type WeeklyBriefSections = {
  mattersNow: string[];
  slipping: string[];
  customers: string[];
  founderNext: string[];
  delegate: string[];
  ignore: string[];
};

const sectionClass =
  "rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-black/30 p-4 sm:p-5";

export function WeeklyBrief({
  title = "Weekly Operating Brief",
  sections,
  compact,
}: {
  title?: string;
  sections: WeeklyBriefSections;
  compact?: boolean;
}) {
  const block = (label: string, items: string[], accent: string) => (
    <div className={sectionClass}>
      <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${accent}`}>{label}</p>
      <ul className={`mt-3 space-y-2 ${compact ? "text-sm" : "text-sm sm:text-base"} text-zinc-200`}>
        {items.map((line) => (
          <li key={line} className="leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-500/15 via-zinc-950/80 to-indigo-500/10 px-5 py-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-violet-200/90">Artifact</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          This is the publishable layer: what matters, what is slipping, what customers are saying, and what you personally do next—without becoming a wiki.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {block("What matters now", sections.mattersNow, "text-emerald-200/90")}
        {block("What is slipping", sections.slipping, "text-amber-200/90")}
        {block("What customers are saying", sections.customers, "text-violet-200/90")}
        {block("What the founder should do next", sections.founderNext, "text-cyan-200/90")}
        {block("What to delegate", sections.delegate, "text-indigo-200/90")}
        {block("What to ignore", sections.ignore, "text-zinc-400")}
      </div>
    </div>
  );
}
