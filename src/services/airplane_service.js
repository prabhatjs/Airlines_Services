//controler->services->repositorie

const { StatusCodes } = require('http-status-codes');
const {AirplaneRepo}=require('../repositories')

//airplane repositiory handle the logic of generic logic 
const airplaneRepo=new AirplaneRepo();


//create logic of airplane 
async function createAirplane(data)
{
    try {
        // console.log("Air Plane Service");
         const airplane=await airplaneRepo.create(data);
         return airplane;
    } catch (error) {
        throw error
    }
}
//get all Airplane 
async function getAirplanes(data){
    try {
        const airplane=await airplaneRepo.getAll(data);
        return airplane;
    } catch (error) {
        throw new Error('Can not fetch all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirplane(id){
    try {
        const airplane=await airplaneRepo.geta(id);
        return airplane;
    } catch (error) {
     if(404==StatusCodes.NOT_FOUND)
        {
            throw new Error(StatusCodes.NOT_FOUND);
        }
        throw new Error('Can not fetch id the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function Delete(id){
    try {
        const airplane=await airplaneRepo.destroy(id);
        return airplane;
    } catch (error) {
     if(404==StatusCodes.NOT_FOUND)
        {
            throw new Error(StatusCodes.NOT_FOUND);
        }
        throw new Error('Can not fetch id the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
//update take id and what data yu want to change
async function Update(id,data){
    try {
        const airplan=await airplaneRepo.update(id,data);
        return airplan;
    }   catch (error) {
        throw new Error('can not find id of the Aiplane',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    Delete,
    Update//got to controller 

}