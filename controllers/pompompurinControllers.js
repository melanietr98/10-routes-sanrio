const pompompurin = require('../models/pompompurin')

function index(req, res) {
    res.render('pompompurin/Index', { pompompurin })
}

function show(req, res){
    res.render('pompompurin/Show', { pompompurin: pompompurin[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }