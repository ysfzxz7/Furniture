import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

const getAllUsers = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
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
 * updateUser - func to delete a user
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
      res.status(404).json({
        success: false,
        message: "No user found",
      });
    }

    await UserModel.findByIdAndUpdate(id, req.body.user);

    return res
      .status(200)
      .json({ success: true, message: "User updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while updating user ", error });
  }
};
export { getAllUsers, getSingleUser, deleteUser, UpdateUser };
