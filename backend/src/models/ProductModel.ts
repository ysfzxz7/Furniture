import mongoose, { Model, Schema } from "mongoose";
import { ProductType } from "../types/Type";

const productSchema = new Schema<ProductType>({
  name: { type: String, required: true },
  image: { type: String },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  minLevel: { type: Number, required: true },
  supplier: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String },
  dateAdded: { type: Date },
  lastUpdated: { type: Date, required: true },
  addedBy: { type: Schema.Types.ObjectId, ref: "User" },
});

export const ProductModel: Model<ProductType> = mongoose.model<ProductType>(
  "Product",
  productSchema
);
