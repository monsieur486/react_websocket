require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const axios = require('axios');
const http_Server = http.createServer(app).listen(process.env.SERVEUR_PORT);
const io = new Server(http_Server, { cors: { origin: process.env.CLT_BASE_URL } });

io.on("connection", (socket) => {
    console.log("⚡: Un nouveau client s'est connecté, socket.id: " + socket.id);
    axios.get(process.env.API_BASE_URL + '/data').then(resp => {
        console.log(resp.data);
        io.emit('new click', resp.data );
    });
    ServersReceived(socket);
});

function ServersReceived(socket) {
    socket.on('bouton_client', () => {
        console.log('🖱️: clic émis par socket.id: ' + socket.id);
        axios.get(process.env.API_BASE_URL + '/data/plus').then(resp => {
            console.log(resp.data);
            io.emit('new click', resp.data );
        });
    });

    socket.on('ctrlz_client', () => {
        console.log('🖱️: ctrl-z émis par socket.id: ' + socket.id);
        axios.get(process.env.API_BASE_URL + '/data/moins').then(resp => {
            console.log(resp.data);
            io.emit('new click', resp.data );
        });
    });

    socket.on('raz', () => {
        console.log('🖱️: RAZ! => demande émise par socket.id: ' + socket.id);
        axios.get(process.env.API_BASE_URL + '/data/raz').then(resp => {
            console.log(resp.data);
            io.emit('new click', resp.data );
        });
    });

    socket.on('disconnect', () => {
        console.log("🔥: Le client s'est connecté, socket.id = " + socket.id);
    });
}

console.log('✅: Server Lancé. CTRL+C pour quitter.');
