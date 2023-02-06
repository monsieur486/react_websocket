require('dotenv').config();

const URL = process.env.WS_URL;
const socket = io(URL, { autoConnect: true });

socket.on('new click', (data) => {
    let clics = data.clics;
    document.getElementById('clics').textContent = clics;
    console.log("⚡: Nouvelle valeur de clics reçue depuis le serveur: " + clics);
});

function avertir_serveur() {
    socket.emit('bouton_client');
}

function raz() {
    bootbox.confirm({
        message: 'Mettre le compteur à <b>0</b> ?',
        closeButton: false,
        buttons: {
            cancel: {
                label: '<i class="fa fa-times"></i> Annuler',
                className: 'btn-success'
            },
            confirm: {
                label: '<i class="fa fa-check"></i> !!! CONFIRMER !!!',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if(result){
                socket.emit('raz');
            }
        }
    });
}
