import passport from 'passport'
import local from 'passport-local'

import { UserServices } from '../services/index.services.js'
import { createPassword, hashPassword, isValidPassword } from '../utils/password.utils.js'

const LocalStrategy = local.Strategy

export function initializePassport () {
  passport.use('register', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'username',
    passwordField: false
  }, async (req, username, done) => {
    try {
      const { firstname, lastname, email, age, dni, role, level, gradeSchool, gradeHighSchool } = req.body
      const user = await UserServices.getByProperty(username)
      if (user) {
        return done(null, false)
      }
      const newUser = {
        username,
        firstname,
        lastname,
        email,
        password: hashPassword(createPassword()),
        age,
        dni,
        role,
        level,
        gradeSchool,
        gradeHighSchool
      }

      const result = await UserServices.create(newUser)
      return done(null, result)
    } catch (err) {
      return done(err)
    }
  }))

  passport.use('login', new LocalStrategy({
    usernameField: 'username'
  }, async (username, password, done) => {
    try {
      const user = await UserServices.getByProperty(username)
      if (!user) {
        return done(null, false)
      }
      if (!isValidPassword(user, password)) {
        return done(null, false)
      }
      return done(null, user)
    } catch (err) {
      return done(err)
    }
  }))

  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await UserServices.getById(id)
      done(null, user)
    } catch (err) {
      return done(err)
    }
  })
}
