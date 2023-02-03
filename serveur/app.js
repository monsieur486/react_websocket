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

let numUsers = 0;
io.on("connection", (socket) => {
    console.log('Un client se connecte, socket.id = ' + socket.id);
    ServersReceived(socket);
});

function ServersReceived(socket) {
    socket.on('bouton_client', () => {
        console.log('Le client a cliqué sur le bouton !');
        numUsers = numUsers + 1;
        socket.broadcast.emit('new click', {
            click: numUsers
        });
    });

    socket.on('disconnect', () => {
        console.log("Le client s'est connecté, socket.id = " + socket.id);
    });

}

console.log('Server on port 8080 https.CTRL+C to quit.');
