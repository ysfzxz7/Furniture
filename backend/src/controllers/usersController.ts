import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import { uploadImage } from "../utils/Uploader";

const getAllUsers = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    if (req.query.count) {
      const length = await UserModel.countDocuments();
      return res.status(200).json({
        success: true,
        length,
      });
    }

    const users = await UserModel.find();
    if (!users) {
      res.status(404).json({
        success: false,
        message: "No user found",
      });
    }
    return res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal Server Error while deleting user ", error });
  }
};

/**
 * getSingleUser - func to get a single user
 * @param req id: of the user you look for
 * @param res return a success boolean value and the data of the user or user not found
 * @returns
 */

const getSingleUser = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "No user found",
      });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal Server Error while deleting user ", error });
  }
};

/**
 * deleteUser - func to delete a user
 * @param req : the id of the user
 * @param res : success state true or false , and a message
 * @returns
 */
const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = await UserModel.findById(id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "No user found",
      });
    }
    await UserModel.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while deleting user ", error });
  }
};
/**
 * updateUser - func to update a user
 * @param req : the id of the user
 * @param res : success state true or false , and a message
 * @returns
 */
const UpdateUser = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No user found",
      });
    }

    const newUser = { ...JSON.parse(req.body.NewUser) };
    if (req.file) {
      const url = await uploadImage(req.file as Express.Multer.File);
      newUser.image = url;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(id, newUser, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "User updated Successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while updating user ", error });
  }
};
export { getAllUsers, getSingleUser, deleteUser, UpdateUser };
