const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN2,);
        ////////////////
        //await mongoose.connect('mongodb+srv://user_node_cafe:NDOaJVRghHo4jvNl@cluster0.p749xag.mongodb.net/',
        //
        //);
        ////////////
        console.log('Base de Datos online');
    } catch (error) {
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConection
};