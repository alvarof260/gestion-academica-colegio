import { Router } from 'express'

import {
  createUserController as createUser,
  changeStatusController as changeStatus
} from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/', createUser)
userRouter.put('/:id', changeStatus)

export default userRouter
