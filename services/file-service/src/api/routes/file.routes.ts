import { Router } from "express";
import { auth } from "../../core/middlewares/auth";
import { upload } from "../../core/middlewares/upload";
import { uploadFile } from "../controllers/file.controller";

const router = Router();

router.post("/upload", auth, upload.single("file"), uploadFile);

export default router;
