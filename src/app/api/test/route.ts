import { NextRequest, NextResponse } from "next/server";
import { Test } from "@/models/Test";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { name, condition, expectedValue, actualValue } = await req.json();

    let passed = false;
    if (condition === "status") {
      passed = expectedValue === actualValue;
    }

    const test = await Test.create({
      name,
      condition,
      expectedValue,
      actualValue,
      passed,
    });

    return NextResponse.json(test, { status: 201 });
  } catch (error) {
    console.error("Error creating test:", error);
    return NextResponse.json(
      { message: "Failed to create test" },
      { status: 500 }
    );
  }
}
