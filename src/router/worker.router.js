const router = require("express").Router()
const { faker } = require("@faker-js/faker")

const worker = require("../module/worker.model")

router.get("/worker", async(req,res) =>{
    const Worker = await worker.findAll()
    res.status(200).json({
        ok:true,
        status:200,
        body: Worker
    })   
})

router.get("/worker", (req,res) =>{
    res.send("I am a router")
})

router.post("/worker", async (req,res) =>{
    await  worker.sync()
    const createWorker = await worker.create({
        worker_name: faker.person.fullName(),
        worker_rol: faker.person.jobType(),
        salary: faker.number.float({ min: 1000, max: 5000 })
    }) 
    res.status(201).json({
        ok:true,
        status:201,
        message: "Created product"
    })
})

router.put("/worker", (req,res) =>{
    res.send("I am a router")
})

router.delete("/worker", (req,res) =>{
    res.send("I am a router")
})
module.exports = router