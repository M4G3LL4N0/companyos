import type { RiskRadar } from "@/lib/briefGenerator";

export type BlockerItem = { id: string; title: string; owner: string; severity: "P0" | "P1" | "P2"; age: string };
export type SignalItem = { id: string; title: string; source: string; strength: "high" | "med" | "low" };
export type DecisionItem = { id: string; title: string; status: "open" | "decided" | "queued"; owner: string };
export type DayItem = { day: string; label: string; type: "deep" | "sync" | "ship" | "review" };

export type FounderDashboardData = {
  executionScore: number;
  weeklyPriorities: Array<{ title: string; owner: string; lane: string; rank: "P0" | "P1" | "P2" }>;
  owners: Array<{ name: string; focus: string; load: "light" | "balanced" | "heavy" }>;
  blockerQueue: BlockerItem[];
  customerSignals: SignalItem[];
  riskRadar: RiskRadar;
  meetingDebt: Array<{ id: string; title: string; hours: string; owner: string }>;
  productDecisions: DecisionItem[];
  next7Days: DayItem[];
  operatingRhythm: string[];
};

export const founderDashboardDemo: FounderDashboardData = {
  executionScore: 76,
  weeklyPriorities: [
    { title: "Ship reliability patch for OAuth edge case blocking two enterprise pilots", owner: "Alex (Eng)", lane: "Delivery", rank: "P0" },
    { title: "Close narrative on ICP + packaging so sales stops custom scoping every deal", owner: "Jordan (GTM)", lane: "Revenue", rank: "P1" },
    { title: "Instrument activation funnel through day-7 with one shared dashboard", owner: "Sam (Product)", lane: "Metrics", rank: "P1" },
  ],
  owners: [
    { name: "CEO", focus: "Sequencing · capital · top-3 edits", load: "heavy" },
    { name: "Eng lead", focus: "Reliability + staffing the critical path", load: "heavy" },
    { name: "Product", focus: "Customer truth → roadmap cuts", load: "balanced" },
    { name: "Chief of Staff", focus: "Operating brief + follow-up queues", load: "balanced" },
  ],
  blockerQueue: [
    { id: "b1", title: "Legal DPA variant blocking EU prospect", owner: "CEO", severity: "P0", age: "6d" },
    { id: "b2", title: "Design capacity for onboarding v2", owner: "Product", severity: "P1", age: "3d" },
    { id: "b3", title: "Infra spike: dashboard timeouts under load", owner: "Eng lead", severity: "P0", age: "1d" },
  ],
  customerSignals: [
    { id: "s1", title: "“Setup feels fragile—first hour has to be boringly reliable.”", source: "Enterprise pilot", strength: "high" },
    { id: "s2", title: "“We love insights but permissions confuse admins on day 1.”", source: "Onboarding call", strength: "med" },
    { id: "s3", title: "“If exports were faster we would live in this daily.”", source: "Power user", strength: "med" },
  ],
  riskRadar: {
    delivery: "high",
    market: "med",
    team: "med",
    capital: "low",
    reputation: "low",
  },
  meetingDebt: [
    { id: "m1", title: "Leadership sync notes unpublished → no owners", hours: "2.5h", owner: "CoS" },
    { id: "m2", title: "Customer advisory board: themes not routed to roadmap", hours: "1.5h", owner: "Product" },
    { id: "m3", title: "Weekly pipeline review: decisions pending on discounting", hours: "1h", owner: "CEO" },
  ],
  productDecisions: [
    { id: "d1", title: "Cut parallel experiment #4 to protect onboarding v2", status: "open", owner: "CEO" },
    { id: "d2", title: "Default permissions model: workspace vs project scope", status: "queued", owner: "Product" },
    { id: "d3", title: "Ship audit logs in MVP vs wait for enterprise deal", status: "decided", owner: "Eng lead" },
  ],
  next7Days: [
    { day: "Mon", label: "Publish weekly operating brief + P0 owners", type: "sync" },
    { day: "Tue", label: "Deep work: OAuth reliability + tests", type: "deep" },
    { day: "Wed", label: "Customer signal review (verbatim → tickets)", type: "review" },
    { day: "Thu", label: "Unblock pass: legal + design", type: "sync" },
    { day: "Fri", label: "Ship / demo reliability patch", type: "ship" },
    { day: "Sat", label: "Founder off / async triage only", type: "deep" },
    { day: "Sun", label: "Prep metrics board for Monday", type: "review" },
  ],
  operatingRhythm: [
    "Monday 9:00 — publish brief + stack rank",
    "Wednesday — customer signal ingestion",
    "Thursday — risk radar + mitigation owners",
    "Friday — retro + next week cuts",
  ],
};
