import express, { RequestHandler } from "express";
import * as ProductController from "../controllers/ProductController";
import multer from "multer";

const upload = multer();

const router = express.Router();

router.post(
  "/addProduct",
  upload.single("image"),
  ProductController.addProduct as RequestHandler
);
router.get(
  "/getAllProducts",
  ProductController.getAllProducts as RequestHandler
);
router.get(
  "/getSingleProduct/:id",
  ProductController.getSingleProducts as RequestHandler
);
router.delete(
  "/deleteProduct/:id",
  ProductController.deleteProducts as RequestHandler
);
router.patch(
  "/updateProduct/:id",

  upload.single("image"),
  ProductController.updateProduct as RequestHandler
);
router.get(
  "/getDistinctCategories",
  ProductController.getDistinctCategories as RequestHandler
);

export default router;
