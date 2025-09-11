import mongoose, { Model, Schema } from "mongoose";
import { OrderType } from "../types/Type";

const OrderSchema = new Schema<OrderType>({
  orderBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order", //must match order model
      required: true,
    },
  ],
  orderStatus: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true },
  notes: { type: String, required: true },
});

export const OrderModel: Model<OrderType> = mongoose.model<OrderType>(
  "Order",
  OrderSchema
);
