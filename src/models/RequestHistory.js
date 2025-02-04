import mongoose from "mongoose";

const requestHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    requestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["success", "failure", "pending"],
      required: true,
    },
    responseData: {
      type: mongoose.Schema.Types.Mixed, 
    },
    responseTime: {
      type: Number, 
    },
  },
  { timestamps: true }
);

export default mongoose.models.RequestHistory || mongoose.model("RequestHistory", requestHistorySchema);
