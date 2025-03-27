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
    const dataWorker = req.body
    await  worker.sync()
    const createWorker = await worker.create({
        worker_name: dataWorker.worker_name,
        worker_rol: dataWorker.worker_rol,
        salary: dataWorker.salary
    }) 
    res.status(201).json({
        ok:true,
        status:201,
        message: "Created product"
    })
})

router.put("/worker/:worker_id", async (req,res) =>{
    const id = req.params.worker_id
    const dataWorker = req.body
    const updateWorker = await worker.update(
        {
        worker_name: dataWorker.worker_name,
        worker_rol: dataWorker.worker_rol,
        salary: dataWorker.salary   
        },
        {
            where: {
                worker_id: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateWorker,
    });
})

router.delete("/worker/:worker_id", async (req,res) =>{
    const id = req.params.worker_id;
    const deleteWorker = await worker.destroy({
        where: {
            worker_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: deleteWorker,
    });
})
module.exports = router