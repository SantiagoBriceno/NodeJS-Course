//Exportar modulos o partes de codigo a nuestra app principal

//OTRA FORMA DE ASIGNAR VALORES A EXPORT DE MODULE 
const myWebAddress = "faztweb.com";
const myNumber = 30
const myArray = [10, 20, 30]
const user = {
    name: "John",
    last: "ray"
}
 
module.exports.user = user;
module.exports.myNumber = myNumber;
module.exports.myArray = myArray;
module.exports.myWebAddress = myWebAddress

console.log(module);