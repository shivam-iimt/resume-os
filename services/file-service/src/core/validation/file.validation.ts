import { z } from "zod";

export const fileMetadataSchema = z.object({
  folder: z
    .string()
    .min(1, "Folder name is required")
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Folder can contain only letters, numbers, - and _"
    ),
});

export type FileMetadataInput = z.infer<typeof fileMetadataSchema>;
