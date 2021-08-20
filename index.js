
const express = require('express');
const path = require('path');
require('dotenv').config();

// APP  de Express
const app = express();

// Servidor NODE
// enviamos 'app' para tome sus valores definidos
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Path Público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if ( err ) throw new Error(err);

    console.log('Servidor escuchando en el puerto ', process.env.PORT);
});