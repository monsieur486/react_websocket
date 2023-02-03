const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const { Server } = require("socket.io");

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
    console.log('Un client se connecte, socket.id = ' + socket.id);
    ServersReceived(socket);
});

let numclics =0;

function ServersReceived(socket) {
    socket.on('bouton_client', () => {
        console.log('un clic! socket.id: ' + socket.id);
        numclics = numclics + 1;
        socket.emit('new click', {
            clics: numclics
        });
    });

    socket.on('disconnect', () => {
        console.log("Le client s'est connecté, socket.id = " + socket.id);
    });

}

console.log('Server on port 8080 https.CTRL+C to quit.');
