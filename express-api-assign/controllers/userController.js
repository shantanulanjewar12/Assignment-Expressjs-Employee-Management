const userModel = require("../models/userModel");

exports.register = (req, res) => 
    {
    const { name, email, password } = req.body;

    userModel.registerUser({ name, email, password }, (err) => {
        if (err) {
            return res.status(500).json({ message: "Registration failed" });
        }
        res.json({ message: "Registration successful" });
    });
};



exports.login = (req, res) => 
    {
    const { email, password } = req.body;

    userModel.findUserByEmail(email, (err, results) => {
        if (err) return res.status(500).json({ message: "Server error" });

        if (results.length === 0) {
            return res.status(401).json({ message: "User not found" });
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.json({ message: "Login successful", user });
    });
};
