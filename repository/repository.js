import models from '../models/index';


function getAppointment(id) {
  return models.Appointment.findOne({ where: id });
}

function allAppointmens() {
  models.Appointment.findAll().then(appointments => appointments);
}

module.exports = {
  getAppointment,
  allAppointmens,
};
