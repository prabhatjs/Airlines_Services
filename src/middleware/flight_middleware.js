const {StatusCodes}=require('http-status-codes');

 function Flight_middleware(req,res,next){
    //req.body.modelno me kuch nhi hai to .
    if(!req.body.flightnumber){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng With Flight Number  ",
                data:{},
            error: {explanation:"Flight Number Not Found In Correct Form "}
        })
    }
    if(!req.body.airplaneid){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng With creating Airplane ID",
                data:{},
            error: {explanation:"Flight Id Not Found In Correct Form "}
        })
    }
    if(!req.body.departureAirportId){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng in Departure Airport ",
                data:{},
            error: {explanation:"Departure Airport Not Found In Correct Form "}
        })
    }
    if(!req.body.arrivalAirportId){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng in Arrival Airport ",
                data:{},
            error: {explanation:"Arrival Airport Not Found In Correct Form "}
        })
    }
    if(!req.body.departureTime){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng in Departure Time ",
                data:{},
            error: {explanation:"Departure Time Not Found In Correct Form "}
        })
    }
    if(!req.body.arrivalDate){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng in Arrival Time ",
                data:{},
            error: {explanation:"Arrival Time Not Found In Correct Form "}
        })
    }
    if(!req.body.price){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng in Price Of Flight ",
                data:{},
            error: {explanation:"Price Not Found In Correct Form "}
        })
    }
    if(!req.body.boardingGate){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng in Boarding Gate ",
                data:{},
            error: {explanation:"Boarding Gate Not Found In Correct Form "}
        })
    }
    if(!req.body.totalseats){
        return  res.status(StatusCodes.BAD_REQUEST)
        .json({
                success:false,
                message:"Some thing Worng in total Seats ",
                data:{},
            error: {explanation:"Seats Not Found In Correct Form "}
        })
    }

        next();//for success correct modelNo
}


module.exports={
    Flight_middleware}