const helloKitty = require('../models/helloKitty')

function index(req, res) {
    res.render('helloKitty/Index', { helloKitty })
}

function show(req, res){
    res.render('helloKitty/Show', { helloKitty: helloKitty[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }