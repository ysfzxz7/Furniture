import express from "express";
import * as userController from "../controllers/authController";
import { body } from "express-validator";
import multer from "multer";

const upload = multer();
const router = express.Router();

const registervalidator = [
  body("username").notEmpty().withMessage("Username is required"),
];

router.post(
  "/validate",
  userController.validateToken as express.RequestHandler
);
router.post(
  "/register",
  upload.single("image"),
  userController.userRegister as express.RequestHandler
);
router.post(
  "/login",
  registervalidator,
  userController.userLogin as express.RequestHandler
);
router.get("/logout", userController.userLogout as express.RequestHandler);
router.get("/test", userController.test as express.RequestHandler);

export default router;
