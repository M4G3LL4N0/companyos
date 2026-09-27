import { z } from "zod";

export const companySchema = z.object({
  meetingNotes: z.string().min(20),
  customerFeedback: z.string().min(20),
  tickets: z.string().min(20),
  goals: z.string().min(10),
});
