import express, { query } from "express";
import * as userController from "../controllers/UserController";
import * as bookController from "../controllers/BooksController";
import { body, param } from "express-validator";

const router = express.Router();

router.post("/validate", userController.validateToken as express.RequestHandler);

router.post(
  "/register",
  [
    body("username")
      .isString()
      .withMessage("Username invalid!")
      .isLength({ min: 3 })
      .withMessage("Username invalid!"),
    body("email").isEmail().withMessage("Email not valid!"),
    body("password")
      .notEmpty()
      .withMessage("Password invalid!")
      .isLength({ min: 8 })
      .withMessage("Password is require 8 characters or more!"),
  ],
  userController.userRegister as express.RequestHandler
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email address not valid!"),
    body("password").isLength({ min: 8 }).withMessage("Password required!"),
  ],
  userController.userLogin as express.RequestHandler
);

router.get("/logout", userController.userLogout as express.RequestHandler);

router.get("/books", userController.userBooks as express.RequestHandler);

router.get(
  "/book/:bookId",
  [
    param("bookId")
      .notEmpty()
      .withMessage("Invalid book ID")
      .isLength({ min: 24 })
      .withMessage("Invalid book ID"),
  ],
  userController.userBook as express.RequestHandler
);

router.get("/books/related", bookController.getRelatedBooks as express.RequestHandler);

export default router;
