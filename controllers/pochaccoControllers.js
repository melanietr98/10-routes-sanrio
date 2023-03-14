const pochacco = require('../models/pochacco')

function index(req, res) {
    res.render('pochacco/Index', { pochacco })
}

function show(req, res){
    res.render('pochacco/Show', { pochacco: pochacco[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }