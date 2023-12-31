require('dotenv').config();
const express = require('express');
const app = express();
const mongoDB = require("./db");
mongoDB();


app.use(express.json());
app.use('/api/user', require('./routes/User'));
app.use('/api/auth', require('./routes/Auth.js'));

app.listen(4000, () => {
    console.log("Server listening on port 4000");
});