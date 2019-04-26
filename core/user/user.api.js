/**
 * IMPORTACAO
 */
const userDAO = require('./user.dao');

/**
 * CONTROLLER CRIACAO DO USUARIO
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async(req, res) =>{
    let body = req.body;
    try{
        let userCreated = await userDAO.createUserDAO(body);
        res.status(201).json(userCreated);
    }catch(error){
        res.status(500).json(error);
    }
}

/**
 * CONTROLLER PARA RETORNAR UM USUARIO ESPECIFICO 
 * @param {*} req 
 * @param {*} res 
 */
const readUser = async(req, res) =>{
    let id = req.params.id;
    try{
        let user = await userDAO.readUserDAO(id);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json(error);
    }
}

/**
 * CONTROLLER PARA ATUALIZAR USUARIO ESPECIFICO 
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async(req, res) =>{
    let id = req.params.id;
    let body = req.body;
    try{
        let updateUser = await userDAO.updateUserDAO(id, body);
        let user = await userDAO.readUserDAO(id);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json(error);
    }
}

/**
 * CONTROLLER PARA DELETAR UM USUARIO ESPECIFICO
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async(req, res) => {
    let id = req.params.id;
    try{
        let deleteUser = await userDAO.deleteUserDAO(id);
        res.status(200).json(deleteUser);
    }catch(error){
        res.status(500).json(error);
    }
}

/**
 * CONTROLLER PARA LISTAR TODOS OS USUARIOS
 * @param {*} req 
 * @param {*} res 
 */
const listUser = async (req, res) =>{
    try{
        let users = await userDAO.listUserDAO();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json(error);
    }
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    listUser
}