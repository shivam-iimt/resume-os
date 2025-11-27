import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./core/config/db";
import userRoutes from "./api/routes/user.routes";
import { requestLogger } from "./core/middlewares/requestLogger";
import { errorHandler } from "./core/middlewares/errorHandler";
import { logger } from "./core/logger";
import { securityMiddlewares, apiLimiter } from "./core/middlewares/security";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(securityMiddlewares);
app.use("/user/*", apiLimiter);
app.use(requestLogger);
app.use("/user", userRoutes);
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use(errorHandler);

const PORT = process.env.PORT || 4102;

connectDB();
app.listen(PORT, () => {
  logger.info(`User-Service running on ${PORT}`);
});
