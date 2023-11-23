import { Router } from "express";
import adminRoutes from "./admin/index.js";
import userRoutes from "./user/index.js";

const appRoutes = Router()
// admin api routes 
appRoutes.use("/api/v1/admin",adminRoutes)
// user api routes 
appRoutes.use("/api/v1/user",userRoutes)


export default appRoutes
