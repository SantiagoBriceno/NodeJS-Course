const fs = require('fs');

//Metodo que lee un archivo que se encuentra en una ruta ingresada y retorna un BUFFER 
//Buffer, es el archivo sin ser interpretado

const uno = fs.readFileSync("./data/1.txt", "utf-8");
console.log(uno);

const dos = fs.readFileSync("./data/2.txt");
console.log(dos.toString());

const tittle = 'este es el contenido del archivo 5, donde si vuelvo a crear un archivo con el mismo nombre desde node, se sobrescribira '



fs.writeFileSync("./data/5.txt", tittle);