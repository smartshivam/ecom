import { Router } from "express";
import {
  loginAdmin,
  registerAdmin,
} from "../../controllers/admin/index.controller.js";
import { categoriesRoutes } from "./categories.route.js";

const adminRoutes = Router();

adminRoutes.post("/register", registerAdmin);
adminRoutes.post("/login", loginAdmin);
adminRoutes.use("/categories", categoriesRoutes);

export default adminRoutes;
