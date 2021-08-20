const { io } = require('../index');

io.on('connection', client => {
    console.log('cliente Conectado');

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', ( payload ) => {
        console.log('mensaje', payload);
        io.emit('mensaje', {admin: 'Nuevo Mensaje'});
    });
});
