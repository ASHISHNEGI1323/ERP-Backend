import { Router } from "express";
import { catchAsync } from "../middlewares/handleError.js";
import { addPermission } from "../Controllers/index.js";

export const permissionRoutes = Router();

permissionRoutes.post("/add-permission", catchAsync(addPermission));
