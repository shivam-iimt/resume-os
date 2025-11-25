import { Job } from "bullmq";

export const notificationProcessor = async (job: Job) => {
  console.log("Processing Notification:", job.data);

  // TODO: Send Push Notification / DB Logs
  return true;
};
