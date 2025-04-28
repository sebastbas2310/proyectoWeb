const { worker } = require("../models")

const workerController={

   getWorker: async (req, res) => {
    try {
        const Worker = await worker.findAll();
        res.status(200).json(Worker); // <--- Aquí ya mandas la lista directa
        }catch (error) {
        return res.status(500).json({ error: error.message });
        }
    },

    
    addWorker: async (req, res) => {
        await worker.sync();
        try {
          const dataWorker = req.body;
      
          // Aseguramos que los campos necesarios estén presentes
          if (!dataWorker.worker_name || !dataWorker.worker_rol || !dataWorker.salary || !dataWorker.email || !dataWorker.password || !dataWorker.phone_number) {
            return res.status(400).json({
              ok: false,
              status: 400,
              message: "Faltan datos requeridos: worker_name, worker_rol, salary, email, password, phone_number"
            });
          }
      
          // Creación del trabajador con los nuevos campos
          const createWorker = await worker.create({
            worker_name: dataWorker.worker_name,
            worker_rol: dataWorker.worker_rol,
            salary: dataWorker.salary,
            email: dataWorker.email,
            password: dataWorker.password,
            phone_number: dataWorker.phone_number
          });
      
          res.status(201).json({
            ok: true,
            status: 201,
            message: "Trabajador creado correctamente",
            worker: createWorker // Puedes enviar la respuesta con los datos del trabajador recién creado
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