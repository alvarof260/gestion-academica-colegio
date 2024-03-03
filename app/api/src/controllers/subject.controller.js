import { SubjectServices, UserServices } from '../services/index.services.js'

const createSubjectController = async (req, res) => {
  const subject = req.body
  try {
    const newSubject = await SubjectServices.create(subject)
    if (!newSubject) return res.status(400).json({ message: 'Subject not created' })
    res.status(201).json(newSubject)
  } catch (err) {
    console.log(err)
  }
}

const addTeacherToSubjectController = async (req, res) => {
  const { sid } = req.params
  const { tid } = req.params
  try {
    const subject = await SubjectServices.getById(sid)
    if (!subject) return res.status(404).json({ message: 'Subject not found' })
    const teacher = await UserServices.getById(tid)
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' })
    if (teacher.role !== 'TEACHER') return res.status(400).json({ message: 'User is not a teacher' })
    if (subject.teacher) return res.status(400).json({ message: 'Subject already has a teacher' })
    subject.teacher = tid
    const result = await SubjectServices.update(sid, subject)
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
  }
}

const deleteSubjectController = async (req, res) => {
  const { id } = req.params
  try {
    const subject = await SubjectServices.delete(id)
    if (!subject) return res.status(404).json({ message: 'Subject not found' })
    res.status(200).json(subject)
  } catch (err) {
    console.log(err)
  }
}

export { createSubjectController, addTeacherToSubjectController, deleteSubjectController }
