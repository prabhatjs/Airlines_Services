const {StatusCodes}=require('http-status-codes');

 function airport_middleware(req,res,next){
    //req.body.modelno me kuch nhi hai to .
    if(!req.body.name){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng With Airport  ",
                data:{},
            error: {explanation:"Airport Name Not Found In Correct Form "}
        })
    }
    if(!req.body.Acode){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng With creating Airport",
                data:{},
            error: {explanation:"Airport Code Not Found In Correct Form "}
        })
    }
    if(!req.body.cityId){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng in Airport ",
                data:{},
            error: {explanation:"CityID Not Found In Correct Form "}
        })
    }

        next();//for success correct modelNo
}


module.exports={
    airport_middleware}