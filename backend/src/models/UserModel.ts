import mongoose, { Model, Schema } from "mongoose";
import { UserType } from "../types/Type2";

const userSchema = new Schema<UserType>({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  image: { type: String },
});

export const User: Model<UserType> = mongoose.model<UserType>(
  "User",
  userSchema
);
