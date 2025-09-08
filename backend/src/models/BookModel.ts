import mongoose, { Model, Schema } from "mongoose";
import { BookType } from "../types/Types";

const bookSchema = new Schema<BookType>({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "admin", required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true, default: "No description provided!" },
  genres: { type: [String], required: true },
  isbn: { type: String, required: true },
  language: { type: String, required: true },
  pages: { type: Number, required: true },
  price: { type: Number, required: true },
  publicationDate: { type: Date, required: true },
  publisher: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  bookImageUrl: { type: String, required: false },
});

export const BookModel: Model<BookType> = mongoose.model<BookType>("book", bookSchema);
