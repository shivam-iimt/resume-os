import { Request, Response } from "express";
import authService from "../../domain/services/auth.service";
import {
  signupSchema,
  loginSchema,
} from "../../core/validation/auth.validation";

export const signup = async (req: Request, res: Response) => {
  try {
    const parsed: any = signupSchema.safeParse(req.body);
    if (!parsed.success) {
      const errors = parsed.error.errors.map((e: any) => ({
        path: e.path.join("."),
        message: e.message,
      }));
      return res
        .status(400)
        .json({ error: "Validation failed", details: errors });
    }

    const { email, password, name } = parsed.data;
    const result = await authService.signup(email, password, name);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Signup failed" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const parsed: any = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      const errors = parsed.error.errors.map((e: any) => ({
        path: e.path.join("."),
        message: e.message,
      }));
      return res
        .status(400)
        .json({ error: "Validation failed", details: errors });
    }

    const { email, password } = parsed.data;
    const result = await authService.login(email, password);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Login failed" });
  }
};
