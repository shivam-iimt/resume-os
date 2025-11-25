import { Response } from "express";
import { AuthRequest } from "../../types/AuthRequest";
import { aiQueue } from "../../domain/queues/ai.queue";

export const generateResumeText = async (req: AuthRequest, res: Response) => {
  const { text, mode } = req.body;

  const job = await aiQueue.add("resume-rewrite", {
    userId: req.user!.id,
    text,
    mode,
  });

  res.json({ jobId: job.id, status: "queued" });
};
