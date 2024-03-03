export default class SubjectRepository {
  constructor (SubjectDao) {
    this.SubjectDao = SubjectDao
  }

  async getAll () {
    return await this.SubjectDao.getAll()
  }

  async getAllView () {
    return await this.SubjectDao.getAllView()
  }

  async getById (id) {
    return await this.SubjectDao.getById(id)
  }

  async getByProperty (prop) {
    return await this.SubjectDao.getByProperty(prop)
  }

  async getSubjectsByProperty (prop) {
    return await this.SubjectDao.getSubjectsByProperty(prop)
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
