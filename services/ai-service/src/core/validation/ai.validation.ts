import { z } from "zod";

export const generateSummarySchema = z.object({
  text: z
    .string()
    .min(20, "Text must be at least 20 characters")
    .max(5000, "Text cannot exceed 5000 characters"),
});

export const improveTextSchema = z.object({
  text: z
    .string()
    .min(10, "Text must be at least 10 characters")
    .max(5000, "Text too long"),
  tone: z.enum(["formal", "casual", "professional", "friendly"]).optional(),
});

export const keywordsSchema = z.object({
  text: z.string().min(10, "Text must be at least 10 characters"),
  count: z.number().min(3).max(20).default(10),
});

export type GenerateSummaryInput = z.infer<typeof generateSummarySchema>;
export type ImproveTextInput = z.infer<typeof improveTextSchema>;
export type KeywordsInput = z.infer<typeof keywordsSchema>;
