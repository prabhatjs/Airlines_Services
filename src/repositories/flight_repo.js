const CrudRepo=require('./crud-repo');
const {Flights}=require('../models');

class flight_repo extends CrudRepo{
    constructor(){
        super(Flights);
    }
}
module.exports=flight_repo;