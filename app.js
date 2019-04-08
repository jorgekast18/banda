// Use Emascript 6
'use strict'

// Load modules express and body-parser
var express = require('express');
var bodyParser = require('body-parser');

// Initialize express app
var app = express();

// Import routes
var routes = require('./routes/routes'); 


// Configure body parser to convert request in JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// load routes
app.use('/api', routes);

// Export app module
module.exports = app;