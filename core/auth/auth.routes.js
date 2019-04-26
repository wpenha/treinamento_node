/**
 * IMPORTACAO
 */
const expres = require('express');
const router = expres.Router();
const authAPI = require('./auth.api');

/**
 * ROTA DE VALIDACAO
 */
router.route('/auth').post(authAPI.authUser);

/**
 * MEDDLEWARE VALIDACAO DE TODOS AS REQUISICOES
 */
router.use('/*', authAPI.tokenChecker);

/**
 * EXPORTACAO DO MODULO
 */
module.exports = router;
