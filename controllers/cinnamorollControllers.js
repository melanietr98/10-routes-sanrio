const cinnamoroll = require('../models/cinnamoroll')

function index(req, res) {
    res.render('cinnamoroll/Index', { cinnamoroll })
}

function show(req, res){
    res.render('cinnamoroll/Show', { cinnamoroll: cinnamoroll[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }