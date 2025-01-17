export const errorHandeler =(err ,req,res,next) =>{
    if(res.headerSent){
        return next(err);

    }
    res.status(err?.status || 500);
    res.json({message:err?.message ||"Internal Server Error"});
};

export const catchAsync =(handler) =>(req,res,next) =>{
        const result = handler(req, res);
        result.catch((err)=>{
            next(err);
        });
    };
