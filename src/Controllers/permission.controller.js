import { CustomError } from "../utils/index.js";
import { permission } from "../models/index.js";

export const addPermission = async (req, res) => {
    const {permissions} = req.body;

    if (!permissions || permissions.length ===0){
        throw new CustomError("please add atleast one permission",400);

    }

    const result = await permission.insertMany(permissions);


    res.status(201).json({
        success:true,
        message: "permisson added Succesfully",
        result,
    });
};