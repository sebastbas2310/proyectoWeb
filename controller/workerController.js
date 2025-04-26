const { worker } = require("../models")

const workerController={

    getWorker:async(req,res) =>{
        try{
            const Worker = await worker.findAll()
            res.status(200).json({
            ok:true,
            status:200,
            body: Worker

        })   
        }
        catch(error){
            return res.status(500).json({error: error.message})
        }
        
    },
    
    addWorker: async (req, res) => {
        await  worker.sync()
        try {
          const dataWorker = req.body;
      
          const createWorker = await worker.create({
            worker_name: dataWorker.worker_name,
            worker_rol: dataWorker.worker_rol,
            salary: dataWorker.salary
          });
      
          res.status(201).json({
            ok: true,
            status: 201,
            message: "Trabajador creado correctamente"
          });
      
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      },

    updateWorker:async (req,res) =>{
        try{
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
        
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }
}
module.exports = workerController