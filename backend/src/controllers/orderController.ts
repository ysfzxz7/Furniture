import { Request, Response } from "express";
import { OrderModel } from "../models/OrderModel";

const addOrder = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const newOrder = req.body;
    // console.log(newOrder);
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
  const orders = await OrderModel.find();

  return res.status(200).json({
    success: true,
    orders,
  });
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
    const order = await OrderModel.findById(id);

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

export { getAllOrder, addOrder, deleteOrder, getSingleOrder };
