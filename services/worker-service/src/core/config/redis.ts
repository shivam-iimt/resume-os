import { RedisOptions } from "ioredis";

export const redisConfig: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
};

// Debug
console.log("Worker Redis Config →", redisConfig);
