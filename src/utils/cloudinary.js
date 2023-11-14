import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryFileUpload = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    let response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    return response.url;
  } catch (error) {
    fs.unlink(localFilePath);
    return null;
  }
};

export { cloudinaryFileUpload };
