import { env } from '../helper'

export default {
  database: env('DB_NAME', 'Database'),
  user: env('DB_USER', 'root'),
  password: env('DB_PASS', ''),
  host: env('DB_HOST', 'localhost'),
  port: env('DB_PORT', 3306),
  dialect: env('DB_DIALECT', 'mysql'),
  authenticate: false,
  createTable: false,
  alterTable: false,
  forceSync: false,
  logging: false
}
