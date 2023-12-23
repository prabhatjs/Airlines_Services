
const express=require("express")
const {ServerConfig} =require('./config')
const apiRoutes=require('./routes')

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
console.log("Inside Api 1");
app.use('/api',apiRoutes);

PORT=3000

app.listen(PORT,()=>{
    console.log(`App Running on ${PORT}` );
})