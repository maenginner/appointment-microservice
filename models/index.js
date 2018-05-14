import Sequelize from 'sequelize';
import config from '../config/config'

const sequelize = new Sequelize(config.db.database,config.db.user, config.db.password,{
    host: config.db.host,
    dialect: config.db.dialect,
    define: {
        underscored: true,
    },
});

//This kind of models let us extend our model with other entities as needed.
const models = {
    Appointment: sequelize.import('./appointment')
};

//TODO: Determine if the following block of code is needed since we don't have any association because we just have one model in this example. By now, will still commented.
/*Object.keys(models).forEach((modelName) =>{
    if ('associate' in models[modelName]){
        models[modelName].associate(models);
    }
});*/

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;