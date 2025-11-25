import { Router } from "express";
import { auth } from "../../core/middlewares/auth";
import {
  createResume,
  getResume,
  getMyResumes,
  updateResume,
  deleteResume,
} from "../controllers/resume.controller";

const router = Router();

router.post("/", auth, createResume);
router.get("/", auth, getMyResumes);
router.get("/:id", auth, getResume);
router.put("/:id", auth, updateResume);
router.delete("/:id", auth, deleteResume);

export default router;
