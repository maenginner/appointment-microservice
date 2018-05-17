import models from '../models/index';


function getAppointment(id) {
  return models.Appointment.findOne({ where: id });
}

function allAppointmens() {
  return models.Appointment.findAll();
}

module.exports = {
  getAppointment,
  allAppointmens,
};
