// Use Emascript 6
'use strict'

// Load mongoose module
var mongoose = require('mongoose');

// Load app.js file
var app = require('./app');

// Initialize variable port for conection with server
var port = 3030;

// Prepare promise for mongoose connection
mongoose.Promise = global.Promise;

// Connect mongoose
mongoose.connect('mongodb://localhost:27017/banda', { useNewUrlParser: true })
    .then(() => {
        // The connection is success and show message
        console.log("La conexión a la base de datos banda se ha realizado correctamente")
    
        // Build server
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3030");
        });
    })
    // En caso de error al momento de conectar la DB
    .catch(err => console.log(err));