import { Request, Response } from "express";
import { body } from "express-validator";

export const validateBookInfo = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    [
      body("title").notEmpty().withMessage("Book Title is required"),
      body("author").notEmpty().withMessage("Author Name is required"),
      body("publisher").notEmpty().withMessage("Publisher Name is required"),
      body("language").notEmpty().withMessage("Book Language is required"),
      body("genres")
        .isArray()
        .withMessage("Genres must be an array")
        .isLength({ min: 1 })
        .withMessage("A book must have at least one genre")
        .withMessage("Book Genre is required"),
      body("publicationDate").isDate().notEmpty().withMessage("Publication Date is required"),
      body("pages").isNumeric().notEmpty().withMessage("Book Page Count is required"),
      body("isbn")
        .isNumeric()
        .isLength({ min: 10 })
        .withMessage("Book ISBN not valid")
        .notEmpty()
        .withMessage("Book ISBN is required"),
      body("price").isNumeric().notEmpty().withMessage("Book Price count is required"),
      body("stockQuantity").isNumeric().notEmpty().withMessage("Stock Quantity is required"),
    ];
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Some book info is missing please check and try again!" });
  }
};
