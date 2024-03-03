import { SubjectDao } from '../models/subject.model.js'

export default class SubjectMongo {
  getAll () {
    return SubjectDao.find()
  }

  getAllView () {
    return SubjectDao.find().lean().exec()
  }

  getById (id) {
    return SubjectDao.findById(id)
  }

  getByProperty (prop, value) {
    return SubjectDao.findOne({ [prop]: value })
  }

  getSubjectsByProperty (prop, value) {
    return SubjectDao.find({ [prop]: value })
  }

  create (subject) {
    return SubjectDao.create(subject)
  }

  update (id, subject) {
    return SubjectDao.findOneAndUpdate({ _id: id }, subject, { returnDocument: 'after' })
  }

  delete (id) {
    return SubjectDao.findOneAndDelete({ _id: id }, { returnDocument: 'after' })
  }
}
