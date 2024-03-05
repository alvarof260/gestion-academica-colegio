import { Router } from 'express'

import {
  createMeetController as createMeet,
  changeAssistMeetController as changeAssistMeet
} from '../controllers/meet.controller.js'

const meetRouter = Router()

meetRouter.post('/:uid/from/:uid2', createMeet)
meetRouter.put('/:mid', changeAssistMeet)

export default meetRouter
