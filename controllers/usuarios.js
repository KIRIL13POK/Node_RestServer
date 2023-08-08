const { response,request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');



const usuariosGet = async (req = request, res = response) => {
    /*const {q, nombre='No name',apikey, page = 1,limit} = req.query;´*/

    const {limite = 5, desde = 0} = req.query
    const usuarios = await Usuario.find()
        .skip(Number(desde))
        .limit(Number(limite))

    res.json({
       usuarios
    });
}
const usuariosPost = async (req, res) => {

    const {nombre,correo,password,rol} =req.body
    const usuario = new Usuario({nombre,correo,password,rol});

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt);

    //Guardar  en BD
    await usuario.save();


    res.json({
        usuario,
        
    })
}

const usuariosPut = async (req, res = response) => {

    const {id} = req.params;
    const { password, google,correo, ...resto}= req.body;

    //TODO validar contrsa base de datos
    if(password){

        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt);

    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);//Solo el Objeto.
}

const usuariosPath = (req, res) => {
    res.json({
        msg:'path API- controlador'
        
    })
}

const usuariosDelete =(req, res) => {
    res.json({
        msg:'delete API- controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete

}