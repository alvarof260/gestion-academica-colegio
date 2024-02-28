import { UserDao } from '../models/user.model.js'

export default class UserMongo {
  // get all users from the database for api
  async getAll () {
    return await UserDao.find()
  }

  // get all users from the database for view
  async getAllView () {
    return await UserDao.find().lean().exec()
  }

  // get user by id
  async getById (id) {
    return await UserDao.findById(id)
  }

  // get user by property (every property except _id)
  async getByProperty (prop, value) {
    return await UserDao.findOne({ [prop]: value })
  }

  // get users by property (every property except _id) in an array
  async getUsersByProperty (prop, value) {
    return await UserDao.find({ [prop]: value })
  }

  // create a new user in the database
  async create (user) {
    return await UserDao.create(user)
  }

  // update a user in the database
  async update (id, user) {
    return await UserDao.findOneAndUpdate({ _id: id }, user, { returnDocument: 'after' })
  }

  // delete a user in the database
  async delete (id) {
    return await UserDao.findOneAndDelete({ _id: id }, { returnDocument: 'after' })
  }
}
