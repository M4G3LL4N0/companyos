"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BriefInputs, CompanyStage, UrgencyLevel } from "@/lib/briefGenerator";
import { generateCompanyBrief } from "@/lib/briefGenerator";
import { operatingDimensions } from "@/lib/operatingScoring";
import { CustomerSignalFeed } from "@/components/companyos/CustomerSignalFeed";
import { ExecutionScore } from "@/components/companyos/ExecutionScore";
import { OwnerMap } from "@/components/companyos/OwnerMap";
import { PriorityStack } from "@/components/companyos/PriorityStack";
import { RiskRadar } from "@/components/companyos/RiskRadar";

const stages: { value: CompanyStage; label: string }[] = [
  { value: "idea", label: "Idea" },
  { value: "mvp", label: "MVP" },
  { value: "early-revenue", label: "Early revenue" },
  { value: "scaling", label: "Scaling" },
];

const urgencies: { value: UrgencyLevel; label: string }[] = [
  { value: "steady", label: "Steady" },
  { value: "focused", label: "Focused" },
  { value: "sprint", label: "Sprint" },
  { value: "critical", label: "Critical" },
];

const initial: BriefInputs = {
  companyName: "Northline",
  stage: "early-revenue",
  teamSize: 18,
  goals: "Close two enterprise pilots, ship OAuth reliability patch, raise activation to 38%, keep burn flat.",
  meetingNotes:
    "Leadership sync: SSO workstream slipped 1 sprint. Sales says pilots stall on security review. Engineering wants fewer parallel experiments. Marketing needs sharper ICP narrative.",
  customerFeedback:
    "Prospects love insights but onboarding feels fragile. Permissions confuse admins on day one. Reliability in the first week is the recurring theme—reliability reliability support load.",
  blockers: "Legal DPA variant for EU. Design bandwidth thin. Infra spike on dashboard timeouts. Hiring still open for senior backend.",
  urgency: "sprint",
};

export function OperatingBriefGenerator() {
  const [form, setForm] = useState<BriefInputs>(initial);

  const output = useMemo(() => generateCompanyBrief(form), [form]);

  const diagnostics = useMemo(
    () =>
      operatingDimensions({
        goalsText: form.goals,
        meetingNotes: form.meetingNotes,
        customerFeedback: form.customerFeedback,
        blockers: form.blockers,
        teamSize: form.teamSize,
        stage: form.stage,
        urgency: form.urgency,
      }),
    [form],
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-violet-200/90">Interactive demo</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">Operating Brief Generator</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Paste the chaos. Local mock logic synthesizes priorities, owners, risks, customer themes, and a weekly operating brief—no API keys, no deploy.
          </p>
        </div>
        <Link href="/dashboard" className="text-sm font-semibold text-violet-200 hover:text-white">
          Open founder dashboard →
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <form
          className="panel space-y-4 border-violet-500/15"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="block space-y-1 text-sm">
            <span className="text-zinc-200">Company name</span>
            <input
              value={form.companyName}
              onChange={(e) => setForm((p) => ({ ...p, companyName: e.target.value }))}
              className="w-full rounded-lg border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-1 text-sm">
              <span className="text-zinc-200">Company stage</span>
              <select
                value={form.stage}
                onChange={(e) => setForm((p) => ({ ...p, stage: e.target.value as CompanyStage }))}
                className="w-full rounded-lg border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100"
              >
                {stages.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block space-y-1 text-sm">
              <span className="text-zinc-200">Team size</span>
              <input
                type="number"
                min={1}
                value={form.teamSize}
                onChange={(e) => setForm((p) => ({ ...p, teamSize: Number(e.target.value) || 1 }))}
                className="w-full rounded-lg border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100"
              />
            </label>
          </div>

          <label className="block space-y-1 text-sm">
            <span className="text-zinc-200">Urgency level</span>
            <select
              value={form.urgency}
              onChange={(e) => setForm((p) => ({ ...p, urgency: e.target.value as UrgencyLevel }))}
              className="w-full rounded-lg border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100"
            >
              {urgencies.map((u) => (
                <option key={u.value} value={u.value}>
                  {u.label}
                </option>
              ))}
            </select>
          </label>

          {(
            [
              ["goals", "Current goals"],
              ["meetingNotes", "Paste meeting notes"],
              ["customerFeedback", "Paste customer feedback"],
              ["blockers", "Paste blockers"],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="block space-y-1 text-sm">
              <span className="text-zinc-200">{label}</span>
              <textarea
                value={form[key]}
                onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                className="min-h-24 w-full rounded-lg border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100"
              />
            </label>
          ))}

          <p className="text-xs text-zinc-500">Outputs refresh as you type—deterministic mock synthesis for founder reviews.</p>
        </form>

        <div className="space-y-4">
          <section className="panel border-violet-500/25 bg-gradient-to-br from-violet-500/10 via-zinc-950/90 to-indigo-500/5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">Weekly operating brief</h2>
                <p className="mt-1 text-xs text-zinc-500">Narrative + tempo for the week</p>
              </div>
              <ExecutionScore score={output.executionScore} hint="Weighted clarity, owners, risks" />
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {output.weeklyBrief.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <PriorityStack priorities={output.topPriorities.map((p, i) => ({ ...p, rank: i === 0 ? "P0" : i === 1 ? "P1" : "P2" }))} />
            <RiskRadar radar={output.riskRadar} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <OwnerMap owners={output.owners} />
            <CustomerSignalFeed themes={output.customerThemes} title="Customer themes" />
          </div>

          <section className="panel">
            <h3 className="text-sm font-semibold text-white">Scoring diagnostics (local)</h3>
            <div className="mt-3 grid gap-2 text-xs text-zinc-400 sm:grid-cols-2">
              <p>
                <span className="font-medium text-zinc-200">Urgency score:</span> {diagnostics.urgencyDim}
              </p>
              <p>
                <span className="font-medium text-zinc-200">Blocker severity:</span> {diagnostics.blockerSeverity}
              </p>
              <p>
                <span className="font-medium text-zinc-200">Customer signal strength:</span> {diagnostics.customerSignal}
              </p>
              <p>
                <span className="font-medium text-zinc-200">Owner clarity:</span> {diagnostics.ownerClarity}
              </p>
              <p>
                <span className="font-medium text-zinc-200">Focus risk:</span> {diagnostics.focusRisk}
              </p>
            </div>
          </section>

          <section className="panel">
            <h3 className="text-sm font-semibold text-white">Execution score breakdown</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {(
                [
                  ["Clarity", output.executionBreakdown.clarity],
                  ["Ownership", output.executionBreakdown.ownership],
                  ["Urgency", output.executionBreakdown.urgency],
                  ["Customer signal", output.executionBreakdown.customerSignal],
                  ["Risk exposure", output.executionBreakdown.riskExposure],
                  ["Momentum", output.executionBreakdown.momentum],
                ] as const
              ).map(([label, value]) => (
                <div key={label}>
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>{label}</span>
                    <span className="text-violet-200">{value}</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-400" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <section className="panel">
              <h3 className="text-sm font-semibold text-white">Next actions</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                {output.nextActions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>
            <section className="panel">
              <h3 className="text-sm font-semibold text-white">Founder focus</h3>
              <p className="mt-3 text-sm text-violet-100/90">{output.founderFocus}</p>
              <h3 className="mt-6 text-sm font-semibold text-white">Next meeting agenda</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-300">
                {output.meetingAgenda.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
