const fs = require('fs');

//Metodo que lee un archivo que se encuentra en una ruta ingresada y retorna un BUFFER 
//Buffer, es el archivo sin ser interpretado

const uno = fs.readFileSync("./data/1.txt", "utf-8");
console.log(uno);

const dos = fs.readFileSync("./data/2.txt");
console.log(dos.toString());

const tittle = 'este es el contenido del archivo 6 inicialmente'

const agregar = 'Contenido agregado al archivo 6 desde Node,JS '

/*
CREAR ARCHIVOS 
fs.writeFileSync("./data/6.txt", tittle);
*/

/*AGREGAR CONTENIDO A ARCHIVOS EXISTENTES*/ 
fs.writeFileSync("./data/6.txt", agregar, {
    flag: 'a'
})