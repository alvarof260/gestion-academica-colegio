import { Router } from 'express'
import passport from 'passport'

const sessionRouter = Router()

sessionRouter.post('/register', passport.authenticate('register', { failureRedirect: '/failRegister' }), (req, res) => {
  console.log('req.user', req.user)
  res.json({ status: 'success', message: 'Register success', password: req.user.password })
})

sessionRouter.post('/login', passport.authenticate('login', { failureRedirect: '/failLogin' }), (req, res) => {
  if (!req.user) return res.status(401).json({ status: 'error', message: 'Unauthorized' })
  console.log('req.user', req.user)
  req.session.user = {
    username: req.user.username,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email
  }
  res.json({ status: 'success', message: 'Login success' })
})

sessionRouter.get('/failRegister', (req, res) => {
  res.status(401).json({ status: 'error', message: 'Register failed' })
})

sessionRouter.get('/failLogin', (req, res) => {
  res.status(401).json({ status: 'error', message: 'Login failed' })
})

export default sessionRouter
