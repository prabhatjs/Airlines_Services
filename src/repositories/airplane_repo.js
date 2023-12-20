const CrudRepo=require('./crud-repo');
const {Airplanes}=require('../models');
class AirplaneRepo extends CrudRepo{
    constructor(){
        super(Airplanes);//invoke parent class constructor
    }
}
module.exports=AirplaneRepo