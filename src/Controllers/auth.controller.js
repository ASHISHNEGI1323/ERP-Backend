import bcrypt from "bcryptjs";
import { CustomError } from "../utils/index.js";
import { User, Role, Permission, Department } from "../models/index.js";

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const createAdmin = async (email, password) => {
  // a) role create -> Admin,
  const role = await Role.create({ name: "admin" });
  //b) Managment dept created
  const dept = await Department.create({ name: "Managment" });
  //c) Hash the password
  const hashPassword = await hashPassword(password);
  //d fetch Admin permission
  const permission = await Permissions.find({
    name: "Administration Access",
  }).select("_id");
  //c) Admin User Create,
  const user = await User.create({
    email,
    password: hashPassword,
    role: role_id,
    deptId: dept_id,
    userPermission: permission,
  });
  return user;
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError("Please fill all the fields", 400);
  }
  const existingUser = await User.find();

  if (existingUser.length === 0) {
    const user = await createAdmin(email, password);

    if (user) {
      return res
        .status(201)
        .json({ success: true, message: "Admin created successfully" });
    }
  }
};

export const registerUser = (req, res, next) => {};
