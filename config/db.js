/**
 * IMPORTACAO
 */
const mongoose = require('mongoose');

/**
 * CONEXAO COM A BASE
 */
mongoose.connect('mongodb://localhost:27017/projeto4', {useNewUrlParser: true});

/**
 * EXIBICAO DO STATUS DE CONEXAO
 */
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=>{
    console.log('MongoDB está conectado');
})

/**
 * EXPORTACAO DO MONGOOSE
 */
module.exports = mongoose;