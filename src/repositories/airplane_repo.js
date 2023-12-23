const CrudRepo=require('./crud-repo');
const {Airplanes}=require('../models');
class AirplaneRepo extends CrudRepo{
    constructor(){
        console.log("Inside Air Repo");
        super(Airplanes);//invoke parent class constructor
    }
}
module.exports=AirplaneRepo