import { MeetServices, UserServices } from '../services/index.services.js'

const createMeetController = async (req, res) => {
  const { uid, uid2 } = req.params
  const { expiration } = req.body
  try {
    const user = await UserServices.getById(uid)
    if (!user) return res.status(404).json({ message: 'User not found' })
    const user2 = await UserServices.getById(uid2)
    if (!user2) return res.status(404).json({ message: 'User not found' })
    if (user2.role !== 'TEACHER' && user2.role !== 'GUARDIAN') return res.status(400).json({ message: 'Invalid role' })
    const result = await MeetServices.create({ to: uid, from: uid2, expiration })
    res.status(201).json(result)
  } catch (err) {
    console.log(err)
  }
}

const changeAssistMeetController = async (req, res) => {
  const { mid } = req.params
  const { assist } = req.body
  try {
    const meet = await MeetServices.getById(mid)
    if (!meet) return res.status(404).json({ message: 'Meet not found' })
    meet.assist = assist
    const result = await MeetServices.update(mid, meet)
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
  }
}

export { createMeetController, changeAssistMeetController }
