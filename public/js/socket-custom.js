var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

// Escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

// Enviar informnación
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

// Escuchar información

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});