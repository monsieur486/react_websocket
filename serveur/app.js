const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const axios = require('axios');
const { baseConfig } = require("./config");
const http_Server = http.createServer(app).listen(baseConfig.serveur_port);
const io = new Server(http_Server, { cors: { origin: baseConfig.clt_base_url } });

io.on("connection", (socket) => {
    console.log("⚡: Un nouveau client s'est connecté, socket.id: " + socket.id);
    axios.get(baseConfig.api_base_url+'/data').then(resp => {
        console.log(resp.data);
        io.emit('new click', resp.data );
    });
    ServersReceived(socket);
});

function ServersReceived(socket) {
    socket.on('bouton_client', () => {
        console.log('🖱️: clic émis par socket.id: ' + socket.id);
        axios.get(baseConfig.api_base_url+'/data/plus').then(resp => {
            console.log(resp.data);
            io.emit('new click', resp.data );
        });
    });

    socket.on('ctrlz_client', () => {
        console.log('🖱️: ctrl-z émis par socket.id: ' + socket.id);
        axios.get(baseConfig.api_base_url+'/data/moins').then(resp => {
            console.log(resp.data);
            io.emit('new click', resp.data );
        });
    });

    socket.on('raz', () => {
        console.log('🖱️: RAZ! => demande émise par socket.id: ' + socket.id);
        axios.get(baseConfig.api_base_url+'/data/raz').then(resp => {
            console.log(resp.data);
            io.emit('new click', resp.data );
        });
    });

    socket.on('disconnect', () => {
        console.log("🔥: Le client s'est connecté, socket.id = " + socket.id);
    });
}

console.log('✅: Server Lancé. CTRL+C pour quitter.');
