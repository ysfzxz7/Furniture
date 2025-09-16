import express, { RequestHandler } from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  UpdateUser,
} from "../controllers/usersController";

const router = express.Router();

router.get("/getAllUsers", getAllUsers as RequestHandler);
router.get("/user/:id", getSingleUser as RequestHandler);
router.delete("/user/:id", deleteUser as RequestHandler);
router.patch("/user/:id", UpdateUser as RequestHandler);

export default router;
