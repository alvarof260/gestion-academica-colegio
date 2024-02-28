import bcrypt from 'bcrypt'

function createPassword () {
  const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()/[]{}'
  let password = ''
  for (let i = 0; i < 12; i++) {
    password += abc[Math.floor(Math.random() * abc.length)]
  }
  return password
}

function hashPassword (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

function isValidPassword (user, hash) {
  return bcrypt.compareSync(hash, user.password)
}

export { createPassword, hashPassword, isValidPassword }
