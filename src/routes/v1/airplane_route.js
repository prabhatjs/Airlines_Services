const express=require('express');

const {AirplaneControler}=require('../../controllers')

const router=express.Router();

router.post('/',AirplaneControler.createAirplane);

module.exports=router;