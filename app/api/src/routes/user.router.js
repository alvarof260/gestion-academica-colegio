import { Router } from 'express'

import {
  createUserController as createUser,
  changeStatusController as changeStatus,
  giveGradeToStudentController as giveGradeToStudent,
  addSubjectToStudentController as addSubjectToStudent,
  changePasswordController as changePassword
} from '../controllers/user.controller.js'
import { userIsActive } from '../middlewares/userIsActive.middleware.js'
import { handlePolicies } from '../middlewares/handlePolicies.middleware.js'

const userRouter = Router()

userRouter.post('/', createUser)
userRouter.put('/:id', userIsActive(), handlePolicies(['SUPERUSER', 'ADMIN']), changeStatus)
userRouter.put('/:uid/subject/:sid/grade', handlePolicies(['TEACHER']), giveGradeToStudent)
userRouter.put('/:uid/subject/:sid/add', handlePolicies(['ADMIN']), addSubjectToStudent)
userRouter.put('/:id/password', changePassword)

export default userRouter
