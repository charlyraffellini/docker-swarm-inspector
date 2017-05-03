'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    var name = req.query.name || '[Not defined]';
    var connection = req.connection;
    res.send({
	local_address: connection.localAddress,
	local_port: connection.localPort,
	remote_adress: connection.remoteAddress,
	remote_port: connection.remotePort,
	remote_family: connection.remoteFamily
    });
});

console.log('Listening on port ' + port);

app.listen(port);
