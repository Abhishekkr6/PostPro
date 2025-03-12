import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IRequest extends Document {
  name?: string;
  method: string;
  url: string;
  headers: Record<string, any>;
  params?: Record<string, any>;
  body: Record<string, any>;
  auth?: Record<string, any>;
  tests?: Record<string, any>;
  response?: {
    data?: Record<string, any>;
    status?: number;
    time?: number;
  };
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
    params: { type: Object, default: {} },
    body: { type: Object, default: {} },
    auth: { type: Object, default: {} },
    tests: { type: Object, default: {} },
    response: {
      data: { type: Object, default: {} },
      status: { type: Number, default: null },
      time: { type: Number, default: null },
    },
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
