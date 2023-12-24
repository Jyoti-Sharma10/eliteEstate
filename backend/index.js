require('dotenv').config();
const express = require('express');
const app = express();
const mongoDB = require("./db");
mongoDB();


app.listen(4000, () => {
    console.log("Server listening on port 4000");
});