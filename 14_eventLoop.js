console.log("primero");

//No se ejecuta hasta que pasen 3000 ms 
setTimeout(() => {
    console.log("segundo")
}, 0);

console.log("tercero");


const http = require("http");
const server = http.createServer((request, response) => {

    if(request.url === '/'){
        response.write('Bienvenido al servidor')
        return response.end();
    }

    if(request.url === '/about'){
        
        //TASK CODIGO BLOQUEANTE DEL SERVIDOR
        for(let i = 0; i < 100000; i++){
            console.log(Math.random() * i);
        }
        
        response.write('Quien somos')
        return response.end();
    }

    response.end('Not Found');

})

server.listen(3000)
console.log('Server Port 3000')
