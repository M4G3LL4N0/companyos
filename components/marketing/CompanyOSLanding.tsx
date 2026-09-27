import Link from "next/link";
import { FounderCommandCenter } from "@/components/companyos/FounderCommandCenter";
import { CustomerSignalFeed } from "@/components/companyos/CustomerSignalFeed";
import { PriorityStack } from "@/components/companyos/PriorityStack";
import { RiskRadar } from "@/components/companyos/RiskRadar";
import { founderDashboardDemo } from "@/lib/founderDashboardDemo";
import type { BriefInputs } from "@/lib/briefGenerator";
import { generateCompanyBrief } from "@/lib/briefGenerator";

const bottleneck = [
  { title: "Too many updates", body: "Slack threads, decks, and dashboards all claim to be the source of truth." },
  { title: "Too many tools", body: "Every function brought software. Nobody brought an operating system." },
  { title: "Too many meetings", body: "Notes pile up. Owners do not. Execution clarity stays stuck in the founder's head." },
  { title: "Too little execution clarity", body: "The company moves—but not on purpose. Priorities change silently mid-week." },
];

const howSteps = [
  { title: "Ingest chaos", body: "Meetings, feedback, tickets, goals, blockers—paste the messy truth once." },
  { title: "Detect priorities", body: "CompanyOS surfaces the top stack with tradeoffs, not a backlog vanity contest." },
  { title: "Assign owners", body: "DRIs with load. No shared accountability theater." },
  { title: "Surface risks", body: "Delivery, market, team, capital, reputation—early, visible, mitigated." },
  { title: "Generate operating rhythm", body: "Weekly brief, follow-up queues, founder dashboard—execution on a cadence." },
];

const modules = [
  { title: "Memory", body: "Company context that compounds—decisions, signals, and what changed." },
  { title: "Priorities", body: "A living P0–P2 stack tied to outcomes, not intentions." },
  { title: "Risks", body: "Radar with owners for mitigation—not a slide buried in a folder." },
  { title: "Owners", body: "Lanes, load, and who actually decides." },
  { title: "Customer signals", body: "Verbatim themes routed to product action." },
  { title: "Metrics", body: "The few numbers decisions depend on—not vanity charts." },
  { title: "Weekly rhythm", body: "Monday publish, mid-week unblock, Friday retro—tight by default." },
];

const personas = [
  { title: "Solo founder", body: "Stop carrying the company in your head. Publish a brief the team can run against." },
  { title: "5-person startup", body: "One cockpit for priorities, owners, and customer language—speed without drift." },
  { title: "Venture studio", body: "Portfolio operating cadence with repeatable briefs across companies." },
  { title: "Chief of staff", body: "Turn messy updates into a weekly operating brief the CEO can trust." },
  { title: "COO / fractional operator", body: "Blocker queues, risk radar, and execution score for lean teams moving fast." },
];

const whyNow = [
  "AI can synthesize messy company inputs into decisions—not another doc.",
  "Founders are running leaner teams; leverage is the default survival skill.",
  "Speed matters more than planning theater—publish, execute, retro, repeat.",
  "Execution systems beat static dashboards—CompanyOS is the operating layer.",
];

const faqs = [
  {
    q: "Is CompanyOS a wiki or Notion replacement?",
    a: "No. Wikis store pages. CompanyOS turns inputs into priorities, owners, risks, and a weekly operating brief you can execute against.",
  },
  {
    q: "How is this different from a task manager?",
    a: "Task managers track tasks. CompanyOS tracks operating truth: what matters this week, who owns it, what is slipping, and what customers are actually saying.",
  },
  {
    q: "What ships in the MVP?",
    a: "Manual ingestion, local mock synthesis in the demo, founder dashboard views, and the weekly brief artifact—integrations follow based on your stack.",
  },
  {
    q: "Who is the buyer?",
    a: "Founders, startup CEOs, chiefs of staff, venture studios, fractional COOs, and small teams that need execution clarity without adding headcount.",
  },
  {
    q: "How do we think about security?",
    a: "Tenant isolation, audit trails, and least-privilege roles are first-class. Enterprise extends SSO, SCIM, and retention controls.",
  },
];

const previewInput: BriefInputs = {
  companyName: "Signalforge",
  stage: "mvp",
  teamSize: 8,
  goals: "Ship onboarding v2, stabilize OAuth, prove activation lift with 10 design partners.",
  meetingNotes:
    "Weekly leadership: OAuth regressions spooked two pilots. Product wants fewer experiments. Sales needs clearer packaging. Founder is the bottleneck on decisions.",
  customerFeedback:
    "Users love the insights but the first session feels fragile. Permissions confuse admins. Reliability reliability onboarding—the same phrases keep showing up in calls.",
  blockers: "Legal review on updated DPA. One senior engineer out sick. Dashboard latency under peak load.",
  urgency: "sprint",
};

