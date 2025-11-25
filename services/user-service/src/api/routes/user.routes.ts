import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/user.controller";
import { auth } from "../../core/middlewares/auth";

const router = Router();

router.get("/me", auth, getProfile);
router.put("/me", auth, updateProfile);

export default router;
