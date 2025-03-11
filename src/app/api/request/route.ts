import { NextRequest, NextResponse } from "next/server";
import { Request } from "@/models/Request";
import { connectDB } from "lib/mongodb";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    return NextResponse.json(requests);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch requests" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  await connectDB();

  const { method, url, headers, body } = await req.json();

  try {
    const startTime = Date.now();
    const res = await fetch(url, {
      method,
      headers: headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const endTime = Date.now();
    const responseTime = endTime - startTime;
    const data = await res.json();

    const newRequest = new Request({
      method,
      url,
      headers,
      body,
      response: data,
      status: res.status,
      responseTime,
    });

    await newRequest.save();

    return NextResponse.json(newRequest);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send request" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  await connectDB();

  const { id, headers, body } = await req.json();

  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      id,
      { headers, body },
      { new: true }
    );

    if (!updatedRequest) {
      return NextResponse.json(
        { error: "Request not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedRequest);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update request" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  await connectDB();

  const { id } = await req.json();

  try {
    const deletedRequest = await Request.findByIdAndDelete(id);

    if (!deletedRequest) {
      return NextResponse.json(
        { error: "Request not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Request deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete request" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  await connectDB();

  const { id, status } = await req.json();

  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return NextResponse.json(
        { error: "Request not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedRequest);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to patch request" },
      { status: 500 }
    );
  }
}
