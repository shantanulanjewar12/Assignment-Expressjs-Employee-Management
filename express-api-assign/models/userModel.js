const db = require("../config/db");

exports.registerUser = (data, callback) => {
    db.query("INSERT INTO users SET ?", data, callback);
};

exports.findUserByEmail = (email, callback) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
};
