/**
 * IMPORTACAO
 */
const bcrypt = require('bcrypt');

/**
 * VALOR DA HASH
 */
const saltRounds = 10;

/**
 * CRIACAO DO HASH COM A SENHA
 * @param {*} pass 
 */
const encrypt = async (pass)=>{
    let hash = await bcrypt.hash(pass, saltRounds);
    return hash;
}

/**
 * COMPARACAO DO HASH COM A SENHA
 * @param {*} pass 
 * @param {*} hash 
 */
const dencrypt = async (pass, hash)=>{
    let res = await bcrypt.compare(pass, hash);
    return res;
}

/**
 * EXPORTACOA DO MODULO
 */
module.exports = {
    encrypt,
    dencrypt
}