import { Router } from "express";
import { auth } from "../../core/middlewares/auth";
import {
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getMyPortfolios,
  getPortfolio,
  publicPortfolio,
} from "../controllers/portfolio.controller";
import { validate } from "../../core/middlewares/validate";
import {
  createPortfolioSchema,
  updatePortfolioSchema,
} from "../../core/validation/portfolio.validation";

const router = Router();

router.post("/", auth, validate(createPortfolioSchema), createPortfolio);
router.get("/", auth, getMyPortfolios);
router.get("/:id", auth, getPortfolio);
router.put("/:id", auth, validate(updatePortfolioSchema), updatePortfolio);
router.delete("/:id", auth, deletePortfolio);
router.get("/public/:username", publicPortfolio);

export default router;
