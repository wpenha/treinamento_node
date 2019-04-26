const User = require('../../models/user.model');
const encrypting = require('../../util/encrypt');

/**
 * FUNCAO QUE SALVA NOVO USUARIO 
 * @param {*} body 
 */
const createUserDAO = async(body) =>{

    /**
     * GERANDO HASH PARA SALVAR NO BANCO
     */
    let password = await encrypting.encrypt(body.password);
    
    let newUser = new User({
        name: body.name,
        company: body.company,
        salary: body.salary ,
        userName: body.userName,
        password: password,
        email: body.email,
        address: body.address
    })

    return await newUser.save();
}

/**
 * FUNCAO QUE DEVOLVE SE ENCONTROU O USUARIO PELO ID
 * @param {*} id 
 */
const readUserDAO = async(id) =>{
    return await User.findOne({
        "_id":id
    })
}

/**
 * FUNCAO PARA ATUALIZAR O USUARIO
 * @param {*} id 
 * @param {*} body 
 */
const updateUserDAO = async(id, body)=>{
    return await User.findByIdAndUpdate(id, body);
}

/**
 * FUNCAO PARA DELETAR UM USUARIO PELO ID
 * @param {*} id 
 */
const deleteUserDAO = async(id)=>{
    return await User.deleteOne({
        "_id":id
    })
}

/**
 * FUNCAO PARA LISTAR TODOS OS USUARIOS
 */
const listUserDAO = async()=>{
    return await User.find();
}

/**
 * EXPORTACAO DAS OPERACOES
 */
module.exports = {
    createUserDAO,
    readUserDAO,
    updateUserDAO,
    deleteUserDAO,
    listUserDAO
}