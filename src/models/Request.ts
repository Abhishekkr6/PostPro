import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IRequest extends Document {
  name?: string;
  method: string;
  url: string;
  headers: Record<string, any>;
  body: Record<string, any>;
  response?: Record<string, any>;
  statusCode?: number;
  responseTime?: number;
  success?: boolean;
  collectionId?: mongoose.Types.ObjectId;
  userId?: mongoose.Types.ObjectId | string;
  createdAt?: Date;
  updatedAt?: Date;
}

const RequestSchema = new Schema<IRequest>(
  {
    name: { type: String, required: false },
    method: { type: String, required: true },
    url: { type: String, required: true },
    headers: { type: Object, default: {} },
    body: { type: Object, default: {} },
    response: { type: Object, default: {} },
    statusCode: { type: Number, default: null },
    responseTime: { type: Number, default: null },
    success: { type: Boolean, default: false },
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Request =
  models.Request || model<IRequest>("Request", RequestSchema);
