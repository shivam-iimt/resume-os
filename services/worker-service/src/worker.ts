import dotenv from "dotenv";
import { Worker } from "bullmq";
dotenv.config();

const connection = { host: process.env.REDIS_HOST || "127.0.0.1", port: Number(process.env.REDIS_PORT || 6379) };

const worker = new Worker("ai-jobs", async (job) => {
  console.log("Processing job", job.id, job.name, job.data);
  // placeholder: call AI service or process resume
}, { connection });

worker.on("completed", (job) => console.log("Job completed:", job.id));
worker.on("failed", (job, err) => console.error("Job failed:", job?.id, err));
