import { operatingDimensions, type CompanyStage, type RiskLevel, type UrgencyLevel } from "@/lib/operatingScoring";

export type { CompanyStage, UrgencyLevel } from "@/lib/operatingScoring";

export type BriefInputs = {
  companyName: string;
  stage: CompanyStage;
  teamSize: number;
  goals: string;
  meetingNotes: string;
  customerFeedback: string;
  blockers: string;
  urgency: UrgencyLevel;
};

export type ExecutionDimensions = {
  clarity: number;
  ownership: number;
  urgency: number;
  customerSignal: number;
  riskExposure: number;
  momentum: number;
};

export type RiskRadar = {
  delivery: RiskLevel;
  market: RiskLevel;
  team: RiskLevel;
  capital: RiskLevel;
  reputation: RiskLevel;
};

export type BriefOutput = {
  weeklyBrief: string[];
  topPriorities: Array<{ title: string; owner: string; lane: string }>;
  owners: Array<{ name: string; focus: string; load: "light" | "balanced" | "heavy" }>;
  riskRadar: RiskRadar;
  nextActions: string[];
  executionScore: number;
  executionBreakdown: ExecutionDimensions;
  founderFocus: string;
  customerThemes: string[];
  meetingAgenda: string[];
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function hashSeed(text: string): number {
  let h = 0;
  for (let i = 0; i < text.length; i += 1) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h;
}

function wordHits(text: string, words: string[]) {
  const t = text.toLowerCase();
  return words.reduce((acc, w) => acc + (t.includes(w) ? 1 : 0), 0);
}

function stageLabel(stage: CompanyStage): string {
  const m: Record<CompanyStage, string> = {
    idea: "idea-stage",
    mvp: "MVP",
    "early-revenue": "early revenue",
    scaling: "scaling",
  };
  return m[stage];
}

function urgencyCopy(urgency: UrgencyLevel): string {
  const m: Record<UrgencyLevel, string> = {
    steady: "weekly operating cadence with light mid-week nudges",
    focused: "tight weekly plan with two mid-week owner checkpoints",
    sprint: "daily burn-down on the top 3 until green",
    critical: "war-room tempo: one critical path, everything else queued",
  };
  return m[urgency];
}

function radarFromInputs(seed: number, blockers: string, feedback: string, meetingNotes: string): RiskRadar {
  const b = blockers.length;
  const level = (n: number): RiskLevel => (n > 2 ? "high" : n > 1 ? "med" : "low");
  const jitter = (i: number) => ((seed >> (i * 3)) & 3) / 4;
  return {
    delivery: level(Math.min(3, (b > 200 ? 2 : b > 90 ? 1 : 0) + jitter(0) + wordHits(meetingNotes, ["slip", "delay", "blocked"]) * 0.5)),
    market: level(Math.min(3, wordHits(feedback, ["churn", "competitor", "pricing", "slow", "switching"]) + jitter(1))),
    team: level(Math.min(3, wordHits(blockers, ["hiring", "burnout", "context", "morale", "leave"]) + jitter(2))),
    capital: level(Math.min(3, wordHits(blockers + feedback, ["runway", "budget", "burn", "cash"]) + jitter(3))),
    reputation: level(Math.min(3, wordHits(feedback, ["trust", "bug", "outage", "security", "broken"]) + jitter(4))),
  };
}

export function generateCompanyBrief(input: BriefInputs): BriefOutput {
  const seed = hashSeed(`${input.companyName}|${input.goals}|${input.meetingNotes}|${input.customerFeedback}|${input.blockers}`);
  const stage = stageLabel(input.stage);
  const team = clamp(input.teamSize || 1, 1, 5000);
  const urgency = input.urgency;

  const dimsIn: Parameters<typeof operatingDimensions>[0] = {
    goalsText: input.goals,
    meetingNotes: input.meetingNotes,
    customerFeedback: input.customerFeedback,
    blockers: input.blockers,
    teamSize: team,
    stage: input.stage,
    urgency,
  };
  const scored = operatingDimensions(dimsIn);
  const { customerThemes, executionScore, breakdown } = scored;

  const goalsSignals = wordHits(input.goals, ["revenue", "launch", "retention", "pipeline", "quality", "scale", "ARR", "NRR"]);
  const meetingSignals = wordHits(input.meetingNotes, ["slip", "delay", "blocker", "priority", "launch", "customer"]);
  const feedbackSignals = wordHits(input.customerFeedback, ["slow", "confusing", "bug", "love", "need", "request", "wait"]);

  const riskRadar = radarFromInputs(seed, input.blockers, input.customerFeedback, input.meetingNotes);

  const name = input.companyName.trim() || "Your company";

  const weeklyBrief = [
    `${name} · ${stage} · ~${team} people. Rhythm: ${urgencyCopy(urgency)}.`,
    `What matters now: ${meetingSignals ? "meetings are surfacing delivery pressure—name owners and cut parallel work." : "clarity is recoverable—publish a top-3 stack with explicit tradeoffs before midweek."}`,
    `Customer loop: ${feedbackSignals ? "verbatim pain is loud enough to drive a ship decision this week." : "signals are thin—book five calls and paste quotes; CompanyOS compounds on raw language."}`,
    `Execution posture: blockers ${input.blockers.trim().length > input.goals.trim().length ? "outweigh written goals—rewrite goals as outcomes or execution score will keep bleeding." : "are contained relative to goals—press advantage on the top customer-visible win."}`,
  ];

  const topPriorities = [
    {
      title:
        feedbackSignals > 1
          ? "Ship the customer-visible fix that collapses the loudest onboarding or reliability theme"
          : "Publish the single north-star outcome for the next 7 days (metric + date)",
      owner: team < 20 ? "Founder / CEO" : "Chief of Staff",
      lane: "Customer + product",
    },
    {
      title:
        meetingSignals > 1
          ? "Close cross-team blockers with one DRI each and written exit criteria"
          : "Run a 40-minute decision session to kill two ambiguous initiatives",
      owner: team < 35 ? "Head of Engineering" : "Engineering Director",
      lane: "Execution",
    },
    {
      title:
        goalsSignals > 1
          ? "Re-baseline roadmap vs goals—explicit cuts, not a longer backlog"
          : "Instrument one funnel metric end-to-end and review it daily",
      owner: "Product Lead",
      lane: "Focus",
    },
  ];

  const owners = [
    { name: "Founder / CEO", focus: "Sequencing, capital, narrative, top-3 edits", load: team < 25 ? ("heavy" as const) : ("balanced" as const) },
    { name: "Product", focus: "Customer pain → roadmap tradeoffs", load: "balanced" as const },
    { name: "Engineering", focus: "Reliability + commitments that touch revenue", load: urgency === "critical" ? ("heavy" as const) : ("balanced" as const) },
    { name: "Go-to-market", focus: "Pipeline truth + sharp ICP story", load: "light" as const },
  ];

  const themeLine =
    customerThemes.length > 0
      ? `Customer themes showing repetition: ${customerThemes.slice(0, 4).join(", ")}—assign owners before the story hardens into churn.`
      : "Customer themes are diffuse—force five verbatim quotes into one shared doc this week.";

  const nextActions = [
    themeLine,
    "Paste Monday notes + Friday retro into the same thread so priorities stop changing silently.",
    "Assign every P0 with one DRI, one metric, and one date—shared ownership is focus risk.",
    "Run a 15-minute risk radar: delivery, market, team, capital, reputation—mitigations named.",
    "Calendar Friday retro: shipped vs slipped vs next week's cuts.",
  ];

  const founderFocus =
    urgency === "critical"
      ? "You are the incident commander: one critical path, delegate everything else, protect sleep."
      : team > 100
        ? "Design the operating system: fewer priorities, visible DRIs, chief-of-staff rhythm—stop being the router."
        : "Be editor-in-chief: cut one initiative, elevate one customer metric, personally unblock one cross-team dependency.";

  const meetingAgenda = [
    `0:00 · Operating snapshot: execution score ${executionScore} (clarity ${breakdown.clarity}, owners ${breakdown.ownership})`,
    `0:08 · Top 3 priorities: ${topPriorities.map((p) => p.title.slice(0, 42)).join(" · ")}`,
    `0:22 · Blockers queue: assign DRI + exit criteria for each (no “the team”)`,
    `0:35 · Customer signals: themes ${customerThemes.slice(0, 3).join(", ") || "TBD—bring quotes"}`,
    `0:45 · Risks: delivery ${riskRadar.delivery}, market ${riskRadar.market}, team ${riskRadar.team}`,
    `0:55 · Decisions + next actions (publish brief within 60 minutes of meeting end)`,
  ];

  return {
    weeklyBrief,
    topPriorities,
    owners,
    riskRadar,
    nextActions,
    executionScore,
    executionBreakdown: breakdown,
    founderFocus,
    customerThemes,
    meetingAgenda,
  };
}
