/**
 * IMPORTACAO
 */
const mongoose = require('mongoose'), Schema = mongoose.Schema;

/**
 * CRIACAO DO MODELO
 */
const userSchema = new Schema({
    name: String,
    company: String,
    salary: Number,
    userName: {type: String, required: true, unique: true},
    password: String,
    email: String,
    address: String
});

/**
 * EXPORTACAO DO MODELO
 */
module.exports = mongoose.model('User', userSchema);

