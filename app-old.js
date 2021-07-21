
const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    // res.writeHead(200, { 'Content-Type': 'Text/plain' });
    // const persona = {
    //     id: 1,
    //     nombre: 'Manuel'
    // }
    
    res.write('Hola Mundo');
    res.end();

})
    .listen(8080);

console.log('Escuchando el puerto ', 8080);