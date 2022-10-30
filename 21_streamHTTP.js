const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigDataFile.txt',{encoding: 'utf8'
    });

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })
})

server.listen(3000);
console.log(`server on port ${3000}`);