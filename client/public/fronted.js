const URL = "https://tda.mr486.com:8080";
const socket = io(URL, { autoConnect: true });

socket.on('new click', (data) => {
    console.log("Message du serveur: " + data);
});

function avertir_serveur() {
    socket.emit('bouton_client');
}