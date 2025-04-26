const express = require("express");
const router = express.Router();
const pedidoController = require("../controller/pedidoController");
const authService = require("../services/authService");

router.post("/", authService, pedidoController.addPedido)
router.get("/", authService, pedidoController.getPedido)


module.exports= router;