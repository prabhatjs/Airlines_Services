const express=require('express');
const {infoController}=require('../../controllers');
const airplaneRoutes=require('./airplane_route');
const cityRoutes=require('./cities_route');
const airportRoutes=require('./airport_route');
const flightRouter=require('./flight_route');

const router=express.Router();

router.get('/info',infoController.info);
console.log("Check Api ROute");

router.use('/airplanes',airplaneRoutes);
router.use('/city',cityRoutes);
router.use('/airport',airportRoutes);
router.use('/flight',flightRouter);

 module.exports=router;