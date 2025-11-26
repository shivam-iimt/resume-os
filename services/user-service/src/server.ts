import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./core/config/db";
import userRoutes from "./api/routes/user.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 4102;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`User-Service running on ${PORT}`));
});
