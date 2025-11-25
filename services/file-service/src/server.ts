import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fileRoutes from "./api/routes/file.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded files publicly
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/files", fileRoutes);

const PORT = process.env.PORT || 4105;

app.listen(PORT, () => console.log(`File-Service running on ${PORT}`));
