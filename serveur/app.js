const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

const {
    Server
} = require("socket.io");

//HTTPS Server
const options = {
    key: fs.readFileSync('/etc/certssl/wildcardMr486/privkey.pem'),
    cert: fs.readFileSync('/etc/certssl/wildcardMr486/fullchain.pem')
};
const https_Server = https.createServer(options, app).listen(8080);
const io = new Server(https_Server, {
    cors: {
        origin: "https://tda.mr486.com"
    }
});


io.on("connection", (socket) => {
    console.log('a user connected');
    ServersReceived(socket);
});


function ServersReceived(socket) {
    socket.on("Hello", (arg, callback) => {
        console.log(arg); // "Hello Server"
        callback("Thanks,got it");
    });
    socket.on("News", (data, callback) => {
        console.log(data, data.N);
        callback("Received News from:" + data.U + " at :" + new Date().toLocaleString());
    });
    socket.on("BigData_Bytes", (user, data) => {
        console.log(user, data.length);
    });
}

console.log('Server on port 8080 https.CTRL+C to quit.');
