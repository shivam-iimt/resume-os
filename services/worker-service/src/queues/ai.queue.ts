import { Queue } from "bullmq";
import { redisConfig } from "../core/config/redis";

export const aiQueue = new Queue("ai-jobs", {
  connection: redisConfig,
});
