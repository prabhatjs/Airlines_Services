const { StatusCodes } = require("http-status-codes");


class CrudRepo{
    constructor(model)
    {
        this.model=model;
    }
    async create(data)
    {
        try{
                const response=await this.model.create(data);
                return response;
        }
        catch(error)
        {
                throw error;
        }
    }

    async destroy(data)
    {
        try{
                const response=await this.model.destroy({
                    where:{
                        id:data 
                    }
                });
                if(!response)
                {
                    throw new Error(StatusCodes.NOT_FOUND);
                }
                return response;
        }

        catch(error)
        {
                throw error;
        }
    }
    async geta(data)//find  airplan  by (data from tbale using primary key)
    {
        try{
                const response=await this.model.findByPk(data)
                if(!response)
                {
                    throw new Error(StatusCodes.NOT_FOUND);
                }
              
                return response;
        }
        catch(error)
        {
                throw error;
        }
    }
    async getAll()//get All the data from table
    {
        try{
                const response=await this.model.findAll();
                return response;
        }
        catch(error)
        {
                throw error;
        }
    }

    async update(id,data)//data is object 
    {
        try{
                const response=await this.model.update(data,{
                    where:{
                        id:id
                    }
                });
                return response;
        }
        catch(error)
        {
                throw error;
        }
    }
}

module.exports=CrudRepo;