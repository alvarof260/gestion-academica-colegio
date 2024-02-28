import { SubjectServices } from '../services/index.services.js'

export const createSubjectController = async (req, res) => {
  const subject = req.body
  try {
    const newSubject = await SubjectServices.create(subject)
    if (!newSubject) return res.status(400).json({ message: 'Subject not created' })
    res.status(201).json(newSubject)
  } catch (err) {
    console.log(err)
  }
}
