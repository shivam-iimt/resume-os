import { z } from "zod";

export const createResumeSchema = z.object({
  title: z.string().min(2, "Title is required"),
  summary: z.string().optional(),
  skills: z.array(z.string()).optional(),
  experiences: z
    .array(
      z.object({
        company: z.string().min(1),
        role: z.string().min(1),
        startDate: z.string(),
        endDate: z.string().optional(),
      })
    )
    .optional(),
});

export const updateResumeSchema = createResumeSchema.partial();

export const addExperienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  startDate: z.string(),
  endDate: z.string().optional(),
});

export const addEducationSchema = z.object({
  school: z.string().min(1),
  degree: z.string().min(1),
  startYear: z.number(),
  endYear: z.number().optional(),
});

export type CreateResumeInput = z.infer<typeof createResumeSchema>;
export type UpdateResumeInput = z.infer<typeof updateResumeSchema>;
