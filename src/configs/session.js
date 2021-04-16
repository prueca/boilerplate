import session from 'express-session'
import connectSessionSequelize from 'connect-session-sequelize'
import sequelize from '../models'
import { env } from  '../helper'

const SequelizeStore = connectSessionSequelize(session.Store)
const store = new SequelizeStore({ db: sequelize, tableName: 'Sessions' })
const secret = env('SESSION_SECRET', 'session secret')

export default {
  store,
  secret,
  resave: false,
  saveUninitialized: false,
  unset: 'destroy'
}