import mongoose from "mongoose";
import bcrypt from "bcrypt";


const requestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    method: {
      type: String,
      required: true,
      enum: ["GET", "POST", "PUT", "DELETE"],
    },
    url: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      default: {},
    },
    body: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.models.Request || mongoose.model("Request", requestSchema);
