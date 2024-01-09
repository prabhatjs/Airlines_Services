const {StatusCodes}=require('http-status-codes');

 function airplane_middleware(req,res,next){
    //req.body.modelno me kuch nhi hai to .
    if(!req.body.modelNo){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng With Model Number",
                data:{},
            error: {explanation:"Model Number Not Found In Correct Form "}
        })
    }
        next();//for success correct modelNo
}

module.exports={
    airplane_middleware
}