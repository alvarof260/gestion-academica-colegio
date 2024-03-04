import { Router } from 'express'

import { changeEnrollmentStatusController as changeEnrollmentStatus } from '../controllers/enrollment.controller.js'
import { handlePolicies } from '../middlewares/handlePolicies.middleware.js'

const enrollmentRouter = Router()

enrollmentRouter.put('/:uid/enrollment/:eid', handlePolicies(['ADMIN']), changeEnrollmentStatus)

export default enrollmentRouter
