import dotenv from "dotenv";
import path from "path";

// LOAD ENV BEFORE ANYTHING ELSE
dotenv.config({
  path: path.join(__dirname, "../.env"),
});

console.log("Worker ENV:", {
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
});

// Now safe to import other modules
import { Worker } from "bullmq";
import { redisConfig } from "./core/config/redis";

import { aiProcessor } from "./processors/ai.processor";
import { notificationProcessor } from "./processors/notification.processor";
import { emailProcessor } from "./processors/email.processor";

console.log("Worker Redis Config →", redisConfig);

console.log("Worker-Processor Starting...");

new Worker("ai-jobs", aiProcessor, { connection: redisConfig });
new Worker("notification-jobs", notificationProcessor, {
  connection: redisConfig,
});
new Worker("email-jobs", emailProcessor, { connection: redisConfig });

console.log("Worker-Service running and listening for jobs...");
