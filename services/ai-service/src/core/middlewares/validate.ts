import { Response, NextFunction } from "express";
import { AuthRequest } from "../../types/AuthRequest";

export const validate =
  (schema: any) => (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
      return res.status(400).json({
        error: err.errors?.[0]?.message || "Invalid AI request",
      });
    }
  };
