import { Router } from "express";
import Auth from "./auth.js";

const adminRoutes = Router();
const adminApiUri = "/api/v1/admin";

adminRoutes.use(adminApiUri, Auth);

export default adminRoutes;
