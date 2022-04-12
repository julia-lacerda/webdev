
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer(app);
var path = require("path");



app.use(bodyParser.urlencoded({extended: false}));
//Ouvimos as requsições de get aqui
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './formulario.html'));
});
http.createServer(app);

app.post('/mostrar', function(req, res) {
    res.send("<p> Nome: " + req.body.nome + "</p>" + 
    "<p> Idade: " + req.body.idade + "</p>" +
    "<p> Endereco: " + req.body.endereco + "</p>" );
})

server.listen(3333, function() {
    console.log("Server ouvindo na porta 3333");
})