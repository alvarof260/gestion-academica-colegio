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

export { createUserController }
