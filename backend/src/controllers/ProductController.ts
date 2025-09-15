import { Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { ProductModel } from "../models/ProductModel";
import { uploadImage } from "../utils/Uploader";

/**
 * addBook - @async Function that adds product to the database
 *
 * @param req Express request to publish a product
 * @param res Express response that contains the book if published or an error message
 * @returns Express Response that contains that publication result
 */
const addProduct = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  // First check if file exists
  // if (!req.file) {
  //   return res.status(400).json({ message: "Book cover image is required" });
  // }

  // check if there some errors
  // const errors = validationResult(req).array();
  // if (errors?.length) return res.status(400).json({ message: errors[0].msg });

  try {
    // const imageFile = req.file as Express.Multer.File;
    // const imageUrl = await uploadImage(imageFile);

    const product = new ProductModel(req.body);
    // book.bookImageUrl = imageUrl;
    product.image =
      "https://plus.unsplash.com/premium_photo-1754759085924-d6c35cb5b7a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // book.adminId = new mongoose.Types.ObjectId(req.adminId);
    await product.save();

    return res
      .status(200)
      .json({ message: "Book published successfully.", product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

/**
 * getAllProducts - @async Function that get all products from the database
 *
 * @param req Express request to get all the product
 * @param res Express response that contains an array of the products
 * @returns Express Response of the status code or errors
 */

const getAllProducts = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error Fetching products", error });
  }
};
/**
 * getSingleProduct - @async Function that get a product from the database
 *
 * @param req Express request to get a product using the ID
 * @param res Express response that contains an object of the product
 * @returns Express Response of the status code or errors
 */

const getSingleProducts = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Prodcut Not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Geting single product", error });
  }
};

/**
 * deleteProduct - @async Function that delete product in the database
 *
 * @param req Express request that contains the Mongoose Id of the product
 * @param res Express response that contains an Json Obj conatain the success state and the helpfull data
 * @returns Express Response of the status code or errors
 */

const deleteProducts = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    await ProductModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error,
    });
  }
};

/**
 * updateProduct - @async Function that update product in the database
 *
 * @param req Express request that contains the Mongoose Id of the product
 * @param res Express response that contains an json Obj conatain the success state and the helpfull data
 * @returns Express Response of the status code or errors
 */

const updateProduct = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const newP = JSON.parse(req.body.newProduct);

    console.log(newP);
    const oldProduct = await ProductModel.findById(id);

    if (!oldProduct) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    const newProduct = await ProductModel.findByIdAndUpdate(id, newP, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Product update successfully",
      data: oldProduct,
    });
  } catch (error) {
    console.log("there was an error while updating a product", error);

    res.status(500).json({
      success: false,
      message: "Error updating product",
      error: error,
    });
  }
};

/**
 * getDistinctCategories - @async Function that get distinc categories
 *
 * @param req Express request to get a all distinct categories
 * @param res Express response that return all categories
 * @returns Express Response of the status code and data or errors
 */

const getDistinctCategories = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const categories = await ProductModel.distinct("category");

    if (categories.length == 0) {
      return res.status(404).json({
        success: true,
        message: "No Categorie Found",
      });
    }
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Getting all categories", error });
  }
};

export {
  addProduct,
  getAllProducts,
  deleteProducts,
  updateProduct,
  getSingleProducts,
  getDistinctCategories,
};
