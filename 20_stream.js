// const {writeFile} = require('fs/promises');

// const createbigFile = async () => {
//     await writeFile('./data/bigDataFile.txt', 'hello world'.repeat(10000));
// }
// createbigFile();

const {createReadStream} = require('fs');

const stream = createReadStream('./data/bigDataFile.txt', {encoding: 'utf-8'});

//LEE en trozos de datos
stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('end', () => {
    console.log('ya termine de leer todo los trozos')
})

stream.on('error', (e) => {
    console.log(e);
})
