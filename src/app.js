import express from "express";
import "dotenv/config";

import { deptRoutes,authRoutes,roleRoutes,permissionRoutes } from "./routes/index.js";
import { errorHandeler } from "./middlewares/index.js";

const app = express();


// used for parsing request bodies 
app.use(express.json());

//For debugging (only Dev Env.)
app.use((req ,res ,next)=>{
console.log(req.url);
//console.log(req.headerd);
next();
});    

app.use("/api/dept",deptRoutes);
app.use("./api/auth",authRoutes);
app.use("./api/role", roleRoutes);
app.use("./api/permission", permissionRoutes);


//express default error handling middleware
app.use(errorHandeler);


export default app;