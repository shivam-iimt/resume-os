import mongoose, { Schema, Document } from "mongoose";

export interface IUserProfile extends Document {
  userId: string;
  name?: string;
  email?: string;
  bio?: string;
  avatar?: string;
  theme?: string;
  language?: string;
}

const userSchema = new Schema<IUserProfile>(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String },
    bio: { type: String },
    avatar: { type: String },
    theme: { type: String, default: "light" },
    language: { type: String, default: "en" }
  },
  { timestamps: true }
);

export default mongoose.model<IUserProfile>("UserProfile", userSchema);
