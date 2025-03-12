import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}

export async function connectDB(): Promise<void> {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("⚡ Already connected to MongoDB");
      return;
    }

    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    throw new Error("MongoDB connection failed");
  }
}
