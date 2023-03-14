const tuxedoSam = require('../models/tuxedoSam')

function index(req, res) {
    res.render('tuxedoSam/Index', { tuxedoSam })
}

function show(req, res){
    res.render('tuxedoSam/Show', { tuxedoSam: tuxedoSam[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }