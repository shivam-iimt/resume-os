import express from "express";
import cors from "cors";
import { ENV } from "./core/config/env";
import gatewayRoutes from "./routes/gateway.routes";
import { logger } from "./core/middlewares/logger";
import { apiLimiter } from "./core/middlewares/rateLimit";
import { authMiddleware } from "./core/middlewares/auth";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(apiLimiter);
app.use(authMiddleware);

app.use("/api", gatewayRoutes);

app.get("/", (req, res) => {
  res.send("API Gateway Running");
});

app.listen(ENV.PORT, () => {
  console.log(`🚀 Gateway-Service running on ${ENV.PORT}`);
});
