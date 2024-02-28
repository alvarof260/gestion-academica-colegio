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

  async getByProperty (prop) {
    return await this.UserDao.getByProperty(prop)
  }

  async getUsersByProperty (prop) {
    return await this.UserDao.getUsersByProperty(prop)
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
