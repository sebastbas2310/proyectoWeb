/*const router = require("express").Router()
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
})

router.put("/menu/:plate_id", async (req, res) => {
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
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updatePlate,
    });
});

router.delete("/menu/:plate_id", async (req, res) => {
    const id = req.params.plate_id;
    const deletePlate = await menu.destroy({
        where: {
            plate_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: deletePlate,
    });
});

module.exports = router*/