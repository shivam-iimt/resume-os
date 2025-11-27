import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fileRoutes from "./api/routes/file.routes";
import { requestLogger } from "./core/middlewares/requestLogger";
import { errorHandler } from "./core/middlewares/errorHandler";
import { logger } from "./core/logger";
import { securityMiddlewares, apiLimiter } from "./core/middlewares/security";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(securityMiddlewares);
app.use("/files/*", apiLimiter);
app.use(requestLogger);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/files", fileRoutes);
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use(errorHandler);

const PORT = process.env.PORT || 4105;

app.listen(PORT, () => {
  logger.info(`File-Service running on ${PORT}`);
});
