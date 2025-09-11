import { Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { ProductModel } from "../models/ProductModel";
import { uploadImage } from "../utils/Uploader";

const getBook = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  // check if there are any errors
  const errors = validationResult(req).array();
  if (errors?.length > 0) return res.status(401).json({ message: errors[0] });

  try {
    const bookdId = req.params.bookId;
    const userId = req.adminId;

    const book = await ProductModel.findOne({ adminId: userId, _id: bookdId });
    if (!book) return res.status(404).json({ message: "Book not found!" });

    return res.status(201).json(book);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

const updateBook = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  // check if there are any errors
  const errors = validationResult(req).array();
  if (errors?.length > 0)
    return res.status(400).json({ message: errors[0].msg });

  try {
    const adminId = req.adminId;
    const bookId = req.body?._id;

    if (req.file) {
      const imageFile = req.file as Express.Multer.File;
      const imageUrl = await uploadImage(imageFile);
      req.body.bookImageUrl = imageUrl;
    }

    console.log("Book Body:", req.body);

    const book = await ProductModel.findOneAndUpdate(
      { _id: bookId, adminId },
      { ...req.body }
    );
    await book?.save();
    if (!book) {
      return res.status(404).json({
        message: "Book not found or you are not authorized to access it!",
      });
    }

    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: (error as Error).message });
  }
};

const deleteBook = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const errors = validationResult(req).array();
  if (errors?.length) return res.status(400).json({ message: errors[0].msg });

  try {
    const bookId = req.body.bookId;
    const adminId = req.adminId;

    const book = await ProductModel.findByIdAndDelete({
      _id: bookId,
      adminId,
    });
    if (!book) return res.status(404).json({ message: "Book not found!" });

    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: (error as Error).message });
  }
};

/**
 * @async Function that fetches the related books depending on a book genres
 *
 * @param req Express Request that contains the query params of [Genres, Current Books ID]
 * @param res Express Response that returns the related books or an Error messsage
 * @returns Relates books with 200 status code, Validation error with 400 status code or
 *          Internal error with 500 status code
 *
 * @example GET /api/user/books/related
 */
const getRelatedBooks = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  // validate the query params
  try {
    const result = await checkSchema({
      genres: {
        in: ["query"],
        custom: {
          options: (value) => {
            if (typeof value === "string") return true;
            if (
              Array.isArray(value) &&
              value.every((item) => typeof item === "string")
            )
              return true;
            throw new Error("Genres must contains at least 1 Genre!");
          },
        },
      },
      current: {
        in: ["query"],
        isString: {
          errorMessage: "Current book ID must be a string!",
        },
        isLength: {
          options: {
            min: 24,
          },
          errorMessage: "Invalid Book ID!",
        },
      },
    }).run(req);

    const errors = validationResult(result).array();
    if (errors?.length > 0)
      return res.status(400).json({ message: errors[0].msg });
  } catch (error) {
    return res.status(400).json({ messge: (error as Error).message });
  }
  // fetch the related books
  try {
    const { genres, current } = req.query;

    if (genres === undefined || genres.length === 0)
      return res.status(400).json({ message: "Invalide search query!" });
    if (current === undefined || current.length === 0)
      return res.status(400).json({ message: "Invalid current book ID" });

    const genersArray = genres?.toString().split(",");

    const books = await ProductModel.find({
      _id: { $ne: current },
      genres: { $in: genersArray },
    });
    if (!books)
      return res.status(404).json({ message: "No related books found" });

    return res.status(200).json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong during fetching the related books",
    });
  }
};

export { getBook, updateBook, deleteBook, getRelatedBooks };
