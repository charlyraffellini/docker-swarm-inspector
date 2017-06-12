'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    var name = req.query.name || '[Not defined]';
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

console.log('Listening on port ' + port);

app.listen(port);
