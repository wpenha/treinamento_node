/**
 * IMPORTACAO
 */
const express = require('express');
const bodyParser = require('body-parser');

/**
 * INSTANCIACAO
 */
const app = express();

/**
 * MEDDLEWARE
 */
app.use(bodyParser.json());

/**
 * UTILIZACAO DE ROTAS CRIADAS
 */
app.use('/api', require('../core/auth/auth.routes'));
app.use('/api', require('../core/user/user.routes'));

/**
 * BANCO DADOS
 */
require('../config/db');

/**
 * UTILIZACAO DE ARQUIVO DE AMBIENTE .env
 */
require('dotenv').config();

/**
 * EXPORTACAO DO APP
 */
module.exports = app;
