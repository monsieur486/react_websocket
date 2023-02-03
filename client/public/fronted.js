const URL = "https://tda.mr486.com:8080";
const socket = io(URL, { autoConnect: true });

let numUsers = 0;

socket.on('new click', (numUsers) => {
    console.log("Message du serveur: " + numUsers);
});

function avertir_serveur() {
    socket.emit('bouton_client');
}