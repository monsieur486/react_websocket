require('dotenv').config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const axios = require('axios');
const port = process.env.SERVEUR_PORT;
const index = require("./routes/index");
const app = express();
app.use(index);
const http_Server = http.createServer(app).listen(process.env.SERVEUR_PORT);
const io = new Server(http_Server, { cors: { origin: process.env.CLT_BASE_URL } });

console.log("🖧: Origine => " + process.env.CLT_BASE_URL);
console.log("🖧: Api     => " + process.env.API_BASE_URL);

io.on("connection", (socket) => {
    console.log("⚡: Un nouveau client s'est connecté, socket.id: " + socket.id);
    axios.get(process.env.API_BASE_URL + '/data').then(resp => {
        io.emit('info partie', resp.data );
    });
    ServersReceived(socket);
});

function ServersReceived(socket) {
    socket.on('bouton_client', () => {
        axios.get(process.env.API_BASE_URL + '/data/plus').then(resp => {
            io.emit('new click', resp.data );
        });
    });

    socket.on('ctrlz_client', () => {
        axios.get(process.env.API_BASE_URL + '/data/moins').then(resp => {
            io.emit('new click', resp.data );
        });
    });

    socket.on('raz', () => {
        axios.get(process.env.API_BASE_URL + '/data/raz').then(resp => {
            io.emit('new click', resp.data );
        });
    });

    socket.on('disconnect', () => {
        console.log("🔥: Le client s'est connecté, socket.id = " + socket.id);
    });

    socket.on('auth', (auth) => {
        if(auth == process.env.PASSWORD_DONNEUR){
            socket.emit('auth', true);
        } else {
            socket.emit('auth', false);
        }
    });
}

console.log('✅: Server lancé en écoute sur le port ' + port + '. CTRL+C pour quitter.');