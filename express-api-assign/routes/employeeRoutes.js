const express = require("express");

const router = express.Router();


const controller = require("../controllers/employeeController");

router.post("/add", controller.addEmployee);
router.get("/all", controller.getAllEmployees);
router.delete("/delete/:id", controller.deleteEmployee);



module.exports = router;
