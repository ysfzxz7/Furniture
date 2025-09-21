import express, { RequestHandler } from "express";
import * as orderController from "../controllers/orderController";

const router = express.Router();

router.get("/getAllOrders", orderController.getAllOrder as RequestHandler);
router.get("/print", orderController.printOrder as RequestHandler);
router.get("/getUserOrder/:id", orderController.getUserOrder as RequestHandler);
router.get("/:id", orderController.getSingleOrder as RequestHandler);
router.patch("/:id", orderController.getAllOrder as RequestHandler);
router.delete("/:id", orderController.deleteOrder as RequestHandler);
router.post("/addOrder", orderController.addOrder as RequestHandler);

export default router;
