'use strict'

// Load model band
var Band = require('../models/band');

module.exports = {
    // Save data that the band send 
    saveData: function saveData(req, res){ 
        var dataBand = new Band({
            position: '90',
            speed: '10 m/s',
            hourChange: '11:00 p.m.'
        })

        dataBand.save(function(err, data){
            if(err) return console.log(err)
            console.log('El registro se ha guardado con éxito')
        })
        
        res.send('The data was saved')
    }
}