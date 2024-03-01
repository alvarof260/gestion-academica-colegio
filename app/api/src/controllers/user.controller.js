import { UserServices } from '../services/index.services.js'

const createUserController = async (req, res) => {
  const user = req.body
  try {
    const newUser = await UserServices.create(user)
    if (!newUser) return res.status(400).json({ message: 'User not created' })
    res.status(201).json(newUser)
  } catch (err) {
    console.log(err)
  }
}

const changeStatusController = async (req, res) => {
  console.log(req.user)
  if (req.user.role !== 'SUPERUSER') return res.status(401).json({ status: 'Unauthorized', message: 'You are not authorized to perform this action' })
  const { id } = req.params
  try {
    const user = await UserServices.getById(id)
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' })
    if (user.role !== 'ADMIN') return res.status(400).json({ status: 'error', message: 'You can only change the status of an admin' })
    user.status = user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
    const result = await UserServices.update(id, user)
    res.status(200).json({ status: 'success', payload: result })
  } catch (err) {
    console.log(err)
  }
}

export { createUserController, changeStatusController }
