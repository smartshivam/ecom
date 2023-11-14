import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { upload } from "./middlewares/upload.middleware.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(202).send("uploaded");
});

export { app };
