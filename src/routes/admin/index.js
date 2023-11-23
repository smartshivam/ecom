import { Router } from "express";
import {
  loginAdmin,
  registerAdmin,
} from "../../controllers/user/index.controller.js";

const adminRoutes = Router();

adminRoutes.post("/register", registerAdmin);

adminRoutes.post("/login", loginAdmin);
export default adminRoutes;
