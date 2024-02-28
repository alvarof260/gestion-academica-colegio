import UserMongo from '../dao/user.mongo.js'
import SubjectMongo from '../dao/subject.mongo.js'

import UserRepository from './user.services.js'
import SubjectRepository from './subject.services.js'

const userDao = new UserMongo()
const subjectDao = new SubjectMongo()

export const UserServices = new UserRepository(userDao)
export const SubjectServices = new SubjectRepository(subjectDao)
