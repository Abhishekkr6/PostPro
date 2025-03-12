import { NextResponse } from "next/server";
import { Request } from "@/models/Request";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    const activities = await Request.find().sort({ createdAt: -1 }).limit(10);
    return NextResponse.json(activities, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch activity" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { method, url, statusCode, responseTime, description } = await req.json();
    const newRequest = new Request({ method, url, statusCode, responseTime, description });
    await newRequest.save();
    return NextResponse.json({ message: "Activity created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create activity" }, { status: 500 });
  }
}
