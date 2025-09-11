import mongoose from "mongoose";

export interface UserType {
  username: string;
  email: string;
  password: string;
}
export interface AdminType extends UserType {
  phoneNumber: string;
  joinDate: Date;
}

export interface BookType {
  adminId: mongoose.Types.ObjectId;
  title: string;
  author: string;
  pages: number;
  isbn: string;
  publisher: string;
  publicationDate: Date;
  description: string;
  genres: string[];
  language: string;
  price: number;
  stockQuantity: number;
  bookCover?: File;
  bookImageUrl?: string;
}

export interface OrderType {
  _id: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  adminId: mongoose.Schema.Types.ObjectId;
  bookId: mongoose.Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
  orderDate: Date;
  delivered: boolean;
  paid: boolean;
}
