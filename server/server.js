const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const pubPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(pubPath));

io.on('connection', (socket)=> {

    socket.on('disconnect', () =>{
        console.log('User disconnected');
    });
});

server.listen(port, () =>{
    console.log(`server is running on ${port}.`);
});
