import{Router} from "express";
import { catchAsync } from "../middlewares/handleError.js";

import {registerUser, login}from "../Controllers/index.js";



export const authRoutes = Router();


authRoutes.post("/register",  catchAsync (registerUser));
authRoutes.post("/login", catchAsync (login));