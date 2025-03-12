import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Request } from "../../../models/Request";
import { Collection } from "@/models/Collections";

export async function GET(req: NextRequest) {
  await connectDB();

  const totalRequests = await Request.countDocuments();

  const successCount = await Request.countDocuments({ success: true });
  const successRate =
    totalRequests === 0 ? 0 : (successCount / totalRequests) * 100;

  const pipeline = [
    { $match: { responseTime: { $exists: true, $ne: null } } },
    { $group: { _id: null, avgTime: { $avg: "$responseTime" } } },
  ];
  const [aggResult] = await Request.aggregate(pipeline);
  const avgResponseTime = aggResult?.avgTime || 0;

  const activeCollections = await Collection.countDocuments({
    isActive: true,
  });

  return NextResponse.json({
    totalRequests,
    successRate,
    avgResponseTime,
    activeCollections,
  });
}
