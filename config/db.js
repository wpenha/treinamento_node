/**
 * IMPORTACAO
 */
const mongoose = require('mongoose');

/**
 * CONEXAO COM A BASE
 */

const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0-340zy.mongodb.net/test?retryWrites=true`;
mongoose.connect(uri, {useNewUrlParser: true});
//mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0-340zy.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});


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