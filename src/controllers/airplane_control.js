
const {airplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');
// const { response } = require('express');

async function createAirplane(req,res){
    try {
        console.log(req.body);
        const airplane=await airplaneService.createAirplane({
            modelNo:req.body.modelNo,//name should be same 
            cap:req.body.cap
        });
        return res.status(StatusCodes.CREATED)
        .json({
            success:true,
            message:'successfully Saved airplane',
            data:airplane 
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
        json({
            success:false,
            message:"Some Wrong ",
            data:{},
            error:error 
        })
    }
}

module.exports={
    createAirplane
}