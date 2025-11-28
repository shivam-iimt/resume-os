import { Router } from "express";
import { auth } from "../../core/middlewares/auth";
import {
  generateSummary,
  improveText,
  extractKeywords,
} from "../controllers/ai.controller";
import { validate } from "../../core/middlewares/validate";

import {
  generateSummarySchema,
  improveTextSchema,
  keywordsSchema,
} from "../../core/validation/ai.validation";

const router = Router();

router.post(
  "/summary",
  auth,
  validate(generateSummarySchema),
  generateSummary
);
router.post("/improve", auth, validate(improveTextSchema), improveText);
router.post("/keywords", auth, validate(keywordsSchema), extractKeywords);

export default router;
