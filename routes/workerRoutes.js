const express = require("express");
const router = express.Router();
const workerController = require("../controller/workerController");  

router.get("/", workerController.getWorker);
router.post("/addWorker",workerController.addWorker);

module.exports = router;