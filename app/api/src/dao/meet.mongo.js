import { MeetDao } from '../models/meet.model.js'

export default class MeetMongo {
  getAll () {
    return MeetDao.find()
  }

  getAllView () {
    return MeetDao.find().lean().exec()
  }

  getById (id) {
    return MeetDao.findById(id)
  }

  getByProperty (prop, value) {
    return MeetDao.findOne({ [prop]: value })
  }

  getMeetsByProperty (prop, value) {
    return MeetDao.find({ [prop]: value })
  }

  create (meet) {
    return MeetDao.create(meet)
  }

  update (id, meet) {
    return MeetDao.findOneAndUpdate({ _id: id }, meet, { returnDocument: 'after' })
  }

  delete (id) {
    return MeetDao.findOneAndDelete({ _id: id }, { returnDocument: 'after' })
  }
}
