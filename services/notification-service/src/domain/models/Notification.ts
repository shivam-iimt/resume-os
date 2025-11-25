import mongoose, { Schema, Document } from "mongoose";

export interface INotification extends Document {
  userId: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
}

const NotificationSchema = new Schema<INotification>(
  {
    userId: { type: String, required: true },
    type: { type: String, enum: ["email", "system"], required: true },
    title: String,
    message: String,
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<INotification>(
  "Notification",
  NotificationSchema
);
