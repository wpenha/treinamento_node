/**
 * IMPORTCACAO
 */
const User = require('../../models/user.model');

/**
 * BUSCA USUARIO PARA REALZIAR AUTENTICACAO 
 * @param {*} user 
 */
const authUserDAO = async (user)=>{
    return await User.findOne({
        userName:user
    })
}

/**
 * EXPORTACAO DO MODULO
 */
module.exports={
    authUserDAO
}