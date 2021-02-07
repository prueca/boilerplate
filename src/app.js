import http from 'http'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import sassMiddleware from 'node-sass-middleware'
import cors from 'cors'
import session from 'express-session'
import 'dotenv/config'

import io from './io'
import corsConfig from './configs/cors'
import indexRouter from './routes/index'

const app = express()
const server = http.Server(app)
const socketio = io(server)
const isProd = process.env.NODE_ENV === 'production'
const fontawesome = path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free')
const jquery = path.join(__dirname, '../node_modules/jquery/dist')

!isProd && app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors(corsConfig))

// make socket io accessible to controllers
app.use((req, res, next) => {
  res.locals.io = socketio
  next()
})

// session middleware
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.locals.env = process.env // access env in views

// sass compiler
app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/css'),
  indentedSyntax: true, // true = .sass and false = .scss
  outputStyle: 'expanded', // compressed, nested, compact
  prefix: '/css',
  debug: false,
}))

app.use('/webfonts', express.static(path.join(fontawesome, 'webfonts')))
app.use('/fontawesome', express.static(path.join(fontawesome, 'css')))
app.use('/jquery', express.static(jquery))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use((req, res) => res.json({ error: 'Page not found' }))

export default app