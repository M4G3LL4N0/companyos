"use client";

import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { useEffect, useState } from "react";
import { FounderCommandCenter } from "@/components/companyos/FounderCommandCenter";
import { founderDashboardDemo } from "@/lib/founderDashboardDemo";

type RunRow = { id: string; createdAt: string; result: { executiveSummary?: string } };

export default function DashboardPage() {
  const [runs, setRuns] = useState<RunRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/runs");
        const data = await res.json();
        setRuns(data.runs ?? []);
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, []);

  return (
    <>
    <SubpageVisual variant="dashboard" />
      <div className="space-y-10">
      <FounderCommandCenter data={founderDashboardDemo} variant="full" />

      <section className="rounded-2xl border border-white/10 bg-black/25 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Saved ingestion runs</h2>
            <p className="text-sm text-zinc-500">Optional: capture runs from the legacy flow (API). New founders start with the demo cockpit above.</p>
          </div>
          <Link
            href="/demo"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-100 hover:bg-violet-500/20"
          >
            Generate brief in demo
          </Link>
        </div>
        <div className="mt-4 grid gap-3">
          {loading ? <p className="text-sm text-zinc-400">Loading runs…</p> : null}
          {!loading && runs.length === 0 ? <p className="text-sm text-zinc-400">No saved runs yet.</p> : null}
          {runs.map((run) => (
            <Link
              key={run.id}
              href={`/dashboard/runs/${run.id}`}
              className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-violet-400/35"
            >
              <p className="text-xs text-zinc-500">{new Date(run.createdAt).toLocaleString()}</p>
              <p className="mt-1 text-sm text-zinc-200">{run.result?.executiveSummary ?? "Operating run"}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  </>
  )
}
