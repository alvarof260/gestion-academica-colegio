import express from 'express'
import mongoose from 'mongoose'

import config from './config/config.js'
import { initializeConfigApp } from './run.js'

import userRouter from './routes/user.router.js'
import subjectRouter from './routes/subject.router.js'
import sessionRouter from './routes/session.router.js'
import enrollmentRouter from './routes/enrollment.router.js'
import meetRouter from './routes/meet.router.js'

const app = express()

const PORT = config.server.port

mongoose.connect(config.database.mongoUrl, {
  dbName: config.database.mongoDbName
})
  .then(() => {
    console.log('Connected to MongoDB')
    initializeConfigApp(app)
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    app.use('/api/users', userRouter)
    app.use('/api/subjects', subjectRouter)
    app.use('/api/session', sessionRouter)
    app.use('/api/enrollments', enrollmentRouter)
    app.use('/api/meets', meetRouter)

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err)
    process.exit(1)
  })
