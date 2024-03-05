export default class MeetRepository {
  constructor (meetDao) {
    this.meetDao = meetDao
  }

  async getAll () {
    return this.meetDao.getAll()
  }

  async getAllView () {
    return this.meetDao.getAllView()
  }

  async getById (id) {
    return this.meetDao.getById(id)
  }

  async getByProperty (prop, value) {
    return this.meetDao.getByProperty(prop, value)
  }

  async getMeetsByProperty (prop, value) {
    return this.meetDao.getMeetsByProperty(prop, value)
  }

  async create (meet) {
    return this.meetDao.create(meet)
  }

  async update (id, meet) {
    return this.meetDao.update(id, meet)
  }

  async delete (id) {
    return this.meetDao.delete(id)
  }
}
