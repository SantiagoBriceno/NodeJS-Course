//Crear un servidor que pueda permitir recibir peticiones
//interpretarlas y mandar respuestas
const http = require('http');
http.createServer((request, response) => {
    response.write('hello World');
    response.end();
}).listen(3000);

console.log('servidor escuchando en el puerto 3000');
