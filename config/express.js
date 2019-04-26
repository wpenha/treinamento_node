/**
 * IMPORTACAO
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/**
 * INSTANCIACAO
 */
const app = express();

/**
 * MEDDLEWARE
 */
app.use(cors());
app.use(bodyParser.json());

/**
 * UTILIZACAO DE ROTAS CRIADAS
 */
app.use('/api', require('../core/auth/auth.routes'));
app.use('/api', require('../core/user/user.routes'));

/**
 * UTILIZACAO DE ARQUIVO DE AMBIENTE .env
 */
require('dotenv').config();

/**
 * BANCO DADOS
 */
require('../config/db');

/**
 * EXPORTACAO DO APP
 */
module.exports = app;
