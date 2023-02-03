const fs = require('fs');

let options = {
    key: fs.readFileSync('/home/prems/certs/privkey.pem'),
    cert: fs.readFileSync('/home/prems/certs/fullchain.pem'),
    requestCert: true
};
let server = require('https').createServer(options);
let io = require('socket.io').listen(server);
server.listen(8080);
console.log('Server started at port: 8080');