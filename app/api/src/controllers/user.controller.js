import { Resend } from 'resend'

import { UserServices, SubjectServices } from '../services/index.services.js'
import { hashPassword } from '../utils/password.utils.js'
import config from '../config/config.js'

const resend = new Resend(config.resend.api_key)

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

const giveGradeToStudentController = async (req, res) => {
  const { uid, sid } = req.params
  const { grade } = req.body
  try {
    const user = await UserServices.getById(uid)
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' })
    if (user.role !== 'STUDENT') return res.status(400).json({ status: 'error', message: 'The user is not a student' })
    const subject = await SubjectServices.getById(sid)
    if (!subject) return res.status(404).json({ status: 'error', message: 'Subject not found' })
    const index = user.subjects.findIndex(el => el.subject.toString() === sid)
    if (index === -1) return res.status(400).json({ status: 'error', message: 'The student is not enrolled in the subject' })
    user.subjects[index].rate = grade
    if (grade >= 13) {
      const { error } = await resend.emails.send({
        from: 'Academic <onboarding@resend.dev>',
        to: user.email,
        subject: 'Subject approved',
        html: `<p>Your grade in ${subject.name} has been approved. You have passed the subject</p>`
      })
      if (error) return res.status(500).json({ status: 'error', message: error })
    } else {
      const { error } = await resend.emails.send({
        from: 'Academic <onboarding@resend.dev>',
        to: user.email,
        subject: 'Subject failed',
        html: `<p>Your grade in ${subject.name} has been disapproved. You have failed the subject</p>`
      })
      if (error) return res.status(500).json({ status: 'error', message: error })
    }
    const result = await UserServices.update(uid, user)
    res.status(200).json({ status: 'success', payload: result })
  } catch (error) {

  }
}

const addSubjectToStudentController = async (req, res) => {
  const { uid, sid } = req.params
  try {
    const user = await UserServices.getById(uid)
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' })
    if (user.role !== 'STUDENT') return res.status(400).json({ status: 'error', message: 'The user is not a student' })
    const subject = await SubjectServices.getById(sid)
    if (!subject) return res.status(404).json({ status: 'error', message: 'Subject not found' })
    const index = user.subjects.findIndex(el => el.subject.toString() === sid)
    if (index !== -1) return res.status(400).json({ status: 'error', message: 'The student is already enrolled in the subject' })
    user.subjects.push({ subject: sid, rate: 0 })
    const result = await UserServices.update(uid, user)
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

export { createUserController, changeStatusController, giveGradeToStudentController, addSubjectToStudentController, changePasswordController }
