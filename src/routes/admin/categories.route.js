import { Router } from "express";
import {
  addCategory,
  getAllCategories,
  getCategoryDetail,
  deleteCategory,
  updateCategory,
} from "../../controllers/admin/category.controller.js";

const categoriesRoutes = Router();

categoriesRoutes.post("/add-category", addCategory);
categoriesRoutes.get("/get-all-categories", getAllCategories);
categoriesRoutes.get("/category-detail/:id", getCategoryDetail);
categoriesRoutes.delete("/delete-category/:id", deleteCategory);
categoriesRoutes.put("/update-category/:id", updateCategory);

export { categoriesRoutes };
