const CrudRepo=require('./crud-repo');
const {Airport}=require('../models');
class AirportRepo extends CrudRepo{
    constructor(){
        super(Airport);
    }
}
//exports the class 
module.exports=AirportRepo;
//next step on service folder