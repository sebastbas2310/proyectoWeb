const router = require("express").Router()
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
    try{
        await Table.sync()
    const createTable = await Table.create({
        table_size: faker.number.int({ min: 1, max: 10 }),
        table_disp: faker.datatype.boolean()  
    }) 
    res.status(201).json({
        ok:true,
        status:201,
        message: "Created product"
    })
    }
    catch(error){
        return res.status(4).json({error:"El token ha expirado"});
    }
})

router.put("/table", (req,res) =>{
    res.send("I am a router")
})

router.delete("/table", (req,res) =>{
    res.send("I am a router")
})
module.exports = router