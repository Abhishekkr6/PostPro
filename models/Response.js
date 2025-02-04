import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    requestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
      required: true,
    },
    statusCode: {
      type: Number,
      required: true,
    },
    responseTime: {
      type: Number,
      required: true,
    },
    responseBody: {
      type: mongoose.Schema.Types.Mixed, 
      required: true,
    },
    error: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Response || mongoose.model("Response", responseSchema);
