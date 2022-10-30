const http = require("http");
const myServer = http.createServer((request, response) => {
    switch (request.url) {
      case "/":
        response.write(`
            <h1>Bienvenido a nuestro servidor</h1>
            <p>lorem ipsum</p>
        `);
        break;
      case "/about":
        response.write(`
            <h1>Quienes Somos</h1>
            <p>lorem ipsum</p>
        `);
        break;

      default:
        response.write(`

            <h1>Pagina no encontrada</h1>
            <a href = "/">volver a la pagina principal</a>
        
        `);
        break;
    }

    response.end();
  })
  .listen(3000);

console.log("servidor escuchando en el puerto 3000");
