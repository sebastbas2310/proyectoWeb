const express = require("express");
const router = express.Router();
const tableController = require("../controller/tableContrroller");
//const authService = require("../services/authService");

router.get("/", tableController.getTable)
router.post("/addTable", tableController.addTable)
router.put("/updateTable/:table_id", tableController.updateTable)


module.exports= router;