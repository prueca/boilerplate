import { StatusCodes } from 'http-status-codes'
import path from 'path'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../storage'),

  fileFilter(req, file, cb) {
    cb(null, true)
  },

  filename(req, file, cb) {
    const ext = file.mimetype.split('/')[1]
    const filename = `${file.filename}-${Date.now()}.${ext}`
    cb(null, filename)
  }
})

const upload = multer({ storage }).single('field')
// const upload = multer({ storage }).array('field')

export default (req, res, next) => {
  upload(req, res, err => {
    if (err) {
      const code = StatusCodes.INTERNAL_SERVER_ERROR
      const msg = err.message

      return res.error(code, msg)
    }

    next()
  })
}