const {CitiesRepo} =require('../repositories')
const {StatusCodes}=require('http-status-codes');

const citiesrepo=new CitiesRepo();//instance of city

async function createCity(data){
    try{
        const city=await citiesrepo.create(data);
        return city;
    }
    catch(error){
        throw error
    }
}
async function getCity(id){
    try {
        const city=await citiesrepo.geta(id);
        return city;
    } catch (error) {
        throw error;
    }
}

async function getCities(data){
    try {
        const city=await citiesrepo.getAll(data);
        return city;
    } catch (error) {
        throw error;
    }
}


async function deletecity(id){
    try {
        const city=await citiesrepo.destroy(id);
        return city;
    } catch (error) {
        
    }
}
async function updatecity(id,data){
    const city=await citiesrepo.update(id,data);
    return city;
}

module.exports={
    createCity,
    getCity,
    getCities,
    deletecity,
    updatecity
}
//go to controller 