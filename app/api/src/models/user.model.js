import mongoose from 'mongoose'

const userCollection = 'users'

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  password: { type: String },
  age: { type: Number },
  dni: { type: String, unique: true },
  role: {
    type: String,
    enum: ['SUPERUSER', 'ADMIN', 'GUARDIAN', 'TEACHER', 'STUDENT', 'EXSTUDENT'],
    default: 'STUDENT'
  },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'INACTIVE' },
  lastConnention: { type: Date, default: Date.now },
  level: { type: String, enum: ['PRIMARY', 'SECONDARY'] },
  gradeSchool: { type: String, enum: ['1', '2', '3', '4', '5', '6'] },
  gradeHighSchool: { type: String, enum: ['1', '2', '3', '4', '5'] },
  historyPassword: { type: [String] },
  subjects: {
    type: [
      {
        _id: false,
        subject: { type: mongoose.Schema.Types.ObjectId, ref: 'subjects' },
        rate: { type: Number, min: 0, max: 20, default: 0 }
      }
    ]
  },
  students: {
    type: [
      {
        _id: false,
        student: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
      }
    ]
  },
  documents: {
    type: [
      {
        name: { type: String },
        reference: { type: String }
      }
    ],
    default: []
  },
  enrollments: {
    type: [
      {
        _id: false,
        enrollment: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'enrollments'
        }
      }
    ]
  }
})

export const UserDao = mongoose.model(userCollection, UserSchema)
