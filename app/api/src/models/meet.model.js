import mongoose from 'mongoose'

const meetCollection = 'meets'

const meetSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  assist: {
    type: String,
    enum: ['YES', 'NO', 'PENDING'],
    default: 'PENDING'
  },
  expiration: {
    type: Date,
    required: true
  }
})

export const MeetDao = mongoose.model(meetCollection, meetSchema)
