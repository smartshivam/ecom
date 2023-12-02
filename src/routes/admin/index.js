import { Router } from "express";
import {
  loginAdmin,
  registerAdmin,
} from "../../controllers/admin/index.controller.js";
import { addCategory, getAllCategories, getCategoryDetail } from "../../controllers/admin/category.controller.js";

const adminRoutes = Router();

adminRoutes.post("/register", registerAdmin);
adminRoutes.post("/login", loginAdmin);
adminRoutes.post("/categories", addCategory);
adminRoutes.get("/categories", getAllCategories);
adminRoutes.get("/categories/:id", getCategoryDetail);


export default adminRoutes;
