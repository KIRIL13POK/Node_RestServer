const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está en la base de datos,`);
    }

}

const emailExiste = async (correo = '') => { 

 //Veerificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya esta registrado`);
    }
}

const ixisteUsuarioPorId = async (id) => { 

    //Veerificar si el ID existe
       const existeUsuarioId = await Usuario.findById(id)
       if ( !existeUsuarioId ) {
           throw new Error(`No ixiste ningun Usuario con el ID :${id}.`);
       }
   }


    module.exports = {
        esRoleValido,
        emailExiste,
        ixisteUsuarioPorId,

    }