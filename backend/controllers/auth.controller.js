const User = require("../models/User");

const signup = async (req, res) => {
    const {username, email, password} = req.body;
    const newUser = new User({username, email, password});
    await newUser.save();
    res.status(201).json("User created successfully!");
}

module.exports = signup;