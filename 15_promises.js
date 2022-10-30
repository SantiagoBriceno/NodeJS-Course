const {readFile} = require('fs');

const getText = (ruta) => {
    return new Promise((resolve, reject) => {
        readFile(ruta, 'utf-8', (err, data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        });
    });
}

getText('./data/1.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/2.txt'))
    .then((result) => console.log(result))
    .catch((error) => console.log(error))


