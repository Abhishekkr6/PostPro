import mongoose, { Schema, model, models } from "mongoose";

const CollectionSchema = new Schema(
  {
    name: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const Collection =
  models.Collection || model("Collection", CollectionSchema);
