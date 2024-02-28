import express from 'express'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import passport from 'passport'

import config from './config/config.js'
import { initializePassport } from './config/passport.config.js'

export function initializeConfigApp (app) {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(session({
    secret: config.database.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: config.database.MONGODB_URI, dbName: config.database.DB_NAME })
  }))
  initializePassport()
  app.use(passport.initialize())
  app.use(passport.session())
}
