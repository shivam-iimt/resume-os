import { z } from "zod";

export const blockSchema = z.object({
  type: z.string(),
  content: z.any().optional(),
});

export const createPortfolioSchema = z.object({
  title: z.string().min(1, "Title is required"),
  username: z.string().min(3, "Username must be at least 3 chars"),
  blocks: z.array(blockSchema).optional(),
  theme: z.string().optional(),
});

export const updatePortfolioSchema = z.object({
  title: z.string().optional(),
  blocks: z.array(blockSchema).optional(),
  theme: z.string().optional(),
});

export type CreatePortfolioInput = z.infer<typeof createPortfolioSchema>;
export type UpdatePortfolioInput = z.infer<typeof updatePortfolioSchema>;
