import mongoose from "mongoose";

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
      match: [
        /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/,
        "Please enter a valid URL",
      ],
    },
    headers: {
      type: Object,
      default: {},
      validate: {
        validator: (v) => typeof v === "object" && !Array.isArray(v),
        message: "Headers must be an object",
      },
    },
    body: {
      type: Object,
      default: {},
      validate: {
        validator: (v) => typeof v === "object" && !Array.isArray(v),
        message: "Body must be an object",
      },
    },
    queryParams: {
      type: Object,
      default: {},
      validate: {
        validator: (v) => typeof v === "object" && !Array.isArray(v),
        message: "Query parameters must be an object",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Request || mongoose.model("Request", requestSchema);
