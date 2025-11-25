import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

console.log("Loaded ENV:", process.env.REDIS_HOST, process.env.REDIS_PORT);

import express from "express";
import cors from "cors";
import aiRoutes from "./api/routes/ai.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 4106;
app.listen(PORT, () => console.log(`AI-Service running on ${PORT}`));
