import { EnrollmentServices, UserServices } from '../services/index.services.js'

const changeEnrollmentStatusController = async (req, res) => {
  const { uid, eid } = req.params
  const { status } = req.body
  try {
    const user = await UserServices.getById(uid)
    if (!user) return res.status(404).json({ message: 'User not found' })
    if (user.role !== 'STUDENT') return res.status(403).json({ message: 'User is not a student' })
    const enrollment = await EnrollmentServices.getById(eid)
    if (!enrollment) return res.status(404).json({ message: 'Enrollment not found' })
    enrollment.status = status

    const result = await EnrollmentServices.update(eid, enrollment)
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
  }
}

export { changeEnrollmentStatusController }
