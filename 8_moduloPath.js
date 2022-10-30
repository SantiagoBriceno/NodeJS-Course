//Es un modulo que ejecuta de una manera u otra segun
//el sistema operativo en el que nos encontremos

const path = require('path');

//Inserta el separador de direcciones segun el SO
// console.log(path.sep);

//Nos crea una direccion valida segun el SO que una todos los campos ingresados por parametros
// console.log(path.join('/public/', 'dis', '/styles', 'main.css'));

const filePath = path.join('/public/', 'dis', '/styles', 'main.css');

console.log(filePath);
console.log(path.basename(filePath)); //REtorna solo el nombre del archivo basico

console.log(path.dirname(filePath)); //Retorna la ruta del archivo ingresado sin el nombre del archivo base

console.log(path.parse(filePath)); //Retorna la ruta del archivo ingresado por parametro y lo transforma en objeto con los atributos 
//root, dir (direccion completa), base(nombre del archivo), ext(extencion del archivo), name(nombre del archivo)

//Nos retorna la ruta del archivo ingresado por parametro y completa la ruta mediante una ruta del sistema operativo
const otraDir = path.resolve('dist.js');

console.log(path.parse(otraDir));



