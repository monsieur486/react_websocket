const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const http_Server = http.createServer(app).listen(8080);
const io = new Server(http_Server, {
    cors: {
        origin: "https://tda.mr486.com/ws"
    }
});

let numclics = 0;

let laurent = { nom: "Laurent", photo: "laurent.jpg", points: 150};
let dan = { nom: "Dan", photo: "dan.jpg", points: 50};
let jp = { nom: "JP", photo: "jp.jpg", points: -200};
let etienne = { nom: "Etienne", photo: "etienne.jpg", points: 0};

let partie = {
    nom: "2023-01-12",
    joueurs: [
        laurent,
        dan,
        jp,
        etienne
    ]
}

io.on("connection", (socket) => {
    console.log('Un client se connecte, socket.id = ' + socket.id);
    io.emit('new click', {
        clics: numclics
    });
    ServersReceived(socket);
});

function ServersReceived(socket) {
    socket.on('bouton_client', () => {
        numclics = numclics + 1;
        console.log(numclics + ' clics! => id: ' + socket.id);
        io.emit('new click', {
            clics: numclics
        });
    });

    socket.on('raz', () => {
        numclics = 0;
        console.log(' RAZ! => id: ' + socket.id);
        io.emit('new click', {
            clics: numclics
        });
    });

    socket.on('disconnect', () => {
        console.log("Le client s'est connecté, socket.id = " + socket.id);
    });

}

console.log('Server on port 8080 https.CTRL+C to quit.');
