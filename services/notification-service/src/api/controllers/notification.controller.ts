import { Request, Response } from "express";
import Notification from "../../domain/models/Notification";
import { notificationQueue } from "../../domain/queues/notification.queue";

export const sendNotification = async (req: Request, res: Response) => {
  const { userId, email, title, message } = req.body;

  await notificationQueue.add("send-email", {
    userId,
    email,
    title,
    message,
  });

  res.json({ status: "queued" });
};

export const getMyNotifications = async (req: Request, res: Response) => {
  const userId = req.query.userId as string;

  const notifications = await Notification.find({ userId }).sort({
    createdAt: -1,
  });

  res.json(notifications);
};
