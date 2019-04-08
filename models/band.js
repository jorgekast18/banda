'use strict'

// Load mongoose
var mongoose =  require('mongoose');

// Initialize mongoose schema
var Schema = mongoose.Schema;

// Create object and attributes for banda schema
var bandSchema = Schema({
    position: String,
    speed: String,
    hourChange: String,
});

// Export schema
module.exports = mongoose.model('Band', bandSchema);