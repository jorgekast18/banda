'use strict'

// Load model band
var Band = require('../models/band');

module.exports = {
    // Save data that the band send 
    saveData: function saveData(req, res){ 
        var dataBand = new Band({
            position: req.body.position,
            speed: req.body.speed,
            hourChange: req.body.hourChange
        })

        dataBand.save(function(err, data){
            if(err) return console.log(err)
            console.log('El registro se ha guardado con éxito')
        })
        
        res.send('La información ha sido guardada con éxito')
    }
}