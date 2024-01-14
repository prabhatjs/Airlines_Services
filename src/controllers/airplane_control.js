
const {airplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');
// const { response } = require('express');
//service function used here 

async function createAirplane(req,res){
    try {
        console.log(req.body);
        console.log("Inside Controler");
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
 async function getAirplaes(req,res){
    try {
        const airplane=await airplaneService.getAirplanes();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"get All the Data",
            data:{
                airplane
            }
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
        json({
            success:false,
            message:"Something wrong to get All Airplane ",
            data:{},
            error:error 
        })
    }
    }

    async function getAirplane(req,res){
        try {
            console.log(req.params.id);
            const airplane=await airplaneService.getAirplane(req.params.id);
            console.log(req.params.id);

            return res.status(StatusCodes.OK).json({
                success:true,
                message:"get Airplane",
                data:{
                    airplane
                }
            })
        }
        catch (error) {
           console.log(error,error==404);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
            json({
                success:false,
                message:"Something wrong to get Airplane ",
                data:{},
                error:error 
            })
        }
        }
    


        async function Delete(req,res){
            try {
                const airplane=await airplaneService.Delete(req.params.id);
                return res.status(StatusCodes.OK).json({
                    success:true,
                    message:"Deleted Airplane",
                    data:{
                        airplane
                    }
                })
            }
            catch (error) {
               console.log(error,error==404);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
                json({
                    success:false,
                    message:"Can not Find Wrong ID ",
                    data:{},
                    error:error 
                })
            }
            }
        
            async function Update(req,res){
                try {
                    const airplane=await airplaneService.Update(req.params.id,req.body);
                    return res.status(StatusCodes.OK).json({
                        success:true,
                        message:"Updated Airplane",
                        data:{
                            airplane
                        }
                    })
                }
                catch (error) {
                   console.log(error,error==404);
                    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
                    json({
                        success:false,
                        message:"Can not Find Wrong ID ",
                        data:{},
                        error:error 
                    })
                }
                }


module.exports={
    createAirplane,
    getAirplaes,//got to routes,
    getAirplane,
    Delete,
    Update
}