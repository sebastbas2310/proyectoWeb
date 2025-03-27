const express = require("express")
const morgan = require("morgan")



const routerPlate = require("../router/plate.router" )
const routerWorker = require("../router/worker.router")
const routerIngredients = require("../router/ingredients.router" )
const routerTable = require("../router/table.router")

const app = express()

app.use(morgan("dev"))

app.get('/', (req,res) =>{
    res.send("This is express")
})

app.use(express.json())

app.use("/", routerPlate)
app.use("/", routerWorker)
app.use("/", routerIngredients)
app.use("/", routerTable)

module.exports = app