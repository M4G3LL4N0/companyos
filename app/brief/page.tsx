import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { WeeklyBrief } from "@/components/companyos/WeeklyBrief";

const briefSections = {
  mattersNow: [
    "Ship the customer-visible reliability fix tied to onboarding—two pilots are watching.",
    "Publish the top-3 stack with explicit cuts so engineering stops context-switching.",
    "Make pipeline truth boring: one narrative, one packaging story, one discount policy.",
  ],
  slipping: [
    "SSO workstream drifted one sprint—without a DRI and exit criteria it will steal another.",
    "Meeting notes from advisory calls are not routed to tickets—signal is decaying.",
    "Instrumentation for activation is still partial—decisions are flying blind past day 3.",
  ],
  customers: [
    "“First hour has to feel boringly reliable”—same phrase across three transcripts.",
    "Permissions confuse admins on day one—this is a packaging + product education problem.",
    "Exports speed is becoming a retention wedge for power users—do not ignore the tail.",
  ],
  founderNext: [
    "Personally unblock legal + design for onboarding v2—set a 48-hour decision deadline.",
    "Cut one parallel experiment publicly so the team feels the tradeoff, not just hears it.",
    "Review the execution score breakdown and pick one dimension to raise before Friday.",
  ],
  delegate: [
    "Chief of staff: publish the weekly operating brief and follow-up queue from Monday notes.",
    "Product: own verbatim themes → roadmap mapping with acceptance criteria.",
    "Eng lead: own OAuth reliability burn-down and communicate risk deltas daily.",
  ],
  ignore: [
    "Non-urgent feature requests without revenue linkage this week.",
    "Internal tooling polish that does not change customer outcomes or retention.",
    "Debate on perfect OKR wording—ship the brief, refine next cycle.",
  ],
};

export default function BriefPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-violet-300/90">Differentiator</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Weekly Operating Brief</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          The artifact founders publish so the company stops guessing. Not a wiki page—a narrative that ties priorities, owners, risks, and customer language to what
          happens this week.
        </p>
      </div>

      <WeeklyBrief sections={briefSections} />

      <div className="flex flex-wrap gap-3">
        <Link href="/demo" className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110">
          Generate a sample brief
        </Link>
        <Link href="/dashboard" className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-white/5">
          View founder dashboard
        </Link>
      </div>
    </div>
  </>
  )
}
