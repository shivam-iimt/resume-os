import { Queue } from "bullmq";

const redisHost = process.env.REDIS_HOST;
const redisPort = Number(process.env.REDIS_PORT);

console.log("AI-Service Redis Config →", { redisHost, redisPort });

const connection = {
  host: redisHost,
  port: redisPort,
};

export const aiQueue = new Queue("ai-jobs", { connection });
