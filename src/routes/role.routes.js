import { Router } from "express";
import { catchAsync } from "../middlewares/index.js";
import { createRole, getRoles , UpdateRoles , deleteRoles} from "../Controllers/index.js";

export const roleRoutes = Router();

roleRoutes.post("/create-role", catchAsync(createRole));
roleRoutes.get("/get-roles", catchAsync(getRoles));
roleRoutes.get("/delete-roles", catchAsync(deleteRoles));
roleRoutes.get("/update-roles", catchAsync(UpdateRoles));
