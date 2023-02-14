const socket = io( SOCKET_URL, { autoConnect: true });
let donneur_auth = false;

donneur(donneur_auth);

socket.on('auth', (auth) => {
    donneur(auth)
});

function auth() {
    bootbox.prompt({
        title: 'Mot de passe Donneur',
        centerVertical: true,
        inputType: 'password',
        callback: function(result) {
            if(result !== null && result !== ""){
                socket.emit('auth', result);
            }
        }
    });
}

function donneur(auth){
    if(auth){
        document.getElementById('boutonAuth').style.visibility = "hidden";
        document.getElementById('donneurTab').style.visibility = "visible";
    } else {
        document.getElementById('boutonAuth').style.visibility = "visible";
        document.getElementById('donneurTab').style.visibility = "hidden";
    }

}
