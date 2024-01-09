const {citiesService} =require('../services');
const{StatusCodes}=require('http-status-codes');

async function createCity(req,res){
    try {
        const city=await citiesService.createCity({
            "name":req.body.name,
            "state":req.body.state
        });
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'successfully Saved City',
            data:city 
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success:false,
            message:"Something going wrong in City model",
            data:{},
            error:error
        })
    }
}
async function getCities(req,res){
    try {
        const city=await citiesService.getCities();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Get Att cities",
            data:{
                city
            }
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something wrong to get All city",
            data:{},
            error:error

        })
    }
}
async function getCity(req,res){
    try {
        const city=await citiesService.getCity(req.params.id);
        return res.status(StatusCodes.OK)
        .json({
            success:true,
            message:"Get City",
            data:{
                city
            }
        })
    } catch (error) {
        console.log(error,error==404);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
            json({
                success:false,
                message:"Something wrong to get City ",
                data:{},
                error:error 
            })
        }
    }

async function Delete(req,res){
    try {
        const city=await citiesService.deletecity(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Delete City Data",
            data:{
                city
            }
        })
    } catch (error) {
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
        const city=citiesService.updatecity(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"City Is updated ",
            data:{
                city
            }
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"can'nt Find Wrong Id",
            data:{},error:error


        })
    }
}

module.exports={
     createCity,
     Update,
     Delete,
     getCities,
     getCity//go to router
}