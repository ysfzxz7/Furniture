import { v2 as cloudinary } from "cloudinary";

/**
 * uploadImage - @async Function that uploads the Book Cover Image to the cloudinary
 *
 * @param imageFiles Array of Image URIs
 * @returns Array of image URLs
 */
export const uploadImage = async (imageFile: Express.Multer.File) => {
  const b64 = Buffer.from(imageFile.buffer).toString("base64");
  let uri = "data:" + imageFile.mimetype + ";base64," + b64;
  const res = await cloudinary.uploader.upload(uri);

  return res.url;
};
