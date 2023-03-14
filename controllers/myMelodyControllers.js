const myMelody = require('../models/myMelody')

function index(req, res) {
    res.render('myMelody/Index', { dog })
}

function show(req, res){
    res.render('myMelody/Show', { myMelody: myMelody[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }