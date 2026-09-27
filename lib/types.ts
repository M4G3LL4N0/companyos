export type CompanyInput = {
  meetingNotes: string;
  customerFeedback: string;
  tickets: string;
  goals: string;
};

export type CompanyResult = {
  companyMemory: string[];
  priorities: Array<{ item: string; owner: string; urgency: "P0" | "P1" | "P2" }>;
  risks: string[];
  metrics: Array<{ metric: string; target: string; owner: string }>;
  nextActions: string[];
  executiveSummary: string;
  modelVersion: string;
};
