import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./core/config/db";
import resumeRoutes from "./api/routes/resume.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resumes", resumeRoutes);

const PORT = process.env.PORT || 4103;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Resume-Service running on ${PORT}`));
});
