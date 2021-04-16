import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import sassMiddleware from 'node-sass-middleware'
import cors from 'cors'
import session from 'express-session'
import 'dotenv/config'

import bootstrap from './bootstrap'
import corsConfig from './configs/cors'
import sassConfig from './configs/sass'
import sessConfig from './configs/session'
import response from './middleware/response'
import main from './routes/main'

const app = express()
const isProd = process.env.NODE_ENV === 'production'

// middleware
!isProd && app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors(corsConfig))
app.use(session(sessConfig))
app.use(sassMiddleware(sassConfig))
app.use(response)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.locals.env = process.env // access env in views

// static
bootstrap(app)
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', main)

// catch 404 and forward to error handler
app.use((req, res) => res.json({ error: 'Page not found' }))

export default app