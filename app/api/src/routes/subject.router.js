import { Router } from 'express'

import {
  createSubjectController as createSubject,
  deleteSubjectController as deleteSubject
} from '../controllers/subject.controller.js'

import { handlePolicies } from '../middlewares/handlePolicies.middleware.js'

const subjectRouter = Router()

subjectRouter.post('/', createSubject)
subjectRouter.delete('/:id', handlePolicies(['ADMIN']), deleteSubject)

export default subjectRouter
