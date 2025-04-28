const { tr } = require("@faker-js/faker")
const menu = require("../models")
const { updateTable } = require("./tableContrroller")

const plateController ={

    getPlate:async(req,res) =>{
        try {
            const Menu = await menu.findAll()
            res.status(200).json({
                ok:true,
                status:200,
                body: Menu
            })
        } catch (error) {
            res.status(500).json({
                ok:false,
                status:500,
                message: error.message
            })
        }   
    },

    addPlate:async (req,res) =>{
        try {
            const dataPlate = req.body
            await  menu.sync()
            const createPlate = await menu.create({
                plate_name: dataPlate.plate_name, 
                plate_desc: dataPlate.plate_desc,
                price: dataPlate.price,
                plate_img: dataPlate.plate_img,
                plate_cat: dataPlate.plate_cat, 
                ingredients: dataPlate.ingredients, 
                is_stock: dataPlate.is_stock
             }) 
            res.status(201).json({
                ok:true,
                status:201,
                message: "Created product"
            })
        }catch (error) {
            res.status(500).json({
                ok:false,
                status:500,
                message: error.message
            })
        }
    },

    updateTable: async (req, res) => {
        try {
            const id = req.params.plate_id
            const dataPlate = req.body
            const updatePlate = await menu.update(
                {
                    plate_name: dataPlate.plate_name, 
                    plate_desc: dataPlate.plate_desc,
                    price: dataPlate.price,
                    plate_img: dataPlate.plate_img,
                plate_cat: dataPlate.plate_cat, 
                ingredients: dataPlate.ingredients, 
                is_stock: dataPlate.is_stock
            },
            {
                where: {
                    plate_id: id,
                },
            }
        )   ;
            res.status(200).json({
                ok : true,
                status: 200,
                body: updatePlate,
         });
        }catch (error) {
            res.status(500).json({
                ok: false,
                status: 500,
                message: error.message,
            });
        }
    }


}

module.exports = plateController;