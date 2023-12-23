const express=require('express');

const {AirplaneControler}=require('../../controllers')
const   {airplane_middleware}=require('../../middleware')
const router=express.Router();
console.log("Inside Air Route");

router.post('/',
airplane_middleware.airplane_middleware,
AirplaneControler.createAirplane);
// /api/v1/airplane
router.get('/',
AirplaneControler.getAirplaes);


module.exports=router;