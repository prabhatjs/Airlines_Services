const {airportService}=require('../services');
const {StatusCodes}=require('http-status-codes');

async function CreateAirport(req,res){
    try {
        console.log(req.body);
        const airport= await airportService.CreateAirport({
            name:req.body.name,
            Acode:req.body.Acode,
            address:req.body.address,
            cityId:req.body.cityId
        });
        console.log(airport);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Airport Created Successfully",
            data:{
                airport
            }
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success:false,
            message:"Something Wrong In data Pls Check Aiport data",
            data:{},
            error:error
        })
    }
}

    async function DeleteAirport(req,res){
        try {
                const airport= await airportService.DeleteAirport(req.params.id)
                return res.status(StatusCodes.OK).json({
                    success:true,
                    message:"Deleted Airplane",
                    data:{
                        airport
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

    async function UpdateAirport(req,res){
        try {
            const airport=await airportService.UpdateAirport(req.params.id,req.body)
            return res.status(StatusCodes.OK).json({
                success:true,
                message:"Updated Airport ",
                data:{
                    airport
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

    async function FindAirport(req,res){
        try {
            console.log(req.params.id);
            const airport = await airportService.FindAirport(req.params.id)
            return res.status(StatusCodes.OK).json({
                success:true,
                message:"Airport find Successfully",
                data:{
                    airport
                }
            })
        } catch (error) {
            console.log(error,error==404);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
            json({
                success:false,
                message:"Can not Find Wrong airport ID ",
                data:{},
                error:error 
            })
        }
    }
    async function FindAllAirports(req,res){
        try {
            const airport=await airportService.FindAllAirports();
             return res.status(StatusCodes.OK).json({
            success:true,
            message:"get All the Data",
            data:{
                airport
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

    module.exports={
        CreateAirport,
        DeleteAirport,
        UpdateAirport,
        FindAirport,
        FindAllAirports
    }
    //got to routes,