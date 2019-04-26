/**
 * IMPORTACAO
 */
const jwt = require('jsonwebtoken');

/**
 * GERACAO DE TOKEN [ DEFININDO TEMPO DE EXPIRACAO ]
 */
const tokenGenerator = (payload) =>{
    try{
        let token = jwt.sign(payload, process.env.SECRET, {
            expiresIn:'1h'
        })

        return token;
    }catch(error){
        console.log(error);
        return error;
    }
}

/**
 * VALIDACAO DE TOKEN
 * @param {*} token 
 */
const tokenValidator = (token) =>{
    if(!token) throw new Error('Token invalido');
    return jwt.verify(token, process.env.SECRET);
}

/**
 * EXPORTACAO DE MODULO
 */
module.exports = {
    tokenGenerator,
    tokenValidator
}