const { tr } = require("@faker-js/faker")
const { ingredient } = require("../models")
const { updateTable } = require("./tableContrroller")

const ingredientController={
    getIngredient : async(req,res) =>{
        try{
            const Ingredient = await ingredient.findAll()
            res.status(200).json({Ingredient});   
        }catch(error){  
            return res.status(500).json({error: error.message})
        }
    },

    addIngredient:async (req,res) =>{
        try {
            const dataIngredient = req.body
            await  ingredient.sync()
            const createIngredient = await ingredient.create({
                ingredient_name: dataIngredient.ingredient_name,
                ingredient_type: dataIngredient.ingredient_type,
                ingredient_cant: dataIngredient.ingredient_cant
            }) 
           res.status(201).json({
                ok:true,
                status:201,
                message: "Created Ingredient"
            })
        }catch (error) {
            res.status(500).json({
                ok:false,
                status:500,
                message: error.message
            })
        }
    },

    updateIngredient:async(req,res) =>{
        try{
            const id = req.params.ingredient_id
            const dataIngredient = req.body
            const updateIngredient = await ingredient.update(
                {
                    ingredient_name: dataIngredient.ingredient_name,
                    ingredient_type: dataIngredient.ingredient_type,
                    ingredient_cant: dataIngredient.ingredient_cant
                },
                {
                    where: {
                        ingredient_id: id,
                    },
                }
            );
            res.status(200).json({
                ok: true,
                status: 200,
                body: updateIngredient,
            });
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }

}
module.exports = ingredientController