const CrudRepo=require('./crud-repo');
const {City}=require('../models');
class CitiesRepo extends CrudRepo{
    constructor(){
        console.log("Inside Air Repo");
        super(City);//invoke parent class constructor
    }
}
module.exports=CitiesRepo;
//go to service to create method in service