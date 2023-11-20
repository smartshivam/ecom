import { Router } from "express";
import adminRoutes from "./admin/index.js";

const appRoutes = Router()

appRoutes.use(adminRoutes)


export default appRoutes
