const path = require('path');
const express = require('express');

const pubPath = path.join(__dirname, '../public');
var app = express();

app.use(express.static(pubPath));

app.listen(3000, () =>{
    console.log("server is running on Port 3000.");
});