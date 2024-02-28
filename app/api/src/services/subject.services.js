export default class SubjectRepository {
  constructor (SubjectDao) {
    this.SubjectDao = SubjectDao
  }

  async getAll () {
    return await this.SubjectDao.find()
  }

  async getAllView () {
    return await this.SubjectDao.find().lean().exec()
  }

  async getById (id) {
    return await this.SubjectDao.findById(id)
  }

  async getByProperty (prop) {
    return await this.SubjectDao.findOne(prop)
  }

  async getSubjectsByProperty (prop) {
    return await this.SubjectDao.find(prop)
  }

  async create (subject) {
    return await this.SubjectDao.create(subject)
  }

  async update (id, subject) {
    return await this.SubjectDao.update(id, subject)
  }

  async delete (id) {
    return await this.SubjectDao.delete(id)
  }
}
