import { Queue } from "bullmq";

console.log("Notification Redis Config →", {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

export const notificationQueue = new Queue("notification-jobs", {
  connection: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});
