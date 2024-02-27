import UserMongo from '../dao/user.mongo.js'
import UserRepository from './user.services.js'

const userDao = new UserMongo()
export const UserServices = new UserRepository(userDao)
