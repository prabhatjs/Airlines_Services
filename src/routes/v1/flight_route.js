const express=require('express');

const {FlightController}=require('../../controllers')
const   {flight_middleware}=require('../../middleware')
const router=express.Router();

//for correct mesg when we create airplane and show mesg.
router.post('/',flight_middleware.Flight_middleware,FlightController.createFlight);
// /api/v1/flight
router.get('/',FlightController.getFlights);
router.get('/:id',FlightController.getFlight);
router.delete('/:id',FlightController.DeleteFlight);
router.patch('/:id',FlightController.UpdateFlight);

module.exports=router;