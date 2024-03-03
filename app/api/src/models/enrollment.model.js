import mongoose from 'mongoose'

const enrollmentCollection = 'enrollments'

const EnrollmentSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['PENDING', 'CONDITIONAL', 'REVOKED', 'APPROVED', 'REJECTED'],
    default: 'PENDING'
  },
  year: { type: Number }
})

export const EnrollmentDao = mongoose.model(enrollmentCollection, EnrollmentSchema)
