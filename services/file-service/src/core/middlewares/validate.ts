import { Response, NextFunction } from "express";
import { AuthRequest } from "../../types/AuthRequest";
import { fileMetadataSchema } from "../validation/file.validation";

export const validateFileUpload = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate folder or metadata
    fileMetadataSchema.parse(req.body);

    // Check file exists
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    // Allowed MIME types
    const allowedMime = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
      "application/pdf",
    ];

    if (!allowedMime.includes(req.file.mimetype)) {
      return res.status(400).json({
        error: "Invalid file type. Allowed formats: png, jpg, jpeg, webp, pdf",
      });
    }

    // Check file size (multer ensures but double-check)
    if (req.file.size > 5 * 1024 * 1024) {
      return res.status(400).json({ error: "File exceeds 5MB limit" });
    }

    next();
  } catch (err: any) {
    return res.status(400).json({
      error: err.errors?.[0]?.message || err.message || "Validation error",
    });
  }
};
