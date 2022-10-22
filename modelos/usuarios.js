const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    
    correo: {
        type:String
    },
    clave: {
        type:String
    },
    
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;