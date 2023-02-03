const URL = "https://tda.mr486.com:8080";
const socket = io(URL, { autoConnect: true });

function avertir_serveur() {
    socket.emit('bouton_client');
}