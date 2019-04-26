/**
 * IMPORTACAO
 */
const authDAO = require('./auth.dao');
const encrypting = require('../../util/encrypt');
const tokenGenerator = require('../../util/tokenGenerator');

/**
 * VALIDACAO DO USUARIO E GERACAO DE TOKEN
 * @param {*} req 
 * @param {*} res 
 */
const authUser = async (req, res)=>{
    let user = req.body.user;
    let pass = req.body.password;

    try{
        //console.log("Usuario: " + user);
        let userData = await authDAO.authUserDAO(user);

        //console.log("Usuario data: " + userData);
        let checkPass = encrypting.dencrypt(pass, userData.password);

        //console.log("Usuario pass: " + checkPass);
        if(checkPass){
            let token = await tokenGenerator.tokenGenerator({id:userData.userName});
            res.status(200).json(token);
        }else{
            res.status(401).send('Usuário ou senha inválido(s)!')
        }
    }catch(error){
        res.status(401).send('Usuário ou senha inválido(s)!')
    }
}

/**
 * VALIDACAO DE TOKEN
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const tokenChecker = async (req, res, next)=>{
    let token = req.headers['x-access-token'];

    try{
        let tokenChecker = await tokenGenerator.tokenValidator(token);
        req.token = tokenChecker;
        next();
    }catch(error){
        console.error("[[ ERRO VALIDATOR TOKEN ]]: " + error);
        res.status(401).json(error);
    }
}

/**
 * EXPORTACAO DO MODULO
 */
module.exports = {
    authUser, 
    tokenChecker
}