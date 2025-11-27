import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./api/routes/auth.routes";
import connectDB from "./core/config/db";
import { securityMiddlewares, apiLimiter } from "./core/middlewares/security";
import { requestLogger } from "./core/middlewares/requestLogger";
import { errorHandler } from "./core/middlewares/errorHandler";
import { logger } from "./core/logger";

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();
app.use(cors());
app.use(express.json());
app.use(securityMiddlewares);
app.use("/auth/*", apiLimiter);
app.use(requestLogger);
app.use("/auth", authRoutes);
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use(errorHandler);

const PORT = process.env.PORT || 4101;


connectDB();
app.listen(PORT, () => {
  logger.info(`Auth-Service running on ${PORT}`);
});
