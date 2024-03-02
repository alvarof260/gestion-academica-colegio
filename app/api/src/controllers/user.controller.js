import { UserServices } from '../services/index.services.js'
import { hashPassword } from '../utils/password.utils.js'

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
  const { id } = req.params
  try {
    const user = await UserServices.getById(id)
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' })
    if (user.role !== 'ADMIN' && req.user === 'SUPERUSER') return res.status(400).json({ status: 'error', message: 'You can only change the status of an admin (SUPERUSER)' })
    if ((user.role === 'SUPERUSER' || user.role === 'ADMIN') && req.user === 'ADMIN') return res.status(400).json({ status: 'error', message: 'You cannot change the status of a SUPERUSER or ADMIN (ADMIN)' })
    user.status = user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
    const result = await UserServices.update(id, user)
    res.status(200).json({ status: 'success', payload: result })
  } catch (err) {
    console.log(err)
  }
}

const changePasswordController = async (req, res) => {
  const { id } = req.params
  const { password } = req.body
  try {
    const user = await UserServices.getById(id)
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' })
    user.password = hashPassword(password)
    const result = await UserServices.update(id, user)
    res.status(200).json({ status: 'success', payload: result })
  } catch (err) {
    console.log(err)
  }
}

export { createUserController, changeStatusController, changePasswordController }
