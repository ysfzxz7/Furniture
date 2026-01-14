import { ObjectId } from "mongodb";
import mongoose, { Types } from "mongoose";

export interface UserType {
  id: mongoose.Types.ObjectId; // Unique product ID
  username: string;
  image: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  dateCreated: Date;
}

export interface ProductType {
  id: mongoose.Types.ObjectId; // Unique product ID
  image: string;
  name: string; // Product name
  category: string; // Product category
  quantity: number; // Available stock
  minLevel: number;
  supplier: string; // Supplier name
  status: string; // Could be: "In Stock", "Low Stock", "Out of Stock"
  dateAdded: Date; // Date the product was added
  lastUpdated: Date; // Last update date
  addedBy: mongoose.Schema.Types.ObjectId;
  description: string;
}
export interface OrderType {
  id: mongoose.Types.ObjectId;
  orderBy: {
    orderByid: Types.ObjectId;
  };
  products: {
    productId: Types.ObjectId;
  }[];
  orderStatus: string;
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
}

export type RealOrderType = {
  _id: string;
  orderBy: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  products: {
    _id: string;
    productId: string;
    name: string;
    category: string;
    quantity: number;
  }[];
  orderStatus: string;
  createdAt: string;
  updatedAt: string;
  notes: string;
  __v: number;
};
