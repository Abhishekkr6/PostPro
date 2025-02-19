import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; 
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { sendEmail } from "@/helpers/mailer";
import { registerSchema } from "@/lib/validation"; // ✅ Import Zod validation schema

dbConnect();

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("📌 Received Data:", body);

    // ✅ Validate data using Zod
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      console.log("❌ Validation Error:", validation.error.issues);
      return NextResponse.json({ error: validation.error.issues[0].message }, { status: 400 });
    }

    const { username, email, password } = body;
    const sanitizedEmail = email.trim().toLowerCase();

    console.log("📌 Checking Existing User...");
    const existingUser = await User.findOne({ email: sanitizedEmail });

    if (existingUser) {
      console.log("❌ User already exists!");
      return NextResponse.json({ error: "User already exists!" }, { status: 400 });
    }

    console.log("🔐 Hashing Password...");
    const hashedPassword = await bcrypt.hash(password.trim(), 10); 

    console.log("✅ Creating New User...");
    const newUser = new User({
      username,
      email: sanitizedEmail,
      password: hashedPassword
    });

    const savedUser = await newUser.save();
    console.log("✅ User Saved:", savedUser);

    // ✅ Send verification email (with error handling)
    try {
      await sendEmail({ email: sanitizedEmail, emailType: "VERIFY", userId: savedUser._id });
    } catch (emailError) {
      console.log("⚠️ Email Sending Failed:", emailError.message);
    }

    return NextResponse.json({
      message: "User registered successfully.",
      success: true
    });

  } catch (error) {
    console.error("🔥 Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
