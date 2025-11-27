import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").optional(),
  email: z.string().email("Invalid email format").optional(),
  bio: z.string().max(500, "Bio too long").optional(),
  avatar: z.string().url("Avatar must be a valid URL").optional(),
  theme: z.enum(["light", "dark"]).optional(),
  language: z.string().min(2).max(5).optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
