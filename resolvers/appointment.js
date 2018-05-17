import Repository from '../repository/repository';

export default{
  Query: {
    getAppointment: (parent, { id }) => {
      Repository.getAppointment({ id });
    },
    allAppointments: (parent, args, context) => Repository.allAppointmens(),
  },

  Mutation: {
    createAppointment: (parent, args, { models }) => models.Appointment.create(args),
  },
};
