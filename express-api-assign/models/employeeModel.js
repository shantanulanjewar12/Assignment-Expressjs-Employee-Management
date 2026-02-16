const db = require("../config/db");

exports.addEmployee = (data, callback) => {
    db.query("INSERT INTO employees SET ?", data, callback);
};

exports.getAllEmployees = (callback) => {
    db.query("SELECT * FROM employees", callback);
};


exports.deleteEmployee = (id, callback) => {
     db.query("DELETE FROM employees WHERE id = ?", [id], callback); 
    };

