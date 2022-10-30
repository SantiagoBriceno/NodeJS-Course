//Async: Funciona de forma asincrona (no al mismo tiempo), funciona a la par, no necesita esperar que termine una funcion para realizar otra

const fs = require('fs');

//De manera asincrona 
//una funcion tipo CALLBACK como parametro que tiene a su vez 2 parametros 
//"Error" que contendra el error que pudo haber ocurrido al momento de leer el archivo
//"data" que contiene los datos del archivo

fs.readFile("./data/1.txt","utf-8",(error, data) => {
    if(error){
        console.log(error);
    }
    
    console.log(data);

    //Si esta dentro de la funcion, lo que viene en el codigo se realizara de manera sincrona NO ES RECOMENDADO
    // fs.readFile("./data/2.txt","utf-8",(error, data) => {
    //     if(error){
    //         console.log(error);
    //     }
        
    //     console.log(data);
    // })
})






