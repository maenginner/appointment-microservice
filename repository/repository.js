import models from '../models/index';


function getAppointment(id) {
  return models.Appointment.findOne({ where: { id } });
}

module.exports = {
  getAppointment,
};
