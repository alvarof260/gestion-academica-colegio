export default class UserRepository {
  constructor (UserDao) {
    this.UserDao = UserDao
  }

  async getAll () {
    return await this.UserDao.getAll()
  }

  async getAllView () {
    return await this.UserDao.getAllView()
  }

  async getById (id) {
    return await this.UserDao.getById(id)
  }

  async getByProperty (prop, value) {
    return await this.UserDao.getByProperty(prop, value)
  }

  async getUsersByProperty (prop, value) {
    return await this.UserDao.getUsersByProperty(prop, value)
  }

  async create (user) {
    return await this.UserDao.create(user)
  }

  async update (id, user) {
    return await this.UserDao.update(id, user)
  }

  async delete (id) {
    return await this.UserDao.delete(id)
  }
}
