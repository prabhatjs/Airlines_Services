
const {flightService}=require('../services');
const {StatusCodes}=require('http-status-codes');


async function createFlight(req,res){
    try {
        console.log(req.body);
        console.log("Inside Controler");
        const flight=await flightService.createFlight({
            flightnumber:req.body.flightnumber,//name should be same 
            airplaneid:req.body.airplaneid,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            departureTime:req.body.departureTime,
            arrivalDate:req.body.arrivalDate,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalseats:req.body.totalseats,

        });
        return res.status(StatusCodes.CREATED)
        .json({
            success:true,
            message:'successfully Saved Flight',
            data:flight 
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
        json({
            success:false,
            message:"Something Wrong to save Flights ",
            data:{},
            error:error 
        })
    }
}
 async function getFlights(req,res){
    try {
        const flight=await flightService.getFlights();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"get All the Data of Fligts",
            data:{
                flight
            }
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
        json({
            success:false,
            message:"Something wrong to get All Flights ",
            data:{},
            error:error 
        })
    }
    }

    async function getFlight(req,res){
        try {
            console.log(req.params.id);
            const flight=await flightService.getFlight(req.params.id);
            console.log(req.params.id);

            return res.status(StatusCodes.OK).json({
                success:true,
                message:"get Flights",
                data:{
                    flight
                }
            })
        }
        catch (error) {
           console.log(error,error==404);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).
            json({
                success:false,
                message:"Something wrong to get Flights ",
                data:{},
                error:error 
            })
        }
        }
        async function DeleteFlight(req,res){
            try {
                const flight=await flightService.deleteFlight(req.params.id);
                return res.status(StatusCodes.OK).json({
                    success:true,
                    message:"Deleted Flights",
                    data:{
                        flight
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
        
            async function UpdateFlight(req,res){
                try {
                    const flight=await flightService.updateFlight(req.params.id,req.body);
                    return res.status(StatusCodes.OK).json({
                        success:true,
                        message:"Updated Flights",
                        data:{
                            flight
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
    createFlight,
    getFlights,//got to routes,
    getFlight,
    DeleteFlight,
    UpdateFlight
}