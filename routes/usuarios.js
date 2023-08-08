const {Router} = require('express');

const { check } = require('express-validator');
const{ validarCampos } = require('../middlewares/validar_campos')

const{ esRoleValido,
       emailExiste,
       ixisteUsuarioPorId, } = require('../helpers/db_validators')

const { usuariosPut,
        usuariosGet, 
        usuariosPost,
        usuariosDelete, 
        usuariosPath } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);
router.put('/:id',[ 
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( ixisteUsuarioPorId ),
    check('rol').custom( esRoleValido ),

    validarCampos,


], usuariosPut);

router.post('/',[
    check('nombre','El nombre  es obligatorio').not().isEmpty(),
    check('password','El password debe ser mas de 6 letras').isLength({min: 6}),
    check('correo','El correo no es balido').isEmail(),
    //check('rol','No es un rol permetido').isIn( ['ADMIN_ROLE','USER_ROLE']),
    check('correo').custom( emailExiste ),
    check('rol').custom( esRoleValido ),
    check('correo','El correo no es balido').isEmail(),
    validarCampos,
] ,usuariosPost);

router.delete('/',usuariosDelete);
router.patch('/', usuariosPath);


module.exports = router;