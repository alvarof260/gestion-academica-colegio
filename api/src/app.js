import express from 'express'
import mongoose from 'mongoose'

import config from './config/config.js'
import { initializeConfigApp } from './run.js'

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

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err)
    process.exit(1)
  })
