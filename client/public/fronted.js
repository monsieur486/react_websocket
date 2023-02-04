const URL = "https://tda.mr486.com:8080";
const socket = io(URL, { autoConnect: true });

socket.on('new click', (data) => {
    let clics = data.clics;
    document.getElementById('clics').textContent = clics;
    console.log("Message du serveur: " + clics);
});

function avertir_serveur() {
    socket.emit('bouton_client');
}

function raz() {
    bootbox.confirm('Mise à 0 du compteur de clics!', function(result) {
        if(result){
            socket.emit('raz');
        }
    });
}
