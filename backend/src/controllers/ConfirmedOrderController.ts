import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Stripe from "stripe";
import { OrderModel } from "../models/OrderModel";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const saveOrders = async (req: Request, res: Response): Promise<Response | void> => {
  const errors = validationResult(req).array();
  if (errors?.length > 0) return res.status(400).json({ message: errors[0].msg });

  try {
    const paymentIntentId = req.body.paymentIntentId;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId as string);

    if (!paymentIntent) return res.status(400).json({ message: "Payment intent not found!" });

    const orders = Array.from(paymentIntent.metadata.orders);
    if (!orders || orders.length === 0) {
      return res.status(500).json({ message: "Something went wrong!" });
    }

    if (paymentIntent.status !== "succeeded") {
      return res
        .status(400)
        .json({ message: `Payment intent not succeeded! Status: ${paymentIntent.status}` });
    }

    const updated = await OrderModel.updateMany({ _id: { $in: orders } }, { paid: true });
    if (!updated) {
      return res.status(500).json({ message: "Something went wrong while saving order!" });
    }

    res.send({ message: "Your orders are confirmed successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Error occurred while saving orders process!" });
  }
};

export { saveOrders };
