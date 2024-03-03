import { Router } from 'express'

import {
  createSubjectController as createSubject,
  addTeacherToSubjectController as addTeacherToSubject,
  deleteSubjectController as deleteSubject
} from '../controllers/subject.controller.js'

import { handlePolicies } from '../middlewares/handlePolicies.middleware.js'

const subjectRouter = Router()

subjectRouter.post('/', createSubject)
subjectRouter.put('/:sid/teacher/:tid', handlePolicies(['ADMIN']), addTeacherToSubject)
subjectRouter.delete('/:id', handlePolicies(['ADMIN']), deleteSubject)

export default subjectRouter
