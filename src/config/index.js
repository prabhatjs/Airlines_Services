const dotenv=require('dotenv');
dotenv.config()//it provide the all env file object

console.log(process.env);

module.exports={
    PORT:process.env.PORT
}
