const os = require('os');
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem()); //total de memoria ram disponible en bits
console.log(os.freemem()); //total de memoria ram libre en bits

//CREA UNA TABLA POR CONSOLA
console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem(),
});