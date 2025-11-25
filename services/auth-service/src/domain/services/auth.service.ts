import User from "../models/User";
import { hashPassword, comparePassword } from "../../core/utils/hash";
import { signToken } from "../../core/utils/jwt";

class AuthService {
  async signup(email: string, password: string, name?: string) {
    const existing = await User.findOne({ email });
    if (existing) throw new Error("User already exists");

    const hashed = await hashPassword(password);

    const user = await User.create({
      email,
      password: hashed,
      name
    });

    const token = signToken({ id: user._id });
    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const match = await comparePassword(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const token = signToken({ id: user._id });
    return { user, token };
  }
}

export default new AuthService();
