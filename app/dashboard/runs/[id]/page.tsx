"use client";

import { useEffect, useState } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";

type RunResponse = {
  run: {
    id: string;
    createdAt: string;
    result: {
      companyMemory: string[];
      priorities: Array<{ item: string; owner: string; urgency: string }>;
      risks: string[];
      metrics: Array<{ metric: string; target: string; owner: string }>;
      nextActions: string[];
      executiveSummary: string;
    };
  };
};

export default function RunDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [run, setRun] = useState<RunResponse["run"] | null>(null);

  useEffect(() => {
    async function load() {
      const { id } = await params;
      const res = await fetch(`/api/runs/${id}`);
      const data = (await res.json()) as RunResponse;
      setRun(data.run);
    }
    void load();
  }, [params]);

  if (!run) return <p className="text-slate-300">Loading run...</p>;

  return (
    <>
    <SubpageVisual variant="dashboard" />
      <div className="space-y-5">
      <section className="panel space-y-2">
        <p className="text-sm text-slate-400">{new Date(run.createdAt).toLocaleString()}</p>
        <h1 className="text-2xl font-semibold text-white">Executive summary</h1>
        <p className="text-slate-300">{run.result.executiveSummary}</p>
      </section>

      <section className="panel">
        <h2 className="font-semibold text-white">Company memory</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          {run.result.companyMemory.map((m) => <li key={m}>{m}</li>)}
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="panel">
          <h2 className="font-semibold text-white">Priorities and owners</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            {run.result.priorities.map((p) => (
              <li key={`${p.item}-${p.owner}`} className="rounded-md border border-white/10 px-3 py-1">
                <span className="font-medium text-cyan-300">{p.urgency}</span> {p.item} - {p.owner}
              </li>
            ))}
          </ul>
        </article>
        <article className="panel">
          <h2 className="font-semibold text-white">Risk tracker</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {run.result.risks.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="panel">
          <h2 className="font-semibold text-white">Metrics</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {run.result.metrics.map((m) => <li key={m.metric}>{m.metric} ({m.target}) - {m.owner}</li>)}
          </ul>
        </article>
        <article className="panel">
          <h2 className="font-semibold text-white">Next actions</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {run.result.nextActions.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </article>
      </section>
    </div>
  </>
  )
}
