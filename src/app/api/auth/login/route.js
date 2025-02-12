import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/lib/db"; // 🔹 तुम्हारा database connection

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // 1️⃣ - Check if user exists in the database
    const user = await db.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({ error: "❌ User not found!" }, { status: 400 });
    }

    // 2️⃣ - Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "❌ Invalid Password!" }, { status: 400 });
    }

    // 3️⃣ - If everything is correct, return success response
    return NextResponse.json({ success: "✅ Login successful!" });

  } catch (error) {
    return NextResponse.json({ error: "⚠️ Something went wrong!" }, { status: 500 });
  }
}
