import { SubjectServices } from '../services/index.services.js'

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

export { createSubjectController, deleteSubjectController }
