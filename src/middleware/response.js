import { StatusCodes, getReasonPhrase } from 'http-status-codes'

export default (req, res, next) => {
  Object.assign(res, {
    data(data) {
      this.json({ data })
    },
    error(code, message) {
      const statusCode = code || StatusCodes.INTERNAL_SERVER_ERROR
      const error = message || getReasonPhrase(statusCode)
      this.status(statusCode).json({ error })
    },
    errorPage(status, error) {
      this.status(status).render('error', { error })
    }
  })

  next()
}