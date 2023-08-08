const { Schema, model } = require('mongoose');

const RoleSchema = Schema({

    rol: {
        type: String,
        requiered: [ true, 'El rol es oobligatorio']
    }

});



module.exports = model('Role', RoleSchema);