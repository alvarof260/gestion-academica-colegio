export default class EnrollmentRepository {
  constructor (EnrollmentDao) {
    this.EnrollmentDao = EnrollmentDao
  }

  async getAll () {
    return await this.EnrollmentDao.getAll()
  }

  async getAllView () {
    return await this.EnrollmentDao.getAllView()
  }

  async getById (id) {
    return await this.EnrollmentDao.getById(id)
  }

  async getByProperty (prop, value) {
    return await this.EnrollmentDao.getByProperty(prop, value)
  }

  async getEnrollmentsByProperty (prop, value) {
    return await this.EnrollmentDao.getEnrollmentsByProperty(prop, value)
  }

  async create (enrollment) {
    return await this.EnrollmentDao.create(enrollment)
  }

  async update (id, enrollment) {
    return await this.EnrollmentDao.update(id, enrollment)
  }

  async delete (id) {
    return await this.EnrollmentDao.delete(id)
  }
}
