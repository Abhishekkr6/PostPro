import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";

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
    console.log("📌 Existing User Found:", existingUser);  // 🔍 Debugging

    if (existingUser) {
      console.log("❌ User already exists!");
      return NextResponse.json({ error: "User already exists!" }, { status: 400 });
    }

    console.log("✅ Creating New User...");
    const newUser = await User.create({
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    console.log("🎉 User Registered Successfully:", newUser);
    return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });

  } catch (error) {
    console.error("🔥 Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
