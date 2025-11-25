import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI missing");

  try {
    await mongoose.connect(uri);
    console.log("Notification DB Connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};
