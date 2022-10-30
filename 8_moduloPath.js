//Es un modulo que ejecuta de una manera u otra segun
//el sistema operativo en el que nos encontremos

const path = require('path');

//Inserta el separador de direcciones segun el SO
// console.log(path.sep);

//Nos crea una direccion valida segun el SO que una todos los campos ingresados por parametros
// console.log(path.join('/public/', 'dis', '/styles', 'main.css'));

const filePath = path.join('/public/', 'dis', '/styles', 'main.css');

console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve('dist'));



