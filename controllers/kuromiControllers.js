const kuromi = require('../models/kuromi')

function index(req, res) {
    res.render('kuromi/Index', { kuromi })
}

function show(req, res){
    res.render('kuromi/Show', { kuromi: kuromi[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }