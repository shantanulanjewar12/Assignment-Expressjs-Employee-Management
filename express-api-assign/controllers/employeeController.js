const employeeModel = require("../models/employeeModel");


exports.addEmployee = (req, res) => {

  employeeModel.addEmployee(req.body, (err) => {

    if (err) return res.status(500).json({ message: "Failed to add employee." });
    res.json({ message: "Employee added successfully !!" });

  });
};



exports.getAllEmployees = (req, res) => {

  employeeModel.getAllEmployees((err, results) => {

    if (err) return res.status(500).json({ message: "Server error" });
    res.json(results);

  });
  
};


exports.deleteEmployee = (req, res) => {

  employeeModel.deleteEmployee(req.params.id, (err) => {


    if (err) return res.status(500).json({ message: "Delete failed" });
    res.json({ message: "Employee deleted successfully !" });

  });

};
