const twinStars = require('../models/twinStars')

function index(req, res) {
    res.render('twinStars/Index', { twinStars })
}

function show(req, res){
    res.render('twinStars/Show', { twinStars: twinStars[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }