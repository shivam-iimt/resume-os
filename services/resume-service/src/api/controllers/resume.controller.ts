import { Response } from "express";
import { AuthRequest } from "../../types/AuthRequest";
import resumeService from "../../domain/services/resume.service";

export const createResume = async (req: AuthRequest, res: Response) => {
  const data = { ...req.body, userId: req.user!.id };
  const resume = await resumeService.createResume(data);
  res.json(resume);
};

export const getResume = async (req: AuthRequest, res: Response) => {
  const resume = await resumeService.getResume(req.params.id);
  res.json(resume);
};

export const getMyResumes = async (req: AuthRequest, res: Response) => {
  const resumes = await resumeService.getUserResumes(req.user!.id);
  res.json(resumes);
};

export const updateResume = async (req: AuthRequest, res: Response) => {
  const resume = await resumeService.updateResume(req.params.id, req.body);
  res.json(resume);
};

export const deleteResume = async (req: AuthRequest, res: Response) => {
  await resumeService.deleteResume(req.params.id);
  res.json({ message: "Resume deleted" });
};
