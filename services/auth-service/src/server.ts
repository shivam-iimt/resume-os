import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 4101;

const server = http.createServer(app);

connectDB(process.env.MONGO_URI!);

server.listen(PORT, () => {
  console.log(`Auth-Service listening on port ${PORT}`);
});
