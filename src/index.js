
const express=require("express")
const {ServerConfig} =require('./config')
const apiRoutes=require('./routes')

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// console.log("Inside Api 1");
app.use('/api',apiRoutes);

PORT=3000

app.listen(PORT,  ()=>{
    console.log(`App Running on ${PORT}` );
//this method gives you a city details from tables..
    // const {City,Airport}=require('./models');
    // const cityname= await City.findByPk(1);
    // console.log(cityname);

    //  const DelhiAirport=await Airport.create({name:"Indira Gandhi International Airport",Acode:"DEL",address:"Delhi",cityId:7});
    //  console.log(DelhiAirport);

})


//write some powerfull sequelize stuff.



