import { Response } from "express";
import { AuthRequest } from "../../types/AuthRequest";
import userService from "../../domain/services/user.service";
import { updateProfileSchema } from "../../core/validation/user.validation";

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const user = await userService.getUser(userId);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to fetch profile" });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const parsed: any = updateProfileSchema.safeParse(req.body);
    if (!parsed.success) {
      const errors = parsed.error.errors.map((e: any) => ({
        path: e.path.join("."),
        message: e.message,
      }));
      return res
        .status(400)
        .json({ error: "Validation failed", details: errors });
    }

    const userId = req.user!.id;
    const updated = await userService.updateUser(userId, parsed.data);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to update profile" });
  }
};

export const getUserById = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUser(userId);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to fetch user" });
  }
};

export const deleteMyAccount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    await userService.deleteUser(userId);
    res.json({ message: "Account deleted successfully" });
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed to delete account" });
  }
};
