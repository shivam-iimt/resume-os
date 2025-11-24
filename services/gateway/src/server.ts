import express from "express";
import http from "http";
import { Server as IOServer } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// simple health check
app.get("/health", (_req, res) => res.json({ status: "ok" }));

const server = http.createServer(app);
const io = new IOServer(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
  socket.on("ping", () => socket.emit("pong"));
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Gateway listening on ${PORT}`);
});
