export default{
    Query:{
        getAppointment:(parent,{id},{models}) => models.Appointment.findOne({where:{id}}),
        allAppointments:(parent,args,{models}) => models.Appointment.findAll(),
    },

    Mutation:{
        createAppointment:(parent,args,{models}) => models.Appointment.create(args)
    }
}
