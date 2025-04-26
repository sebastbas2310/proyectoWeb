const router = require("express").Router()
const { faker } = require("@faker-js/faker")

const ingredient = require("../models/ingredient")

router.get("/ingredient", async(req,res) =>{
    const Ingredient = await ingredient.findAll()
    res.status(200).json({
        ok:true,    
        status:200,
        body: Ingredient
    })   
})

router.post("/ingredient", async (req,res) =>{
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
})

router.put("/ingredient/:ingredient_id", async(req,res) =>{
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
})

router.delete("/ingredient/:ingredient_id", async (req,res) =>{
    const id = req.params.ingredient_id;
    const deleteIngredient = await ingredient.destroy({
        where: {
            ingredient_id: id,
        }, 
    });
    res.status(200).json({
        ok: true,
        status: 204,
        body: deleteIngredient,
    });
})
module.exports = router