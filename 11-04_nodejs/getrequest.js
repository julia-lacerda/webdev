var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

//Ouvimos as requsições de get aqui
app.get('/getmetodo', function(req, res) {
    res.send("<h1> Você se conectou com o servidor! </h1>");
});

server.listen(3333, function() {
    console.log("Server ouvindo na porta 3333");
})