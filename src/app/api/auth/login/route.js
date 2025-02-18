import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    console.log("📌 Checking if User Exists...");
    const user = await User.findOne({ email: email.trim().toLowerCase() });

    if (!user) {
      console.log("❌ User not found!");
      return NextResponse.json({ error: "User not found!" }, { status: 400 });
    }

    console.log("🔑 Comparing Password...");
    const isMatch = await bcrypt.compare(password, user.password); 

    if (!isMatch) {
      console.log("❌ Invalid Password!");
      return NextResponse.json({ error: "Invalid Password!" }, { status: 400 });
    }

    console.log("✅ Login Successful!");
    return NextResponse.json({ message: "Login successful!" });

  } catch (error) {
    console.error("🔥 Error:", error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
