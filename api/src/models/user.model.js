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
    enum: [
      'SUPERUSER',
      'ADMIN',
      'GUARDIAN',
      'PROFESSOR',
      'STUDENT',
      'EXSTUDENT'
    ]
  },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE'] },
  lastConnention: { type: Date, default: Date.now },
  level: { type: String, enum: ['PRIMARY', 'SECONDARY'] },
  gradeSchool: { type: String, enum: ['1', '2', '3', '4', '5', '6'] },
  gradeHighSchool: { type: String, enum: ['1', '2', '3', '4', '5'] },
  historyPassword: { type: [String] },
  subjects: {
    type: [
      {
        subject: { type: mongoose.types.ObjectId, ref: 'subjects' },
        rate: { type: Number, min: 0, max: 20, default: 0 }
      }
    ]
  },
  students: { type: [mongoose.types.ObjectId], ref: 'users' },
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
    type: String,
    enum: ['PENDING', 'CONDITIONAL', 'REVOKED', 'APPROVED', 'REJECTED'],
    default: 'PENDING'
  }
})

export const UserDao = mongoose.model(userCollection, UserSchema)
