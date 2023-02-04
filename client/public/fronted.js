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
    bootbox.confirm({
        message: 'Mettre le compteur à <b>0</b> ?',
        buttons: {
            confirm: {
                label: 'Oui',
                className: 'btn-danger'
            },
            cancel: {
                label: 'Non',
                className: 'btn-success'
            }
        },
        callback: function (result) {
            if(result){
                socket.emit('raz');
            }
        }
    });
}
