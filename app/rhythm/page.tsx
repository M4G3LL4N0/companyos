import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function RhythmPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <div className="mx-auto max-w-3xl space-y-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300/90">Product</p>
      <h1 className="text-3xl font-semibold text-white">Operating rhythm</h1>
      <p className="text-zinc-400">
        Operating rhythm is the cadence that prevents drift: intake on a schedule, a weekly planning pass, a visible risk review, and a retro that feeds the next
        plan. CompanyOS is designed to make that loop lightweight enough for startups and rigorous enough for scaling teams.
      </p>
      <div className="panel border-violet-500/15 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
        {["Monday: publish brief", "Mid-week: unblock pass", "Thursday: customer signal review", "Friday: retro + next week cuts"].map((s) => (
          <div key={s} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            {s}
          </div>
        ))}
      </div>
      <Link href="/dashboard" className="inline-block text-sm font-semibold text-violet-200 hover:text-white">
        Open the founder dashboard →
      </Link>
    </div>
  </>
  )
}
