import { Router } from "express";
import {
  createDept,
  getDepts,
  deleteDept,
  updateDept,
  } from "../Controllers/index.js";
  import { catchAsync } from "../middlewares/handleError.js";
export const deptRoutes = Router();

deptRoutes.post("/create-dept", catchAsync(createDept));
deptRoutes.get("/get-depts",catchAsync(getDepts));
deptRoutes.delete("/delete-dept/:deptId",catchAsync(deleteDept));
deptRoutes.put("/update-dept/:deptId", catchAsync(updateDept));
    
