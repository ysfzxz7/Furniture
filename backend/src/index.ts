import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import authRouter from "./routers/authRouter";
import productRouter from "./routers/ProductRouter";
import userRouter from "./routers/usersRouter";
import orderRouter from "./routers/orderRouter";

const app = express();

// connect mongodb
const uri = process.env.MONGODB_CONNECTION_STRING as string;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB is connected."))
  .catch((error) => console.error(error));

// set the cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    // [
    //   process.env.FRONTEND_URL_ADDRESS as string,
    //   process.env.SELLER_URL_ADDRESS as string,
    // ],
    //credentials: true,
  })
);

// app routers
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.listen(7000, () => {
  console.log("Server Running on http://localhost:7000");
});
