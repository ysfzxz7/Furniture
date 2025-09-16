import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
// import { validationResult } from "express-validator";
import { UserModel } from "../models/UserModel";
import { validationResult } from "express-validator";
// import { ProductModel } from "../models/ProductModel";

/**
 * Validates a user's authentication token from cookies.
 *
 * This function checks the presence and validity of a JWT (JSON Web Token)
 * stored in the user's cookies. If the token is valid and contains a user ID,
 * the function responds with a success message. Otherwise, it responds with an
 * error message indicating authentication failure.
 *
 * @param {Request} req - The Express request object, containing the user's HTTP request details.
 * @param {Response} res - The Express response object, used to send a response back to the client.
 * @returns {Promise<Response | void>} - A promise that resolves to an HTTP response
 * indicating the authentication status, or void if the response is already sent.
 *
 * Workflow:
 * 1. Extract the token from the cookies.
 * 2. Log the token for debugging purposes.
 * 3. Check if the token is missing; if so, respond with an unauthorized status.
 * 4. Verify the token using the JWT library and the secret key.
 * 5. Extract the user ID from the decoded token.
 * 6. If the user ID is missing, respond with an unauthorized status.
 * 7. If everything is valid, respond with an authenticated status.
 * 8. Handle any errors during the process by responding with an unauthenticated status.
 *
 * @throws {Error} If token verification fails or an unexpected error occurs.
 *
 * @path /api/user/validate
 */
const validateToken = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const token = req.cookies["user_auth_token"];
    console.log("backen hitted");

    if (!token) return res.status(301).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.USER_JWT_KEY as string);
    const userId = (decoded as JwtPayload).userId;

    if (!userId) return res.status(301).json({ message: "Unauthorized" });

    return res.status(200).json({ message: "Authenticated" });
  } catch (error) {
    return res.status(301).json({ message: "Unauthenticated" });
  }
};

/**
 * userRegister - @async Function that creates new user if not exists and generates
 *                an access token.
 *
 * @param req Express request
 * @param res Express response
 * @returns Promise contains Express response or void
 */

const userRegister = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  // verify if there's errors in request validation
  //   const errors = validationResult(req).array();
  //   if (errors?.length > 0)
  //     return res.status(400).json({ message: errors[0].msg });

  try {
    const { username, email, password, role, firstName, lastName, image } =
      req.body;

    const registred = await UserModel.findOne({ email });
    if (registred)
      return res.status(400).json({ message: "User already exists!" });

    const hashed = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username: username,
      email: email,
      password: hashed,
      role: role,
      firstName: firstName,
      lastName: lastName,
      image: image,
    });
    await user.save();
    console.log("saved");

    const token = jwt.sign(
      { userId: user._id },
      process.env.USER_JWT_KEY as string,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("user_auth_token", token, {
      httpOnly: true,
      secure: process.env.ENV_MODE === "production",
      maxAge: 60 * 60 * 1000 * 24,
    });

    res.status(200).json({ message: "Registered successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message:
        "Something went wrong. Please fill a valid info and try to register again",
    });
  }
};

/**
 * userLogin - @async Function that logs in users after the successed
 *             authentication verification
 *
 * @param req Express request
 * @param res Express response
 *
 * @returns Promise contains Express response or void.
 */

const userLogin = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  // verify if there's request errors
  const errors = validationResult(req).array();
  if (errors?.length > 0)
    return res.status(400).json({ message: errors[0].msg });

  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found!" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ message: "Error: Invalide credentials!" });

    const token = jwt.sign(
      { userId: user._id },
      process.env.USER_JWT_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("user_auth_token", token, {
      httpOnly: true,
      secure: process.env.ENV_MODE === "production",
      maxAge: 60 * 1000 * 60 * 24,
    });

    return res.status(200).json({ message: "Logged-in successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

/**
 * userLogout - @async Function that logs the user out
 *
 * @param req Express request for user loging out
 * @param res Express response
 * @returns Express Response or void
 */
const userLogout = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const token = jwt.sign({}, process.env.USER_JWT_KEY as string, {
      expiresIn: "0d",
    });
    console.log(token);
    res.cookie("user_auth_token", token, {
      expires: new Date("01/01/1990"),
      httpOnly: true,
      secure: process.env.ENV_MODE === "production",
    });

    return res.status(200).json({ message: "Logged Out Success" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Unknown error occured during the logout process!" });
  }
};

const test = async (req: Request, res: Response): Promise<Response | void> => {
  res.send("backend hitted");
};

export { validateToken, test, userRegister, userLogin, userLogout };
