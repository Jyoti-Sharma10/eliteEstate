const {signup, signupValidation} = require("../controllers/auth.controller");
const express = require('express');
const router = express.Router();

router.post("/signup", signupValidation, signup);

module.exports = router;