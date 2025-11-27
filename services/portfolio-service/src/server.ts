import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./core/config/db";
import portfolioRoutes from "./api/routes/portfolio.routes";
import { requestLogger } from "./core/middlewares/requestLogger";
import { errorHandler } from "./core/middlewares/errorHandler";
import { logger } from "./core/logger";
import { securityMiddlewares, apiLimiter } from "./core/middlewares/security";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(securityMiddlewares);
app.use("/portfolio/*", apiLimiter);
app.use(requestLogger);

app.use("/portfolio", portfolioRoutes);
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use(errorHandler);

const PORT = process.env.PORT || 4104;

connectDB();
app.listen(PORT, () => {
  logger.info(`Portfolio-Service running on ${PORT}`);
});
