const socket = io( SOCKET_URL, { autoConnect: true });

let authUser = false;
const etape = 1;

changeTapis();
donneur(authUser);


socket.on('auth', (auth) => {
    donneur(auth);
});

socket.on('info partie', (partie) => {
    console.log(partie);
});

function auth() {
    bootbox.prompt({
        title: 'Mot de passe Donneur',
        centerVertical: true,
        inputType: 'password',
        callback: function(password) {
            if(password !== null && password !== ""){
                socket.emit('auth', password);
            }
        }
    });
}

function donneur(auth){
    if(auth){
        document.getElementById('boutonAuth').style.visibility = "hidden";
        document.getElementById('donneurTab').style.display = "block";
        authUser = true;
    } else {
        document.getElementById('boutonAuth').style.visibility = "visible";
        document.getElementById('donneurTab').style.display = "none";
        authUser = false;
        AfficheEtapePartie(etape);
    }

}

function changeTapis()
{
    const checkbox = document.getElementById('changeTapis');
    if(checkbox.checked){
        document.getElementById('main-body').style.backgroundImage="url('/static/img/tapis02.jpg')";
    } else {
        document.getElementById('main-body').style.backgroundImage="url('/static/img/tapis01.jpg')";
    }
}

function AfficheEtapePartie(etape) {
    if(etape == 0){
        document.getElementById('partie_en_cours').style.display = "none";
        document.getElementById('creation_partie').style.display = "block";
    } else {
        document.getElementById('creation_partie').style.display = "none";
        document.getElementById('partie_en_cours').style.display = "block";
    }
}
