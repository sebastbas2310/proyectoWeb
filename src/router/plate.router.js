const router = require("express").Router()
const { faker } = require("@faker-js/faker")

const menu = require("../module/plate.model")

router.get("/menu", async(req,res) =>{
    const Menu = await menu.findAll()
    res.status(200).json({
        ok:true,
        status:200,
        body: Menu
    })   
})

router.post("/menu", async (req,res) =>{
    await  menu.sync()
    const createPlate = await menu.create({
        plate_name: faker.commerce.productName(), 
        plate_desc: faker.commerce.productDescription(), 
        price: faker.commerce.price(),
        plate_img: faker.food.dish(),
        plate_cat: faker.commerce.department(), 
        ingredients: faker.lorem.words(5), 
        is_stock: faker.datatype.boolean()
    }) 
    res.status(201).json({
        ok:true,
        status:201,
        message: "Created product"
    })
})

router.put("/menu/:plate_id", async (req, res) => {
    const id = req.params.plate_id;
    const dataPlate = req.body;
    const updatePlate = await Plate.update(
        {
            plate_name: dataPlate.plate_name,
            plate_desc: dataPlate.plate_desc,
            price: dataPlate.price,
            plate_img: dataPlate.plate_img,
            plate_cat: dataPlate.plate_cat,
            ingredients: dataPlate.ingredients, 
            is_stock: dataPlate.is_stock,
        },
        {
            where: {
                plate_id: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateProduct,
    });
});

router.delete("/menu/:plate_id", async (req, res) => {
    const id = req.params.plate_id;
    const deletePlate = await Plate.destroy({
        where: {
            plate_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 204,
        body: deletePlate,
    });
});

module.exports = router