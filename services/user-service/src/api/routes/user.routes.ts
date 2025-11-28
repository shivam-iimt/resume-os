import { Router } from "express";
import {
  getProfile,
  updateProfile,
  getUserById,
  deleteMyAccount,
} from "../controllers/user.controller";
import { auth } from "../../core/middlewares/auth";
import { validate } from "../../core/middlewares/validate";
import { updateProfileSchema } from "../../core/validation/user.validation";

const router = Router();

router.get("/me", auth, getProfile);
router.put(
  "/me",
  auth,
  validate(updateProfileSchema),
  updateProfile
);
router.delete("/me", auth, deleteMyAccount);
router.get("/:id", getUserById);

export default router;
