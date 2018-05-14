export default (sequelize, DataTypes) => {
    const Appointment = sequelize.define('appointment',{
       id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        appointmentType: {
           type: DataTypes.STRING,
            allowNull:false
        },
        patientId: {
           type: DataTypes.STRING,
            allowNull:true
        }
    });

    //TODO: Determine if the following block is needed or not since we not have any relational dependency inside the same microservice. For now, commented.
    /*Appointment.associate = (models) =>{

    };*/
    return Appointment;
};