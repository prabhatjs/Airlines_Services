//genric crud 
const { response } = require("express");

class CrudRepo{
    constructor(model)
    {
        this.model=model;
    }
    async create(data)
    {
        try{
                const res=await this.model.create(data);
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
                const res=await this.model.destroy({
                    where:{
                        id:data 
                    }
                });
                return response;
        }
        catch(error)
        {
                throw error;
        }
    }
    async geta(data)//find dta from tbale using primary key
    {
        try{
                const res=await this.model.findByPk(data)
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
                const res=await this.model.findAll();
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
                const res=await this.model.update(data,{
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