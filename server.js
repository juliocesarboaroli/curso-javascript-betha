var http = require('http');
var app = require('./config/express');
var database = require('./config/database');

database('mongodb://localhost/convoqueme');

http.createServer(app).listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});