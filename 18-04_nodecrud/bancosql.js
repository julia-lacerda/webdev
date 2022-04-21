//antes de codar: dar "npm i sqlite3" e "npm i express"

var express = require("express");
var http = require("http");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var sqlite3 = require("sqlite3");

app.use(bodyParser.urlencoded({ extended: false }));

var server = http.createServer(app);
// Conectar com o banco de dados
var db = new sqlite3.Database("./database/Empresa.db");

var insercaosql =
    "INSERT INTO Funcionario " +
    "(id, nome, idade, endereco)" +
    "VALUES (?, ?, ?, ?)"; // esses ? são os req.body.xxxx (da linha 21)

app.post("/add", function (req, res) {
    //aqui eu boto tudo no banco de dados
    db.serialize(() => {
        db.run(
            insercaosql,
            [req.body.id, req.body.nome, req.body.idade, req.body.endereco],
            function (err) {
                if (err) {
                    return console.log(err.message); //se der erro, ele mostra uma mensagem de erro
                }
                console.log("Inserido com sucesso!"); // se der certo, ele mostra essa mensagem no terminal
                res.send( "O usuário com id " + req.body.id + " e nome " + req.body.nome + " foi cadastrado com sucesso!"); // e essa mensagem aparece no navegador
            }
        );
    });
});

var buscasql = "SELECT * FROM Funcionario WHERE id=?";
app.post('/ver', function (req, res) {
    //Aqui ele puxa informação do Bando de Dados
    db.serialize(() => {
        db.each(buscasql, [req.body.id], function (err, row) {
            if (err) {
                res.send("Não encontrei nada.");
                return console.log(err.message);
            }
                //se chegar até aqui, o usuário foi encontrado
                console.log("Inserido com sucesso!");
                res.send("<p> O usuário com id " + row.id + " foi encontrado e se chama " + row.nome + "</p>"); //está pegando da consulta que fez do banco de dados
            
        });
    });
});

    app.get("/inserir", function (req, res) {
        //aqui é para pegar o arquivo html (que nesse caso se  chama "inserir.html");
        res.sendFile(path.join(__dirname, "inserir.html"));
    });

    app.get("/buscar", function (req, res) {
        //aqui pega o arquivo busca.html
        res.sendFile(path.join(__dirname, "busca.html"));
    });

    server.listen(3333, function () {
        //inicializando o servidor
        console.log("Servidor ouvindo na porta 3333: ");
    });