export function CompanyOSLanding() {
  const preview = generateCompanyBrief(previewInput);

  return (
    <div className="space-y-20 pb-24 sm:space-y-24">
      <section className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-100">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Founder operating cockpit
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.15rem] lg:leading-[1.06]">
            Run your company from{" "}
            <span className="bg-gradient-to-r from-violet-200 via-indigo-200 to-slate-100 bg-clip-text text-transparent">one operating layer.</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg text-zinc-400">
            CompanyOS turns meetings, tickets, customer feedback, goals, and team updates into priorities, owners, risks, and weekly execution briefs.
          </p>
          <p className="text-sm font-medium tracking-wide text-zinc-500">Paste the chaos. Get the operating system.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/45 transition hover:brightness-110"
            >
              Generate an operating brief
            </Link>
            <Link
              href="/dashboard"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
            >
              View founder dashboard
            </Link>
            <Link href="/pricing" className="rounded-xl px-5 py-3 text-sm font-semibold text-zinc-400 transition hover:text-white">
              Pricing
            </Link>
          </div>
        </div>
        <FounderCommandCenter data={founderDashboardDemo} variant="hero" />
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-white">The founder bottleneck is not ambition. It is load.</h2>
          <p className="text-zinc-400">Know what matters, who owns it, and what is slipping—before the quarter quietly drifts.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {bottleneck.map((b) => (
            <article key={b.title} className="panel border-rose-500/15 bg-gradient-to-br from-rose-500/[0.07] to-transparent">
              <h3 className="text-base font-semibold text-rose-100/95">{b.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-white">How CompanyOS works</h2>
          <p className="text-zinc-400">Input chaos → detect priorities → assign owners → surface risks → generate operating rhythm.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {howSteps.map((step, i) => (
            <article key={step.title} className="panel relative overflow-hidden lg:col-span-1">
              <span className="absolute right-3 top-3 text-3xl font-semibold text-white/[0.06]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-semibold text-violet-100">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-white">Product preview</h2>
          <p className="text-zinc-400">
            Turn messy updates into a weekly operating brief. This live sample uses the same local synthesis as the demo—priorities, risk, owners, customer themes, and
            agenda.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <PriorityStack
              title="This week’s top 3 priorities"
              priorities={preview.topPriorities.map((p, i) => ({ ...p, rank: i === 0 ? "P0" : i === 1 ? "P1" : "P2" }))}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-200/90">Biggest risk</p>
                <p className="mt-2 text-sm text-zinc-200">
                  Delivery coupling on OAuth + onboarding—mitigate with a single DRI and a burn-down window before midweek.
                </p>
              </div>
              <CustomerSignalFeed themes={preview.customerThemes} title="Customer signal" />
            </div>
          </div>
          <div className="space-y-4">
            <RiskRadar radar={preview.riskRadar} />
            <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
              <h3 className="text-sm font-semibold text-white">Next meeting agenda</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-4 text-xs text-zinc-300 sm:text-sm">
                {preview.meetingAgenda.slice(0, 4).map((line) => (
                  <li key={line} className="leading-relaxed">
                    {line}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-white">Operating system modules</h2>
          <p className="text-zinc-400">Not a template dashboard—a closed loop from inputs to execution artifacts.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <article key={m.title} className="panel border-indigo-500/10">
              <h3 className="text-base font-semibold text-indigo-100">{m.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{m.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-white">Built for operators, not tourists</h2>
          <p className="text-zinc-400">If your job is to turn signal into motion, this is your cockpit.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <article key={p.title} className="panel">
              <h3 className="text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-white">Why now</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {whyNow.map((w) => (
            <li key={w} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
              {w}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-white">Pricing</h2>
            <p className="mt-2 text-zinc-400">Founder, Team, Studio, Enterprise—start where you are.</p>
          </div>
          <Link href="/pricing" className="text-sm font-semibold text-violet-200 hover:text-white">
            Full comparison →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Founder", price: "$99", note: "Weekly brief + cockpit" },
            { name: "Team", price: "$599", note: "Shared dashboard + owners" },
            { name: "Studio", price: "$1.9k", note: "Portfolio operating rhythm" },
            { name: "Enterprise", price: "Custom", note: "Governance + integrations" },
          ].map((t) => (
            <article key={t.name} className="panel flex flex-col border-violet-500/15">
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="mt-2 text-2xl font-semibold text-violet-200">{t.price}</p>
              <p className="mt-2 text-sm text-zinc-400">{t.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 space-y-6">
        <h2 className="text-3xl font-semibold text-white">FAQ</h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/25">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-100 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {f.q}
                  <span className="text-violet-300 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/25 via-zinc-950 to-indigo-600/15 px-6 py-12 text-center sm:px-10">
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="relative mx-auto max-w-2xl space-y-5">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Stop carrying the company in your head.</h2>
          <p className="text-zinc-300">Turn messy updates into a weekly operating brief—then open the dashboard and run the week like a system.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/demo" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100">
              Generate an operating brief
            </Link>
            <Link href="/dashboard" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              View founder dashboard
            </Link>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-white/10 pt-10 text-sm text-zinc-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} CompanyOS</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/brief" className="hover:text-zinc-300">
            Weekly Operating Brief
          </Link>
          <Link href="/about" className="hover:text-zinc-300">
            About
          </Link>
          <Link href="/demo" className="hover:text-zinc-300">
            Demo
          </Link>
        </div>
      </footer>
    </div>
  );
}
