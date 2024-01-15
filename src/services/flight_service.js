const {FlightRepo}=require('../repositories')
const { StatusCodes } = require('http-status-codes');

const Flight=new FlightRepo();

async function createFlight(data){
   try {
        const flight=Flight.create(data);
        return flight;
   } catch (error) {
    if(404==StatusCodes.NOT_FOUND)
    {
        throw new Error(StatusCodes.NOT_FOUND);
    }
    throw new Error('Can not Create Flight data',StatusCodes.INTERNAL_SERVER_ERROR);
}
   }


async function deleteFlight(id){
    try {
         const flight=Flight.destroy(id);
         return flight
    } catch (error) {
        if(404==StatusCodes.NOT_FOUND)
        {
            throw new Error(StatusCodes.NOT_FOUND);
        }
        throw new Error('Can not delete the Flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    }
 

 async function updateFlight(id){
    try {
         const flight=Flight.update(id);
         return flight
    } catch (error) {
        if(404==StatusCodes.NOT_FOUND)
        {
            throw new Error(StatusCodes.NOT_FOUND);
        }
        throw new Error('Can not update the Flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    }
 

 async function getFlight(id){
    try {
         const flight=Flight.geta(id);
         return flight
    } catch (error) {
        if(404==StatusCodes.NOT_FOUND)
        {
            throw new Error(StatusCodes.NOT_FOUND);
        }
        throw new Error('Can not fetch id the Flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    }
 

 async function getFlights(){
    try {
         const flight=Flight.getAll();
         return flight
    } catch (error) {
        if(404==StatusCodes.NOT_FOUND)
        {
            throw new Error(StatusCodes.NOT_FOUND);
        }
        throw new Error('Can not fetch id the Flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    }
 
    module.exports={
        createFlight,
        deleteFlight,
        updateFlight,
        getFlight,
        getFlights
    }