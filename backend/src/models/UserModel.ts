import mongoose from "mongoose";
import { Schema, Model } from "mongoose";
import { UserType } from "../types/Types";

const userSchema = new Schema<UserType>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel: Model<UserType> = mongoose.model<UserType>("user", userSchema);
