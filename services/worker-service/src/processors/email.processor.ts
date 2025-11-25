import { Job } from "bullmq";

export const emailProcessor = async (job: Job) => {
  console.log("Sending Email:", job.data);

  // TODO: Call Notification service email API
  return true;
};
