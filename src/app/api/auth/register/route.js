import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"; 
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request) {
  try {
    console.log("📌 Connecting to Database...");
    await dbConnect();

    const { username, email, password } = await request.json();
    console.log("📌 Received Data:", { username, email, password });

    if (!username || !email || !password) {
      console.log("❌ Missing Fields");
      return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 });
    }

    console.log("📌 Checking Existing User...");
    const existingUser = await User.findOne({ email: email.trim().toLowerCase() });

    if (existingUser) {
      console.log("❌ User already exists!");
      return NextResponse.json({ error: "User already exists!" }, { status: 400 });
    }

    console.log("🔐 Hashing Password...");
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password.trim(), salt); 

    console.log("✅ Creating New User...");
    const newUser = new User ({
      username,
      email,
      password: hashedPassword
    })

    const savedUser = await newUser.save()

    console.log(savedUser)

    await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    return NextResponse.json({
      message: "User registered successfully.",
      success: true,
      savedUser
    })


  } catch (error) {
    console.error("🔥 Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
