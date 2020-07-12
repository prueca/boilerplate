import { env } from '../helper';

export const FORCE_SYNC = false;

export default {
  DB_NAME: env('DB_NAME', 'POS'),
  DB_USER: env('DB_USER', 'root'),
  DB_PASS: env('DB_PASS', ''),
  DB_HOST: env('DB_HOST', 'localhost'),
  DB_PORT: env('DB_PORT', 3306),
  DB_DIALECT: env('DB_DIALECT', 'mysql')
};
