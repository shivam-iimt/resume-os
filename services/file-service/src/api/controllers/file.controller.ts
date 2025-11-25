import { Response } from "express";
import { AuthRequest } from "../../types/AuthRequest";

export const uploadFile = (req: AuthRequest, res: Response) => {
  res.json({
    message: "File uploaded successfully",
    file: req.file,
  });
};
