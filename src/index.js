import app from "./app.js";
import { dbConnect } from "./config/db-connect.js";


const main = async () => {
    const port = process.env.Port || 8080;
    try {
        await dbConnect();
        app.listen(port, () => {
           console.log(`server is running at port ${port}`);
        });
    }catch (err){
        throw err;
    }
};
main().catch((err)=>{
    console.log(err.message);
    process.exit(1);//to stop the node.js process.
});
    
