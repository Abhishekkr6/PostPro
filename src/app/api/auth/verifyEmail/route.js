import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"; 
import dbConnect from "@/lib/db";

dbConnect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;
        console.log("📌 Received Data:", { token });
        
        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});

        if(!user) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }

        console.log(user);
        
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({ message: "Email verified successfully" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}