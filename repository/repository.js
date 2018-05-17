import models from '../models/index';


function getAppointment(id) {
  return models.Appointment.findOne({ where: id }).then(appointment => appointment);
}

function allAppointments() {
  return models.Appointment.findAll().then(appointments => appointments);
}

module.exports = {
  getAppointment,
  allAppointments,
};
