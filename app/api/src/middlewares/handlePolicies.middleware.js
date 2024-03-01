export function handlePolicies (policies) {
  return (req, res, next) => {
    if (policies.includes('PUBLIC')) return next()
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' })
    if (policies.length > 0) {
      const role = req.user.role
      if (!policies.includes(role)) return res.status(401).json({ message: 'Unauthorized' })
      next()
    }
  }
}
