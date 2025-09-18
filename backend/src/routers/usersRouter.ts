import express, { RequestHandler } from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  UpdateUser,
} from "../controllers/usersController";
import multer from "multer";
const upload = multer();

const router = express.Router();

router.get("/getAllUsers", getAllUsers as RequestHandler);
router.get("/user/:id", getSingleUser as RequestHandler);
router.delete("/:id", deleteUser as RequestHandler);
router.patch("/:id", upload.single("image"), UpdateUser as RequestHandler);

export default router;
