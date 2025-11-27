import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

console.log("Loaded ENV:", process.env.REDIS_HOST, process.env.REDIS_PORT);

import express from "express";
import cors from "cors";
import aiRoutes from "./api/routes/ai.routes";
import { requestLogger } from "./core/middlewares/requestLogger";
import { errorHandler } from "./core/middlewares/errorHandler";
import { logger } from "./core/logger";
import { securityMiddlewares, apiLimiter } from "./core/middlewares/security";

const app = express();
app.use(cors());
app.use(express.json());
app.use(securityMiddlewares);
app.use("/ai/*", apiLimiter);
app.use(requestLogger);
app.use("/ai", aiRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use(errorHandler);

const PORT = process.env.PORT || 4106;
app.listen(PORT, () => {
  logger.info(`AI-Service running on ${PORT}`);
});
