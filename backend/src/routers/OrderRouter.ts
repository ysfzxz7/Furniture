import express from "express";
import verifyUserToken from "../middleware/UserAuth";
import * as ordersController from "../controllers/OrderController";
import * as confirmOrderController from "../controllers/ConfirmedOrderController";
import { body, param } from "express-validator";

const router = express.Router();

// /api/user/order
router.post(
  "/order",
  verifyUserToken as express.RequestHandler,
  [
    body("bookId")
      .notEmpty()
      .withMessage("Book ID is required to order it")
      .isString()
      .withMessage("Invalid Book ID")
      .isLength({ min: 24 })
      .withMessage("Invalid Book ID"),
    body("quantity")
      .notEmpty()
      .withMessage("Quantity is required to order the book")
      .isNumeric({ no_symbols: true })
      .withMessage("Quantity number not valid"),
  ],
  ordersController.orderBook as express.RequestHandler
);

// /api/user/order/:orderId
router.get(
  "/order/:orderId",
  verifyUserToken as express.RequestHandler,
  [
    param("orderId")
      .notEmpty()
      .withMessage("Invalid order ID")
      .isLength({ min: 24 })
      .withMessage("Invalid order ID"),
  ],
  ordersController.getOrder as express.RequestHandler
);

// /api/user/orders
router.get(
  "/orders",
  verifyUserToken as express.RequestHandler,
  ordersController.getOrders as express.RequestHandler
);

// /api/user/order/:orderId
router.delete(
  "/order/:orderId",
  verifyUserToken as express.RequestHandler,
  [
    body("orderId")
      .notEmpty()
      .withMessage("Invalid order ID")
      .isLength({ min: 24 })
      .withMessage("Invalid order ID"),
  ],
  ordersController.removeOrder as express.RequestHandler
);

// /api/user/order/quantity
router.patch(
  "/order/quantity",
  verifyUserToken as express.RequestHandler,
  [
    body("quantity").isDecimal().withMessage("Invalid quantity number"),
    body("orderId")
      .isString()
      .withMessage("Invalid order ID")
      .isLength({ min: 24 })
      .withMessage("Invalid order ID"),
  ],
  ordersController.updateQuantity as express.RequestHandler
);

// /api/user/confirm
router.get(
  "/confirm",
  verifyUserToken as express.RequestHandler,
  ordersController.confirmOrders as express.RequestHandler
);

// /api/user/save-payments
router.post(
  "/save-payments",
  verifyUserToken as express.RequestHandler,
  confirmOrderController.saveOrders as express.RequestHandler
);

export default router;
