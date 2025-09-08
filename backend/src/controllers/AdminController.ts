import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { validationResult } from "express-validator";
import { AdminModel } from "../models/AdminModel";
import { BookModel } from "../models/BookModel";
import { uploadImage } from "../utils/Uploader";
import mongoose from "mongoose";

/**
 * adminRegister - @async Function that register admins and generates admin token
 *
 * @param req Express request
 * @param res Express response
 * @returns Promise contains Express response of admin registration
 */
const adminRegister = async (req: Request, res: Response): Promise<Response | void> => {
  // verify if there's request errors
  const errors = validationResult(req).array();
  if (errors?.length > 0) return res.status(400).json({ message: errors[0].msg });

  try {
    const { username, email, phoneNumber, password } = req.body;

    let admin = await AdminModel.findOne({ email });
    if (admin) return res.status(400).json({ message: "Admin already exists!" });

    const hashed = await bcrypt.hash(password, 10);
    const joinDate = new Date();
    admin = new AdminModel({ username, email, joinDate, phoneNumber, password: hashed });
    await admin.save();

    const token = jwt.sign({ adminId: admin._id }, process.env.ADMIN_JWT_KEY as string, {
      expiresIn: "1d",
    });

    res.cookie("admin_auth_token", token, {
      httpOnly: true,
      secure: process.env.ENV_MODE === "production",
      maxAge: 60 * 60 * 1000 * 24,
    });

    return res.status(200).json({ message: "Admin registered successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

/**
 * adminLogin - @async Function for Admin Log-in.
 *
 * @param req Express request for admin login with email and password
 * @param res Express response
 * @returns Promise contains Express response or void
 */
const adminLogin = async (req: Request, res: Response): Promise<Response | void> => {
  // verify if there's some errors on request validation
  const errors = validationResult(req).array();
  if (errors?.length) return res.status(400).json({ message: errors[0].msg });

  try {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalide credentials!" });

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) return res.status(401).json({ message: "Invalide credentials!" });

    const adminToken = jwt.sign({ adminId: admin._id }, process.env.ADMIN_JWT_KEY as string, {
      expiresIn: "1d",
    });

    res.cookie("admin_auth_token", adminToken, {
      httpOnly: true,
      secure: process.env.ENV_MODE === "production",
      maxAge: 60 * 60 * 1000 * 24,
    });

    return res.status(200).json({ message: "Logged-in successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

/**
 * adminLogout - @async Function that logs the admin out
 *
 * @param req Express request for admin loging out
 * @param res Express response
 * @returns Express Response or void
 */
const adminLogout = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const token = jwt.sign({}, process.env.ADMIN_JWT_KEY as string, { expiresIn: "0d" });

    res.cookie("admin_auth_token", token, {
      expires: new Date("01/01/1990"),
      httpOnly: true,
      secure: process.env.ENV_MODE === "production",
    });

    return res.status(200).json({ message: "Logged Out Success" });
  } catch (error) {
    return res.status(500).json({ message: "Unknown error occured during the logout process!" });
  }
};

/**
 * addBook - @async Function that adds books to the database
 *
 * @param req Express request to publish a book
 * @param res Express response that contains the book if published or an error message
 * @returns Express Response that contains that publication result
 */
const addBook = async (req: Request, res: Response): Promise<Response | void> => {
  // First check if file exists
  if (!req.file) {
    return res.status(400).json({ message: "Book cover image is required" });
  }

  // check if there some errors
  const errors = validationResult(req).array();
  if (errors?.length) return res.status(400).json({ message: errors[0].msg });

  try {
    const imageFile = req.file as Express.Multer.File;
    const imageUrl = await uploadImage(imageFile);

    const book = new BookModel(req.body);
    book.bookImageUrl = imageUrl;
    book.adminId = new mongoose.Types.ObjectId(req.adminId);
    await book.save();

    return res.status(200).json({ message: "Book published successfully.", book });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * Retrieves all books associated with a specific admin
 *
 * @route GET /api/admin/books (assumed endpoint)
 * @param {Request} req - Express request object containing adminId in request properties
 * @param {Response} res - Express response object
 * @returns {Promise<Response | void>} JSON response with books array or error message
 *
 * @throws {404} If no books are found for the admin
 * @throws {500} If server encounters an error
 *
 * @example
 * // Success Response
 * {
 *   [...bookObjects]
 * }
 *
 * // Error Response
 * {
 *   "message": "No books found!"
 * }
 *
 * @requires Authentication - Assumes adminId is set in request object through middleware
 */
const adminBooks = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const adminId = req.adminId;
    const books = await BookModel.find({ adminId });

    if (!books) return res.status(404).json({ message: "No books found!" });

    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

/**
 * validateToken - @async Function that validates the admin token
 *
 * @param req Express Request
 * @param res Express Response
 * @returns Express response
 */
const validateToken = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const token = req.cookies["admin_auth_token"];
    if (!token) return res.status(401).json({ message: "Invalid token!" });

    const decoded = jwt.verify(token, process.env.ADMIN_JWT_KEY as string);
    const adminId = (decoded as JwtPayload).adminId;
    if (!adminId) return res.status(401).json({ message: "Invalid token!" });

    return res.status(200).json({ message: "Valid Token" });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token!" });
  }
};

export { adminRegister, adminLogin, adminBooks, addBook, adminLogout, validateToken };
