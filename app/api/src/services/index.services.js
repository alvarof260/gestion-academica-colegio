import UserMongo from '../dao/user.mongo.js'
import SubjectMongo from '../dao/subject.mongo.js'
import EnrollmentMongo from '../dao/enrollment.mongo.js'

import UserRepository from './user.services.js'
import SubjectRepository from './subject.services.js'
import EnrollmentRepository from './enrollment.services.js'

const userDao = new UserMongo()
const subjectDao = new SubjectMongo()
const enrollmentDao = new EnrollmentMongo()

export const UserServices = new UserRepository(userDao)
export const SubjectServices = new SubjectRepository(subjectDao)
export const EnrollmentServices = new EnrollmentRepository(enrollmentDao)
