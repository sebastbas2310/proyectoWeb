/*const router = require("express").Router()
const { faker } = require("@faker-js/faker")

const Table = require("../module/table.model")

router.get("/Table", async(req,res) =>{
    const table = await Table.findAll()
    res.status(200).json({
        ok:true,
        status:200,
        body: table
    })   
}) 

router.post("/table", async (req,res) =>{
    const dataTable = req.body
    await Table.sync()
    const createTable = await Table.create({
        table_size: dataTable.table_size,
        table_disp: dataTable.table_disp  
    }) 
    res.status(201).json({
        ok:true,
        status:201,
        message: "Created product"
    })
})

router.put("/table/:table_id", async(req,res) =>{
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
})

router.delete("/table/:table_id", async (req,res) =>{
    const id = req.params.table_id;
    const deleteTable = await Table.destroy({
        where: {
            table_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: deleteTable,
    });
})
module.exports = router*/