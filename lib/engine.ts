import type { CompanyInput, CompanyResult } from "./types";

const MODEL_VERSION = "companyos-sim-1.0.0";

function splitSignals(text: string): string[] {
  return text
    .split(/\n|\.|;/)
    .map((s) => s.trim())
    .filter((s) => s.length > 12)
    .slice(0, 8);
}

export function runCompanyOS(input: CompanyInput): CompanyResult {
  const meetings = splitSignals(input.meetingNotes);
  const feedback = splitSignals(input.customerFeedback);
  const tickets = splitSignals(input.tickets);
  const goals = splitSignals(input.goals);

  const companyMemory = [
    ...(meetings.slice(0, 3).map((m) => `Meeting signal: ${m}`)),
    ...(feedback.slice(0, 3).map((f) => `Customer signal: ${f}`)),
    ...(tickets.slice(0, 3).map((t) => `Execution signal: ${t}`)),
    ...(goals.slice(0, 2).map((g) => `Goal signal: ${g}`)),
  ].slice(0, 10);

  const priorities: CompanyResult["priorities"] = [
    { item: "Close top blocker from customer pain themes", owner: "Product Lead", urgency: "P0" },
    { item: "Reduce ticket backlog tied to onboarding and reliability", owner: "Engineering Manager", urgency: "P1" },
    { item: "Align weekly execution to declared goals", owner: "Founder/CEO", urgency: "P1" },
    { item: "Create feedback-to-roadmap loop with measurable outcomes", owner: "Operations", urgency: "P2" },
  ];

  const risks = [
    "Signal fragmentation across meetings, support, and product execution.",
    "Priority drift between stated goals and active work queues.",
    "Owner ambiguity for high-impact cross-functional issues.",
    "Lagging metrics may hide churn or delivery slippage early.",
  ];

  const metrics = [
    { metric: "Top-issue resolution cycle time", target: "< 10 days", owner: "Engineering" },
    { metric: "Customer pain recurrence rate", target: "-30% in 30 days", owner: "Product" },
    { metric: "Weekly priority completion", target: ">= 80%", owner: "Ops" },
    { metric: "Strategic goal alignment score", target: ">= 85/100", owner: "Founder" },
  ];

  const nextActions = [
    "Run weekly command-center review with founders and team leads.",
    "Assign explicit owner + due date to every P0/P1 priority.",
    "Map customer pain tags directly to active tickets and KPIs.",
    "Publish a live operating memo every Monday with risk changes.",
  ];

  const executiveSummary = `CompanyOS synthesized ${companyMemory.length} high-signal memory items and produced ${priorities.length} priorities with owners, risk flags, metrics, and next actions from your latest inputs.`;

  return { companyMemory, priorities, risks, metrics, nextActions, executiveSummary, modelVersion: MODEL_VERSION };
}
