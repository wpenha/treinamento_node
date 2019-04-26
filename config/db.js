/**
 * IMPORTACAO
 */
const mongoose = require('mongoose');

/**
 * CONEXAO COM A BASE
 */
mongoose.connect(`mongodb+srv://${process.env.BR_USER}:${process.env.BD_PASS}@cluster0-340zy.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true});

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