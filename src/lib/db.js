import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI inside .env.local");
}


if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (global.mongoose.conn) {
        return global.mongoose.conn;
    }

    if (!global.mongoose.promise) {
        global.mongoose.promise = mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 10,
        }).then((mongoose) => mongoose);
    }

    try {
        global.mongoose.conn = await global.mongoose.promise;
        return global.mongoose.conn;
    } catch (e) {
        global.mongoose.promise = null;    
        throw e;        
    }
}

export default dbConnect;
