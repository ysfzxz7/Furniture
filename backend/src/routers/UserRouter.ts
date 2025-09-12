import express, { query } from "express";
import * as userController from "../controllers/UserController";

const router = express.Router();

router.post(
  "/validate",
  userController.validateToken as express.RequestHandler
);
router.post("/register", userController.userRegister as express.RequestHandler);
router.post("/login", userController.userLogin as express.RequestHandler);
router.get("/logout", userController.userLogout as express.RequestHandler);
router.get("/test", userController.test as express.RequestHandler);

export default router;
