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
        closeButton: false,
        className: 'rubberBand animated',
        buttons: {
            cancel: {
                label: '<i class="fa fa-times"></i> Annuler',
                className: 'btn-success'
            },
            confirm: {
                label: '<i class="fa fa-check"></i> Confirmer',
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
