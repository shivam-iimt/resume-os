import { Router } from "express";
import { auth } from "../../core/middlewares/auth";
import { generateResumeText } from "../controllers/ai.controller";

const router = Router();

router.post("/resume/rewrite", auth, generateResumeText);

export default router;
