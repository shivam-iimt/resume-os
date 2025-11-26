import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./api/routes/auth.routes";
import { connectDB } from "./config/db";

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 4101;


connectDB(process.env.MONGO_URI!);
app.listen(PORT, async () => {
  console.log(`Auth-Service listening on port ${PORT}`);
});
