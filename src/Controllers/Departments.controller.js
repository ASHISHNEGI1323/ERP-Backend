import {CustomError} from "../utils/index.js";
import { Department } from "../models/index.js";



export const createDept = async (req, res) => {
  const { name } = req.body;

  if ( !name) {
    throw new CustomError("Please fill all the fields.", 400);
  }


 const department = await Department.create({name});

   
  

 
  res
    .status(201)
    .json({ success: true, 
      department,
      message: "Department created successfully." });
};
export const getDepts =  async (req, res, next) => {
  const departments = await  Department.find();
  //....
  res.status(200).json({
    success: true,
    data: departments,
  });
};

export const deleteDept = async(req, res, next) => {
  const { deptId } = req.params;

  const department = await Department.findById(deptId);
  
  if (!department) {
    throw new CustomError("Department does not exist", 400)
  }
const result = await Department.findByIdAndUpdate(deptId);

  res
    .status(200)
    .json({ success: true, message: "Department delete succesfully." });
};
export const updateDept = async (req, res, next) => {
  const { deptId } = req.params;
  const { name }=req.body;
 

  const department = await Department.findById(deptId)

  if (!name || !deptId) {
     throw (new CustomError("please fill all the fiels.", 400));
  }
  const existingDept= await Department.findById(deptId);

 

  if (existingDept) {
    throw new CustomError("the department does not exist", 400);
  }
const result = await Department.findByIdAndUpdate(dept,{name});

  res
    .status(200)
    .json({ success: true, message: "Department delete successfully" });
};
