import mongoose, { Model, Schema } from "mongoose";
import { AdminType } from "../types/Types";

const adminSchema = new Schema<AdminType>({
  email: { type: String, required: true },
  joinDate: { type: Date, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  username: { type: String, required: true },
});

export const AdminModel: Model<AdminType> = mongoose.model<AdminType>("admin", adminSchema);
