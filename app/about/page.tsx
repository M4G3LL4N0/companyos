import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function AboutPage() {
  return (
    <>
    <SubpageVisual variant="about" />
      <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-violet-300/90">About</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">CompanyOS</h1>
        <p className="mt-4 text-lg text-zinc-400">
          CompanyOS is the closed-loop AI operating system for running a startup. It pulls together meetings, customer feedback, tickets, goals, tasks, metrics, and
          product decisions—then turns them into priorities, owners, risks, weekly operating briefs, follow-up queues, and a founder dashboard.
        </p>
        <p className="mt-4 text-sm font-medium text-violet-200/90">Paste the chaos. Get the operating system.</p>
      </div>

      <div className="panel border-violet-500/20 space-y-4">
        <h2 className="text-lg font-semibold text-white">What we are not</h2>
        <p className="text-sm text-zinc-300">
          Not a company wiki. Not a generic task manager. Not a dashboard template. CompanyOS is the founder command center that turns company inputs into execution.
        </p>
      </div>

      <div className="panel border-indigo-500/15 space-y-3">
        <h2 className="text-lg font-semibold text-white">Who it is for</h2>
        <p className="text-sm text-zinc-400">
          Founders, startup CEOs, chiefs of staff, venture studios, fractional COOs, and small teams moving fast—the people who feel the bottleneck when updates,
          tools, and meetings multiply but clarity does not.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/demo" className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110">
          Try the Operating Brief Generator
        </Link>
        <Link href="/pricing" className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-white/5">
          Pricing
        </Link>
      </div>
    </div>
  </>
  )
}
