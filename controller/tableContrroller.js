const { Table } = require("../models")

const tableController = {

   getTable: async (req, res) => {
    try {
        const table = await Table.findAll();
        res.status(200).json(table); // <--- Aquí ya mandas la lista directa
        }catch (error) {
        return res.status(500).json({ error: error.message });
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

    updateTable: async (req, res) => {
        try {
            const id = req.params.table_id; // ID del ingrediente recibido en la URL
            const dataTable = req.body; // Datos recibidos en el cuerpo de la solicitud

            // Verificar si el ingrediente existe
            const tableExists = await Table.findByPk(id);
            if (!tableExists) {
                return res.status(404).json({ error: "Ingredient no encontrado" });
            }

            // Actualizar el ingrediente
            const updateIngredient = await Table.update(
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
                message: "mesa actualizado correctamente",
                body: updateIngredient,
            });
        } catch (error) {
            console.error("Error al actualizar mesa:", error);
            return res.status(500).json({ error: error.message });
        }
    }
}
module.exports = tableController