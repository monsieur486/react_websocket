const fs = require('fs');

let options = {
    key: fs.readFileSync('/home/prems/certs/privkey.key'),
    cert: fs.readFileSync('/home/prems/certs/fullchain.crt'),
    requestCert: true
};
let server = require('https').createServer(options);
let io = require('socket.io').listen(server);
server.listen(8080);
console.log('Server started at port: 8080');