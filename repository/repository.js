import models from '../models/index';

class Repository {
  getAppointment(id) {
    return models.Appointment.findOne({ where: id });
  }
}

module.exports = {
  Repository: new Repository(),
};
