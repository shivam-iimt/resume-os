import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const ENV = {
  PORT: process.env.PORT || 4100,
  JWT_SECRET: process.env.JWT_SECRET || "secret123",
};
