import mongoose from "mongoose";

export default async function connectDB() {
  const uri = process.env.MONGO_URI!;
  if (!uri) {
    throw new Error("MONGO_URI not defined in environment variables");
  }

  try {
    await mongoose.connect(uri);
    console.log("User-Service DB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}
