import express from "express";
import cors from "cors";
import { connectDB } from "./core/config/db";
import notificationRoutes from "./api/routes/notification.routes";
import dotenv from "dotenv";
import path from "path";
import { requestLogger } from "./core/middlewares/requestLogger";
import { errorHandler } from "./core/middlewares/errorHandler";
import { logger } from "./core/logger";
import { securityMiddlewares, apiLimiter } from "./core/middlewares/security";

// 🔥 Load .env from correct directory (monorepo safe)
dotenv.config({
  path: path.join(__dirname, "../.env"),
});
console.log("ENV DEBUG (Notification-Service):", {
  PORT: process.env.PORT,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
});
const app = express();
app.use(cors());
app.use(express.json());
app.use(securityMiddlewares);
app.use("/notification/*", apiLimiter);
app.use(requestLogger);
app.use("/notification", notificationRoutes);
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use(errorHandler);

const PORT = process.env.PORT || 4107;

connectDB();
app.listen(PORT, () => {
  logger.info(`Notification-Service running on ${PORT}`);
});
