#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('NodeTest:server');
var http = require('http');
var websockets = require('./websockets');




/**
 * Get port from environment and store in Express.
 */

var port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, function () { console.log('Server listening on', port) });
server.on('error', onError);
server.on('listening', onListening);

websockets.connect(server);


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error('Port ' + port + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('Port ' + port + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    debug('Listening on port ' + server.address().port);
}


