import { Response } from "express";
import { AuthRequest } from "../../types/AuthRequest";

export const generateSummary = async (req: AuthRequest, res: Response) => {
  const { text } = req.body;

  // Mock AI for now
  const summary = text.slice(0, 100) + "...";

  return res.json({
    success: true,
    summary,
  });
};

export const improveText = async (req: AuthRequest, res: Response) => {
  const { text, tone = "professional" } = req.body;

  const improved = `[${tone.toUpperCase()} VERSION] ${text}`;

  return res.json({
    success: true,
    improved,
  });
};

export const extractKeywords = async (req: AuthRequest, res: Response) => {
  const { text, count } = req.body;

  const words = text.split(" ");
  const keywords = words.slice(0, count);

  return res.json({
    success: true,
    keywords,
  });
};
