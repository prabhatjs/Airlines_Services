const express=require('express');
const {CitiesControler}=require('../../controllers');
// const { citiesService } = require('../../services');

const router=express.Router();

router.post('/',CitiesControler.createCity);
router.get('/',CitiesControler.getCities)
router.delete('/:id',CitiesControler.Delete);
router.patch('/:id',CitiesControler.Update);

module.exports=router;