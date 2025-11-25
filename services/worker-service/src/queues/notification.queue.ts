import { Queue } from "bullmq";
import { redisConfig } from "../core/config/redis";

export const notificationQueue = new Queue("notification-jobs", {
  connection: redisConfig,
});
