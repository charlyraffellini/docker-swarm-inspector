var express = require('express');
var bodyParser = require('body-parser');

var app = express();

const LISTEN_HOSTNAME = process.env.LISTEN_HOSTNAME || '0.0.0.0';
const LISTEN_PORT = process.env.LISTEN_PORT || '3000';

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    var connection = req.connection;
    res.status(200);
    res.set('Content-Type', 'text/plain');
    var message = `Request: ${req.headers.host}
Local Address: ${connection.localAddress}
Local Port: ${connection.localPort}
Remote Address: ${connection.remoteAddress}
Remote Family: ${connection.remoteFamily}
Remote Port: ${connection.remotePort}
`;

    res.send(message);
});

app.get('/crash', function (req, res) {
    process.exit(1);
});

app.listen(LISTEN_PORT, LISTEN_HOSTNAME, function () {
    console.log(`Listening on ${LISTEN_HOSTNAME}:${LISTEN_PORT}`);
});
