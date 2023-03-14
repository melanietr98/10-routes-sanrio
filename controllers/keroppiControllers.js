const keroppi = require('../models/keroppi')

function index(req, res) {
    res.render('keroppi/Index', { keroppi })
}

function show(req, res){
    res.render('keroppi/Show', { keroppi: keroppi[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }