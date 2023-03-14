const sanrioDanshi = require('../models/sanrioDanshi')

function index(req, res) {
    res.render('sanrioDanshi/Index', { sanrioDanshi })
}

function show(req, res){
    res.render('sanrioDanshi/Show', { sanrioDanshi: sanrioDanshi[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }