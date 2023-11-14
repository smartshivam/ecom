import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//     console.log("filereq",req);
//   const allowedFileExtensions = [".jpg,".jpeg""];
//   console.log("file.originalname", file.originalname);
//   const fileExtension = path.extname(file.originalname).toLowerCase();
//   console.log("fileExtension", fileExtension);
//   console.log("condition", allowedFileExtensions.includes(fileExtension));

//   if (allowedFileExtensions.includes(fileExtension)) {
//     cb(null, true);
//   } else {
//     cb(
//       new Error(
//         "Invalid file type. Only jpg, jpeg, png, and gif files are allowed."
//       )
//     );
//   }
// };
export const upload = multer({ storage });
