const User = require("../models/User");
const { body, validationResult } = require('express-validator');

const signupValidation = [
    body('username', 'Username must be at least 3 characters long').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must contain at least 5 characters').isLength({ min: 5 })
];

const signup = async (req, res) => {
    const {username, email, password} = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // check whether if user already exist.
        let user = await User.findOne({email: email});
        if(user) {
            return res.status(400).json({errors: 'Sorry a user with this email already exists!'});
        }

        user = await User.create({
            username: username,
            email: email,
            password: password,
        });

        res.json({success:true});

    } catch (error) {
        console.log(error);
        res.json({success:false,
            error: 'Internal server error'});
    }
}

module.exports = { signup, signupValidation };