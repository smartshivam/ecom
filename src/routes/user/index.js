import { Router } from "express";
import {
  loginUser,
  registerUser,
} from "../../controllers/user/index.controller.js";

const userRoutes = Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

export default userRoutes;
