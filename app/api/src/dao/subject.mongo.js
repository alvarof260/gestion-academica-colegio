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

  getByProperty (prop) {
    return SubjectDao.findOne(prop)
  }

  getSubjectsByProperty (prop) {
    return SubjectDao.find(prop)
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
