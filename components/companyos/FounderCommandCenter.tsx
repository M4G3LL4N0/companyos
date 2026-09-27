import type { ReactNode } from "react";
import type { FounderDashboardData } from "@/lib/founderDashboardDemo";
import { CustomerSignalFeed } from "@/components/companyos/CustomerSignalFeed";
import { ExecutionScore } from "@/components/companyos/ExecutionScore";
import { OwnerMap } from "@/components/companyos/OwnerMap";
import { PriorityStack } from "@/components/companyos/PriorityStack";
import { RiskRadar } from "@/components/companyos/RiskRadar";

function Panel({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm ${className}`}>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {subtitle ? <p className="text-[0.65rem] text-zinc-500">{subtitle}</p> : null}
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function FounderCommandCenter({ data, variant = "full" }: { data: FounderDashboardData; variant?: "full" | "hero" }) {
  if (variant === "hero") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-br from-zinc-950 via-zinc-950 to-violet-950/50 p-4 shadow-[0_0_80px_-24px_rgba(139,92,246,0.55)] sm:p-5">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="relative grid gap-3 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-black/45 p-3 backdrop-blur">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-200/90">Today&apos;s priority</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">{data.weeklyPriorities[0]?.title}</p>
              <p className="mt-2 text-xs text-violet-200/90">Owner: {data.weeklyPriorities[0]?.owner}</p>
            </div>
            <PriorityStack
              title="Top 3 stack"
              priorities={data.weeklyPriorities.map((p) => ({ title: p.title, owner: p.owner, lane: p.lane, rank: p.rank }))}
            />
            <CustomerSignalFeed signals={data.customerSignals.slice(0, 2)} />
          </div>
          <div className="space-y-3">
            <Panel title="Blocked projects" subtitle="Queue">
              <ul className="space-y-2 text-sm text-zinc-300">
                {data.blockerQueue.slice(0, 3).map((b) => (
                  <li key={b.id} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                    <span className="text-[0.65rem] font-semibold uppercase text-rose-200/90">{b.severity}</span>
                    <span className="ml-2">{b.title}</span>
                    <p className="mt-1 text-xs text-zinc-500">
                      {b.owner} · open {b.age}
                    </p>
                  </li>
                ))}
              </ul>
            </Panel>
            <OwnerMap owners={data.owners} title="Team owner map" />
            <div className="rounded-xl border border-violet-500/25 bg-violet-500/10 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-200/85">Weekly operating brief</p>
              <ul className="mt-2 space-y-1.5 text-xs text-zinc-300">
                <li>P0: reliability + unblock enterprise pilots</li>
                <li>P1: tighten ICP narrative to stop custom scoping</li>
                <li>Risk: delivery coupling—name mitigations by Thursday</li>
              </ul>
            </div>
            <ExecutionScore score={data.executionScore} size="sm" hint="Composite from clarity, owners, risks" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-violet-200/90">Founder cockpit</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Command center</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            One operating layer: priorities, owners, blockers, customer language, risks, and the next seven days—built for speed, not planning theater.
          </p>
        </div>
        <ExecutionScore score={data.executionScore} size="lg" hint="Local demo composite" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <PriorityStack
            priorities={data.weeklyPriorities.map((p) => ({ title: p.title, owner: p.owner, lane: p.lane, rank: p.rank }))}
          />
          <div className="grid gap-4 md:grid-cols-2">
            <CustomerSignalFeed signals={data.customerSignals} />
            <RiskRadar radar={data.riskRadar} />
          </div>
        </div>
        <div className="space-y-4">
          <OwnerMap owners={data.owners} />
          <Panel title="Blocker queue" subtitle="Severity + age">
            <ul className="space-y-2 text-sm text-zinc-300">
              {data.blockerQueue.map((b) => (
                <li key={b.id} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[0.65rem] font-semibold uppercase text-rose-200/90">{b.severity}</span>
                    <span className="text-[0.65rem] text-zinc-500">{b.age}</span>
                  </div>
                  <p className="mt-1">{b.title}</p>
                  <p className="mt-1 text-xs text-zinc-500">Owner: {b.owner}</p>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Meeting debt" subtitle="Notes without owners">
          <ul className="space-y-2 text-sm text-zinc-300">
            {data.meetingDebt.map((m) => (
              <li key={m.id} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <p>{m.title}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {m.hours} · {m.owner}
                </p>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Product decisions" subtitle="Open / queued / decided">
          <ul className="space-y-2 text-sm text-zinc-300">
            {data.productDecisions.map((d) => (
              <li key={d.id} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[0.65rem] uppercase text-violet-200/90">{d.status}</span>
                  <span className="text-[0.65rem] text-zinc-500">{d.owner}</span>
                </div>
                <p className="mt-1">{d.title}</p>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Operating rhythm" subtitle="Cadence anchors">
          <ul className="space-y-2 text-sm text-zinc-300">
            {data.operatingRhythm.map((r) => (
              <li key={r} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                {r}
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Next 7 days" subtitle="Execution radar">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {data.next7Days.map((d) => (
            <div key={d.day} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-zinc-500">{d.day}</p>
              <p className="mt-1 text-sm text-zinc-200">{d.label}</p>
              <p className="mt-1 text-[0.65rem] uppercase text-violet-200/80">{d.type}</p>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
