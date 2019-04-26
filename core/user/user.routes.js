/**
 * IMPORTACAO
 */
const express = require('express');
const router = express.Router();
const userAPI = require('./user.api');

/**
 * ROTA DE LISTA DE TODOS OS USUARIOS
 */
router.route('/users').get(userAPI.listUser);

/**
 * ROTA DE BUSCA DE USUARIO ESPECIFICO
 */
router.route('/user/:id').get(userAPI.readUser);

/**
 * ROTA PARA CRIACAO DE USUARIO
 */
router.route('/create_user').post(userAPI.createUser);

/**
 * ROTA PARA ATUALIZACAO DE USUARIO
 */
router.route('/update_user/:id').put(userAPI.updateUser);

/**
 * ROTA PARA EXCLUSAO DE USUARIO
 */
router.route('/delete_user/:id').delete(userAPI.deleteUser);

/** 
 * EXPORTACAO DAS ROTAS 
 */
module.exports = router;