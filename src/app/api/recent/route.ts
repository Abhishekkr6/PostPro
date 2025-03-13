import { NextRequest, NextResponse } from "next/server";
import { Request } from "@/models/Request";
import connectDB from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const recentRequests = await Request.find()
      .sort({ createdAt: -1 })
      .limit(10);

    return NextResponse.json(recentRequests);
  } catch (error) {
    console.error("Error fetching recent requests:", error);
    return NextResponse.json(
      { message: "Failed to fetch recent requests" },
      { status: 500 }
    );
  }
}
