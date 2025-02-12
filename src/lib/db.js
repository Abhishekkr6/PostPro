import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("❌ Please define the MONGODB_URI inside .env.local");
}

if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (global.mongoose.conn) {
        console.log("✅ Using existing database connection");
        return global.mongoose.conn;
    }

    if (!global.mongoose.promise) {
        console.log("📌 Connecting to new MongoDB instance...");
        global.mongoose.promise = mongoose.connect(MONGODB_URI, {
            maxPoolSize: 10,
        }).then((mongoose) => {
            console.log("🎉 Successfully connected to MongoDB");
            return mongoose;
        }).catch((error) => {
            console.error("🔥 MongoDB Connection Error:", error);
            throw error;
        });
    }

    try {
        global.mongoose.conn = await global.mongoose.promise;
        console.log("✅ Database connection established");
        return global.mongoose.conn;
    } catch (e) {
        console.error("🔥 Database connection failed:", e);
        global.mongoose.promise = null;
        throw e;
    }
}

export default dbConnect;
