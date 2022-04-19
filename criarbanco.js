var sqlite3 = require('sqlite3').verbose();

//Instância do banco de dados
var db = new sqlite3.Database('./database/Empresa.db');

//Cria a tabela funcionário mostrada anteriormente
db.run(
    "CREATE TABLE IF NOT EXISTS Funcionario (" +
    "id INT NOT NULL PRIMARY KEY," +
    "nome VARCHAR (20) NOT NULL," +
    "idade INT NOT NULL," +
    "endereco VARCHAR (25))  "
);

console.log("Tabela criada com sucesso!");