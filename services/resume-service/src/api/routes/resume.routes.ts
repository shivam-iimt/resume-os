import { Router } from "express";
import { auth } from "../../core/middlewares/auth";
import {
  createResume,
  getResume,
  getMyResumes,
  updateResume,
  deleteResume,
} from "../controllers/resume.controller";
import { validate } from "../../core/middlewares/validate";
import {
  createResumeSchema,
  updateResumeSchema,
} from "../../core/validation/resume.validation";


const router = Router();

router.post("/", auth, validate(createResumeSchema), createResume);
router.get("/", auth, getMyResumes);
router.get("/:id", auth, getResume);
router.put("/:id", auth, validate(updateResumeSchema), updateResume);
router.delete("/:id", auth, deleteResume);

export default router;
