import { Job } from "bullmq";

export const aiProcessor = async (job: Job) => {
  console.log("Processing AI job:", job.id, job.data);

  // TODO → call AI service
  await new Promise((res) => setTimeout(res, 1000));

  return { status: "completed", jobId: job.id };
};
