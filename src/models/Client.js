const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    nombre: String,
    direccion: String,
    telefono: Number,
    correo: String,
    contrasena: String
});

module.exports = model('Client', clientSchema);