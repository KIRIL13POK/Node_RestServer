const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligartorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligartorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es obligartorio'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun:['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    },

});

UsuarioSchema.methods.toJSON = function(){
    const {__v,password, ...usuario } = this.toObject();
    return usuario;
}



module.exports = model('Usuario', UsuarioSchema);