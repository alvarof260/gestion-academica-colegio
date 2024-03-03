import { EnrollmentDao } from '../models/enrollment.model.js'

export default class EnrollmentMongo {
  getAll () {
    return EnrollmentDao.find()
  }

  getAllView () {
    return EnrollmentDao.find().lean().exec()
  }

  getById (id) {
    return EnrollmentDao.findById(id)
  }

  getByProperty (prop, value) {
    return EnrollmentDao.findOne({ [prop]: value })
  }

  getEnrollmentsByProperty (prop, value) {
    return EnrollmentDao.find({ [prop]: value })
  }

  create (enrollment) {
    return EnrollmentDao.create(enrollment)
  }

  update (id, enrollment) {
    return EnrollmentDao.findOneAndUpdate({ _id: id }, enrollment, { returnDocument: 'after' })
  }

  delete (id) {
    return EnrollmentDao.findOneAndDelete({ _id: id }, { returnDocument: 'after' })
  }
}
