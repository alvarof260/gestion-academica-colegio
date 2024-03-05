import dotenv from 'dotenv'

dotenv.config()

export default {
  server: {
    port: process.env.PORT || 3000
  },
  database: {
    mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/',
    mongoDbName: process.env.MONGO_DB || 'academia'
  },
  session: {
    secret: process.env.SECRET_KEY || 'mysecret'
  },
  resend: {
    api_key: process.env.API_KEY,
    from: process.env.EMAIL_OWNER
  }
}
