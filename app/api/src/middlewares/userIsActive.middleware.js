export function userIsActive () {
  return (req, res, next) => {
    if (req.user.status === 'INACTIVE') {
      return res.status(403).json({ message: 'User is not active' })
    }
    next()
  }
}
