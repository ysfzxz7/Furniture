import { Request, Response } from "express";
import { OrderModel } from "../models/OrderModel";
import path from "path";
import createPdf from "../utils/createOrderPdf";
import { UserModel } from "../models/UserModel";
import { ProductModel } from "../models/ProductModel";

const addOrder = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const newOrder = req.body;
    const order = new OrderModel(newOrder);
    await order.save();
    return res.status(200).json({
      success: true,
      newOrder,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};

/**
 * getAllOrder : used to get all order or the length of the orders
 */
const getAllOrder = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const orders = await OrderModel.find()
      .populate("orderBy", "firstName lastName email image phone")
      .populate("products.productId", "name category quantity");

    if (!orders) {
      return res.status(404).json({
        success: false,
        message: "There is No order now",
      });
    }
    if (req.query.count == "true") {
      return res.status(200).json({
        success: true,
        length: orders.length,
      });
    }
    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};
/**
 * delteOrder : used to delete order from the Db
 */
const deleteOrder = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const id = req.params.id;
    const order = await OrderModel.findById(id);

    if (order) {
      await OrderModel.findByIdAndDelete(id);
      return res.status(200).json({
        sucess: true,
        message: "Order deleted successfully",
      });
    }

    return res.status(404).json({
      success: false,
      message: "Order Not Found Try again with other ID",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};
/**
 * delteOrder : used to delete order from the Db
 */
const getSingleOrder = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const id = req.params.id;
    const order = await OrderModel.findById(id)
      .populate("orderBy", "firstName lastName email image phone")
      .populate("products.productId", "name category quantity");
    if (order) {
      return res.status(200).json({
        sucess: true,
        order,
      });
    }

    return res.status(404).json({
      success: false,
      message: "Order Not Found Try again with other ID",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};
const getUserOrder = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({
        sucess: false,
        message: "User Not Found",
      });
    }
    const userOrders = await OrderModel.find({ orderBy: id })
      .populate("orderBy", "firstName lastName email phone") // populate user details
      .populate("products.productId", "name category quantity"); // populate products;

    return res
      .status(200)
      .json({ success: true, length: userOrders.length, userOrders });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};
//*/
const printOrder = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=order.pdf");
    await createPdf();
    const filePath = path.join(__dirname, "../tmpfiles/edited.pdf");
    res.download(filePath, (error) => {
      if (error) {
        console.log("Error downloading file", error);
        if (!res.headersSent) {
          res.status(500).json({ success: true, message: "File not Found" });
        }
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
};

export {
  getAllOrder,
  addOrder,
  deleteOrder,
  getSingleOrder,
  printOrder,
  getUserOrder,
};
