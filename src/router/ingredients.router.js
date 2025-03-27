const router = require("express").Router()
const { faker } = require("@faker-js/faker")

const ingredient = require("../module/ingredient.model")

router.get("/ingredient", async(req,res) =>{
    const Ingredient = await ingredient.findAll()
    res.status(200).json({
        ok:true,    
        status:200,
        body: Ingredient
    })   
})

router.post("/ingredient", async (req,res) =>{
    await  ingredient.sync()
    const createIngredient = await ingredient.create({
        ingredient_name: faker.food.ingredient(),
        ingredient_type: faker.food.ingredient(),
        ingredient_cant: faker.number.int({ min: 2, max: 10 })
    }) 
    res.status(201).json({
        ok:true,
        status:201,
        message: "Created product"
    })
})

router.put("/ingredient", (req,res) =>{
    res.send("I am a router")
})

router.delete("/ingredient", (req,res) =>{
    res.send("I am a router")
})
module.exports = router