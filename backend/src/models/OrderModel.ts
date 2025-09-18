import mongoose, { Model, Schema } from "mongoose";
import { OrderType } from "../types/Type";

const OrderSchema = new Schema<OrderType>(
  {
    orderBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product", //must match products model
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    orderStatus: { type: String, required: true },
    notes: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const OrderModel: Model<OrderType> = mongoose.model<OrderType>(
  "Order",
  OrderSchema
);
