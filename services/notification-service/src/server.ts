import express from "express";
import cors from "cors";
import { connectDB } from "./core/config/db";
import notificationRoutes from "./api/routes/notification.routes";
import dotenv from "dotenv";
import path from "path";

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

app.use("/api/notification", notificationRoutes);

const PORT = process.env.PORT || 4107;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Notification-Service running on ${PORT}`);
});
