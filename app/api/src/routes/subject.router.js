import { Router } from 'express'

import { createSubjectController as createSubject } from '../controllers/subject.controller.js'

const subjectRouter = Router()

subjectRouter.post('/', createSubject)

export default subjectRouter
