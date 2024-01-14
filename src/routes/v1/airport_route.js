const express=require('express');
const {AirportController}=require('../../controllers');

const router=express.Router();

router.get('/:id',AirportController.FindAirport);
router.get('/',AirportController.FindAllAirports);
router.post('/',AirportController.CreateAirport);
router.delete('/:id',AirportController.DeleteAirport);
router.patch('/:id',AirportController.UpdateAirport);

module.exports=router;