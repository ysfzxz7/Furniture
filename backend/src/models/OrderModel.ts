import mongoose, { Schema, Model } from "mongoose";
import { OrderType } from "../types/Types";

const orderSchema = new Schema<OrderType>({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "admin", required: true },
  quantity: {
    type: Number,
    required: true,
    validate: {
      validator: (value: number) => value >= 0,
      message: "Quantity must be a non-negative number!",
    },
  },
  orderDate: { type: Date, required: true, default: Date.now },
  delivered: { type: Boolean, required: true, default: false },
  paid: { type: Boolean, required: true, default: false },
  totalPrice: {
    type: Number,
    required: true,
    validate: {
      validator: (value: number) => value >= 0,
      message: "Total price must be a non-negative number!",
    },
  },
});

export const OrderModel: Model<OrderType> = mongoose.model<OrderType>("order", orderSchema);
