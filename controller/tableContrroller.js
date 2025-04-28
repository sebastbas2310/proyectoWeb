const { Table } = require("../models")

const tableController = {

    getTable:async(req,res) =>{
        try{
            const table = await Table.findAll()
            res.status(200).json({
                ok:true,
                status:200,
                body: table
            })   
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    },

    addTable:async(req,res)=>{
        await Table.sync()
        try{
            const dataTable = req.body
            const createTable = await Table.create({
                table_size: dataTable.table_size,
                table_disp: dataTable.table_disp  
            }) 
            res.status(201).json({
                ok:true,
                status:201,
                message: "Created product"
            })
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    },

    updateTable: async(req,res) =>{
        try{
            const id = req.params.table_id
            const dataTable = req.body
            const updateTable = await Table.update(
                {
                    table_size: dataTable.table_size,
                    table_disp: dataTable.table_disp 
                },
                {
                    where: {
                    table_id: id,
                    },
                }
            );
            res.status(200).json({
                ok: true,
                status: 200,
                body: updateTable,
            });
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }
}
module.exports = tableController