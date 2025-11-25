import { Response } from "express";
import { AuthRequest } from "../../types/AuthRequest";
import userService from "../../domain/services/user.service";

export const getProfile = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.id;
  const user = await userService.getUser(userId);
  res.json(user);
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.id;
  const updated = await userService.updateUser(userId, req.body);
  res.json(updated);
};

// GET /:id (public)
export const getUserById = async (req: AuthRequest, res: Response) => {
  const userId = req.params.id;
  const user = await userService.getUser(userId);
  res.json(user);
};

// DELETE /me
export const deleteMyAccount = async (req: AuthRequest, res: Response) => {
  const userId = req.user!.id;
  await userService.deleteUser(userId);
  res.json({ message: "Account deleted successfully" });
};
