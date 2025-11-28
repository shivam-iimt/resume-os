import { Response } from "express";
import { AuthRequest } from "../../types/AuthRequest";

export const uploadFile = async (req: AuthRequest, res: Response) => {
  try {
    return res.json({
      message: "File uploaded successfully",
      folder: req.body.folder,
      file: {
        name: req.file?.originalname,
        mimetype: req.file?.mimetype,
        size: req.file?.size,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ error: "Upload failed" });
  }
};
