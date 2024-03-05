import UserMongo from '../dao/user.mongo.js'
import SubjectMongo from '../dao/subject.mongo.js'
import EnrollmentMongo from '../dao/enrollment.mongo.js'
import MeetMongo from '../dao/meet.mongo.js'

import UserRepository from './user.services.js'
import SubjectRepository from './subject.services.js'
import EnrollmentRepository from './enrollment.services.js'
import MeetRepository from './meet.services.js'

const userDao = new UserMongo()
const subjectDao = new SubjectMongo()
const enrollmentDao = new EnrollmentMongo()
const meetDao = new MeetMongo()

export const UserServices = new UserRepository(userDao)
export const SubjectServices = new SubjectRepository(subjectDao)
export const EnrollmentServices = new EnrollmentRepository(enrollmentDao)
export const MeetServices = new MeetRepository(meetDao)
