import mongoose, { Schema, model, models } from "mongoose";

const TestSchema = new Schema(
  {
    name: { type: String, required: true },
    condition: { type: String, required: true }, 
    expectedValue: { type: String, required: true },
    actualValue: { type: String },
    passed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Test = models.Test || model("Test", TestSchema);
