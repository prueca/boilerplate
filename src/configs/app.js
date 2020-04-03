import smtp from './smtp';
import { env } from '../library/helper';

export const
  APP_NAME = env('APP_NAME', 'App'),
  BASE_URL = env('BASE_URL', 'http://localhost:3000'),
  PORT = env('PORT', 3000),
  DB_NAME = env('DB_NAME', 'database'),
  DB_USER = env('DB_USER', 'root'),
  DB_PASS = env('DB_PASS', ''),
  DB_HOST = env('DB_HOST', 'localhost'),
  DB_PORT = env('DB_PORT', 3306),
  DB_DIALECT = env('DB_DIALECT', 'mysql')
  MAILER_CONFIG = smtp[env('SMTP', 'ethereal')];