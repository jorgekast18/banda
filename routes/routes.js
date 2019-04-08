'use strict'

// Load module express
var express = require('express');

// Load controller
var BandController = require('../controllers/band-controller.js');

// Call module router
var api = express.Router();

// Create route for save data of banda
api.get('/banda', BandController.saveData);

// Export module api
module.exports = api;