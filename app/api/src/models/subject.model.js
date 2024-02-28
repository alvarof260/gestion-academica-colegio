import mongoose from 'mongoose'

const subjectCollection = 'subjects'

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  description: { type: String },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
})

export const SubjectDao = mongoose.model(subjectCollection, subjectSchema)
