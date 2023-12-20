const info=(req,res)=>{
    return res.json({
            message:"Api is Working",
            success:"True",
            error:{},
            data:{}
    });
}
module.exports={
    info
}