const socket = io(ws_url, { autoConnect: true });

socket.on('new click', (data) => {
    let clics = data.clics;
    if(clics===0){
        document.getElementById('boutonMoins').style.visibility = "hidden";
        document.getElementById('boutonRaz').style.visibility = "hidden";
    } else {
        document.getElementById('boutonMoins').style.visibility = "visible";
    }
    if(clics>=5){
        document.getElementById('boutonRaz').style.visibility = "visible";
    } else {
        document.getElementById('boutonRaz').style.visibility = "hidden";
    }
    document.getElementById('clics').textContent = clics;
    console.log("⚡: Nouvelle valeur de clics reçue depuis le serveur: " + clics);
});

function avertir_serveur() {
    socket.emit('bouton_client');
}

function ctrlz_serveur() {
    socket.emit('ctrlz_client');
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
