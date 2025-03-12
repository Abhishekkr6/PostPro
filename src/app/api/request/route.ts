import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { Request } from "@/models/Request";
import { connectDB } from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const requests = await Request.find().sort({ createdAt: -1 });
    return NextResponse.json(requests, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch requests" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { method, url, headers = {}, params = {}, body: requestBody = {}, auth = {}, tests = {} } = body;

    if (!method || !url) {
      return NextResponse.json({ error: "Method and URL are required" }, { status: 400 });
    }

    const config = {
      method,
      url,
      headers,
      params,
      data: requestBody,
      auth: auth.username ? { username: auth.username, password: auth.password } : undefined,
    };

    const startTime = Date.now();
    const response = await axios(config);
    const responseTime = Date.now() - startTime;

    const savedRequest = await Request.create({
      method,
      url,
      headers,
      params,
      body: requestBody,
      auth,
      tests,
      response: {
        data: response.data,
        status: response.status,
        headers: response.headers,
        time: responseTime,
      },
    });

    return NextResponse.json(savedRequest, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to send request", status: error.response?.status || 500 },
      { status: error.response?.status || 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    const { id, headers, params, body: requestBody, auth, tests } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Request ID is required" }, { status: 400 });
    }

    const updatedRequest = await Request.findByIdAndUpdate(
      id,
      { headers, params, body: requestBody, auth, tests },
      { new: true }
    );

    if (!updatedRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json(updatedRequest, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to update request" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Request ID is required" }, { status: 400 });
    }

    const deletedRequest = await Request.findByIdAndDelete(id);

    if (!deletedRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Request deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to delete request" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    const { id, status } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Request ID is required" }, { status: 400 });
    }

    const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    return NextResponse.json(updatedRequest, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to patch request" },
      { status: 500 }
    );
  }
}
