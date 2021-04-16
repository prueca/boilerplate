import jwt from 'jsonwebtoken'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'
import { TOKEN_SECRET } from '../configs/core'

const getToken = req => {
  const auth = req.cookies['Authorization']

  if (!auth) return ''

  const token = auth.split(' ')[1] || ''
  return token
}

export default (req, res, next) => {
  try {
    const token = getToken(req)
    jwt.verify(token, TOKEN_SECRET)
    next()
  } catch (err) {
    req.method === 'GET'
      ? res.errorPage(StatusCodes.UNAUTHORIZED, getReasonPhrase(StatusCodes.UNAUTHORIZED))
      : res.error(StatusCodes.UNAUTHORIZED)
  }
}