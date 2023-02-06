const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const http_Server = http.createServer(app).listen(8080);
const io = new Server(http_Server, {
    cors: {
    origin: ["https://tda.mr486.com","http://127.0.0.1:3000"]
  }
});

let numclics = 0;

io.on("connection", (socket) => {
    console.log("⚡: Un nouveau client s'est connecté, socket.id: " + socket.id);
    io.emit('new click', {
        clics: numclics
    });
    ServersReceived(socket);
});

function ServersReceived(socket) {
    socket.on('bouton_client', () => {
        numclics = numclics + 1;
        console.log('🖱️: ' + numclics + ' clics! => dernier clic émis par socket.id: ' + socket.id);
        io.emit('new click', {
            clics: numclics
        });
    });

    socket.on('raz', () => {
        numclics = 0;
        console.log('🖱️: RAZ! => demande émise par socket.id: ' + socket.id);
        io.emit('new click', {
            clics: numclics
        });
    });

    socket.on('disconnect', () => {
        console.log("🔥: Le client s'est connecté, socket.id = " + socket.id);
    });

}

console.log('✅: Server Lancé. CTRL+C pour quitter.');
