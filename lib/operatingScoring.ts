export type CompanyStage = "idea" | "mvp" | "early-revenue" | "scaling";

export type UrgencyLevel = "steady" | "focused" | "sprint" | "critical";

export type RiskLevel = "low" | "med" | "high";

export type OperatingSignals = {
  goalsText: string;
  meetingNotes: string;
  customerFeedback: string;
  blockers: string;
  teamSize: number;
  stage: CompanyStage;
  urgency: UrgencyLevel;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3);
}

/** Repeated stems in customer feedback raise signal strength (founders miss patterns). */
export function customerThemeStrength(feedback: string): { strength: number; themes: string[] } {
  const tokens = tokenize(feedback);
  const counts = new Map<string, number>();
  for (const t of tokens) counts.set(t, (counts.get(t) ?? 0) + 1);
  const themes = [...counts.entries()]
    .filter(([, c]) => c >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([w]) => w);
  const repeatScore = [...counts.values()].reduce((acc, c) => acc + (c >= 2 ? c - 1 : 0), 0);
  const strength = clamp(35 + repeatScore * 8 + (feedback.length > 160 ? 12 : 0), 28, 98);
  return { strength, themes: themes.length ? themes : tokenize(feedback).slice(0, 3) };
}

export function blockerSeverity(blockers: string): number {
  const len = blockers.trim().length;
  const signals = ["blocked", "stuck", "waiting", "legal", "hiring", "burn", "down", "outage"].filter((w) =>
    blockers.toLowerCase().includes(w),
  ).length;
  return clamp(20 + Math.min(len / 8, 40) + signals * 8, 18, 95);
}

export function urgencyScore(urgency: UrgencyLevel): number {
  const m: Record<UrgencyLevel, number> = {
    steady: 52,
    focused: 66,
    sprint: 78,
    critical: 90,
  };
  return m[urgency];
}

/** Mentions of owner/DRI in notes improve clarity; absence hurts. */
export function ownerClarity(meetingNotes: string, blockers: string): number {
  const text = `${meetingNotes} ${blockers}`.toLowerCase();
  const positive = ["dri", "owner", "owns", "assigned", "lead on", "responsible"].some((w) => text.includes(w));
  const negative = ["unclear", "tbd", "someone should", "the team"].filter((w) => text.includes(w)).length;
  let score = 58;
  if (positive) score += 18;
  score -= negative * 10;
  if (meetingNotes.trim().length < 40) score -= 12;
  return clamp(score, 22, 96);
}

/** Parallel work + thin goals increase focus risk. */
export function focusRisk(goals: string, meetingNotes: string, teamSize: number): number {
  const goalLines = goals.split(/[\n.;]/).filter((s) => s.trim().length > 4).length;
  const meetingChaos = ["parallel", "too many", "context switch", "priority", "re-prior"].filter((w) =>
    `${goals} ${meetingNotes}`.toLowerCase().includes(w),
  ).length;
  let risk = 32 + meetingChaos * 12 - Math.min(goalLines * 4, 20) + (teamSize > 60 ? 10 : 0);
  return clamp(risk, 18, 92);
}

export function computeExecutionScore(s: OperatingSignals, breakdown: {
  customerSignal: number;
  ownerClarity: number;
  blockerSeverity: number;
  focusRisk: number;
}): number {
  const goalsLen = s.goalsText.trim().length;
  const blockersLen = s.blockers.trim().length;
  const goalPenalty = blockersLen > goalsLen && goalsLen > 0 ? 14 : blockersLen > goalsLen * 1.4 && goalsLen > 0 ? 8 : 0;

  const stageBoost: Record<CompanyStage, number> = {
    idea: 2,
    mvp: 4,
    "early-revenue": 0,
    scaling: -4,
  };

  const base =
    48 +
    breakdown.customerSignal * 0.22 +
    breakdown.ownerClarity * 0.18 +
    (100 - breakdown.blockerSeverity) * 0.15 +
    (100 - breakdown.focusRisk) * 0.12 +
    stageBoost[s.stage] -
    goalPenalty;

  return clamp(Math.round(base + (s.urgency === "critical" ? -4 : s.urgency === "sprint" ? 3 : 0)), 36, 94);
}

export function operatingDimensions(s: OperatingSignals) {
  const { strength: customerSignal, themes } = customerThemeStrength(s.customerFeedback);
  const blockSev = blockerSeverity(s.blockers);
  const owners = ownerClarity(s.meetingNotes, s.blockers);
  const focus = focusRisk(s.goalsText, s.meetingNotes, s.teamSize);
  const urgencyDim = urgencyScore(s.urgency);

  const clarity = clamp(52 + (s.goalsText.length > 100 ? 14 : 0) - (s.meetingNotes.length < 50 ? 10 : 0) + (themes.length >= 2 ? 6 : 0), 28, 96);
  const ownership = owners;
  const riskExposure = clamp(blockSev + focus * 0.35, 25, 94);
  const momentum = clamp(62 + (s.stage === "scaling" ? -6 : 4) - (blockSev > 70 ? 10 : 0), 30, 94);

  const executionScore = computeExecutionScore(s, {
    customerSignal,
    ownerClarity: owners,
    blockerSeverity: blockSev,
    focusRisk: focus,
  });

  return {
    executionScore,
    customerThemes: themes,
    customerSignal,
    blockerSeverity: blockSev,
    ownerClarity: owners,
    focusRisk: focus,
    urgencyDim,
    breakdown: {
      clarity,
      ownership,
      urgency: urgencyDim,
      customerSignal,
      riskExposure,
      momentum,
    },
  };
}
