const express = require("express");
const router = express.Router();
const plateController = require("../controller/plateController");
//const authService = require("../services/authService");

router.get("/", plateController.getPlate);
router.post("/addPlate", plateController.addPlate);


module.exports= router;