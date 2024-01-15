
const {StatusCodes}= require('http-status-codes');
const {AirportRepo}=require('../repositories');

const AirportObj=new AirportRepo();

async function CreateAirport(data){
try {
    const airport= await AirportObj.create(data);
    return airport;
} catch (error) {
    throw error
}
}
async function DeleteAirport(id){
try {
    const airport=await AirportObj.destroy(id);
    return airport
} catch (error) {
    if(404==StatusCodes.NOT_FOUND)
        {
            throw new Error(StatusCodes.NOT_FOUND);
        }
        throw new Error('Can not fetch id the Airport',StatusCodes.INTERNAL_SERVER_ERROR);
}
}
        async function UpdateAirport(id,data){
        try {
            const airport=await AirportObj.update(id,data);
            return airport;
        } catch (error) {
            throw error;
        }
        }
    async function FindAirport(id){
    try {
        const airport=await AirportObj.geta(id);
        return airport;
    } catch (error) {
        if(404==StatusCodes.NOT_FOUND)
            {
                throw new Error(StatusCodes.NOT_FOUND);
            }
            throw new Error('Can not fetch id the Airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    }
        async function FindAllAirports(){
        try {
            const airport=await AirportObj.getAll();
            return airport;
        } catch (error) {
            throw new Error('Can not fetch all the Airports',StatusCodes.INTERNAL_SERVER_ERROR);
        }
        }
module.exports={
    CreateAirport,
    DeleteAirport,
    UpdateAirport,
    FindAirport,
    FindAllAirports
}
//--> go to controller