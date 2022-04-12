const http = require('http');

const hostname = '127.0.0.1'; //localhost
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello World! </h1>');
});

server.listen(port, hostname, () => {
    console.log('Servidor ' + hostname + ' está ouvindo na porta ' + port);
});
