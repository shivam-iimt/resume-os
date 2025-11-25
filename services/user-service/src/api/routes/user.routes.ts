import { Router } from "express";
import {
  getProfile,
  updateProfile,
  getUserById,
  deleteMyAccount,
} from "../controllers/user.controller";
import { auth } from "../../core/middlewares/auth";

const router = Router();

router.get("/me", auth, getProfile);
router.put("/me", auth, updateProfile);
router.delete("/me", auth, deleteMyAccount);
router.get("/:id", getUserById);

export default router;
