import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./core/config/db";
import portfolioRoutes from "./api/routes/portfolio.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 4104;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Portfolio-Service running on ${PORT}`));
});
