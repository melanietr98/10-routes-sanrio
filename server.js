const express = require("express");
const app = express();
const PORT = 8082

app.get("/", (request, response) => {
    response.send("Hi there");
});

const cinnamorollRoutes = require('./routes/cinnamorollRoutes');
const helloKittyRoutes = require('./routes/helloKittyRoutes');
const keroppiRoutes = require('./routes/keroppiRoutes');
const kuromiRoutes = require('./routes/kuromiRoutes');
const myMelodyRoutes = require('./routes/myMelodyRoutes');
const pompompurinRoutes = require('./routes/pompompurinRoutes');
const pochaccoRoutes = require('./routes/pochaccoRoutes');
const sanrioDanshiRoutes = require('./routes/sanrioDanshiRoutes');
const tuxedoSamRoutes = require('./routes/tuxedoSamRoutes');
const twinStarsRoutes = require('./routes/twinStarsRoutes');

//setting up view
const {createEngine} = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

app.use('/cinnamoroll', cinnamorollRoutes);
app.use('/hellokitty', helloKittyRoutes);
app.use('/keroppi', keroppiRoutes);
app.use('/kuromi', kuromiRoutes);
app.use('/mymelody', myMelodyRoutes);
app.use('/pompompurin', pompompurinRoutes);
app.use('/pochacco', pochaccoRoutes);
app.use('/sanriodanshi', sanrioDanshiRoutes);
app.use('/tuxedosam', tuxedoSamRoutes);
app.use('/twinstars', twinStarsRoutes);

app.listen(PORT, () => {
    console.log("Listen on the port ...");
});
