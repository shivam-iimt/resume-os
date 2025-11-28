import { Router } from "express";
import { auth } from "../../core/middlewares/auth";
import { upload } from "../../core/config/upload";
import { validateFileUpload } from "../../core/middlewares/validate";
import { uploadFile } from "../controllers/file.controller";

const router = Router();

router.post(
  "/upload",
  auth,
  upload.single("file"),
  validateFileUpload,
  uploadFile
);

export default router;
