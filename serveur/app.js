var options = {
    key: fs.readFileSync('/home/prems/certs/privkey.key'),
    cert: fs.readFileSync('/home/prems/certs/fullchain.crt'),
    requestCert: true
};
var server = require('https').createServer(options, app);
var io = require('socket.io').listen(server);
server.listen(8080);
console.log('Server started at port: 8080');