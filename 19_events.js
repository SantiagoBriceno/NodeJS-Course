const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//Emite un evento, comienza un evento
customEmitter.emit('');

//Escucha un evento response y actua
customEmitter.on('response', (data, secondData) => {
    console.log('recibido');
    console.log(data);
    console.log(secondData);
});

//Emite un evento response
customEmitter.emit('response', 'hello world', [1, 2, 3]);