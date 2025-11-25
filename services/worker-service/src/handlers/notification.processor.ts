import { Job } from "bullmq";
import { sendEmail } from "../services/email.service";

export const processNotification = async (job: Job) => {
  const { email, title, message } = job.data;

  console.log("Sending email to:", email);

  await sendEmail(email, title, message);

  return true;
};
