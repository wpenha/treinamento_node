/**
 * IMPORTANDO AS CONFIGURACOES
 */
const app = require('./config/express');

/**
 * MAPEAMENTO DA ROTA /
 */
app.get('/', (req, res)=>{
    console.log('[[ LOG ]] new request: '+ app.body);
    res.send('Boa tarde Node JS');
});

/**
 * ESCUTADOR
 */
app.listen(process.env.PORT, ()=>{
    console.log('the server is running on port '+process.env.PORT);
})