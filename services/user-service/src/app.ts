import express from "express";
import cors from "cors";
import userRoutes from "./api/routes/user.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

export default app;
