const express=require('express');
const {AirportController}=require('../../controllers');
const {airport_middleware}=require('../../middleware')

const router=express.Router();

router.get('/:id',AirportController.FindAirport);
router.get('/',AirportController.FindAllAirports);
router.post('/',airport_middleware.airport_middleware,AirportController.CreateAirport);
router.delete('/:id',AirportController.DeleteAirport);
router.patch('/:id',AirportController.UpdateAirport);

module.exports=router;