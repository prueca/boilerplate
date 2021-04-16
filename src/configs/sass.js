import path from 'path'
import { env } from '../helper'

export default {
  src: path.join(__dirname, '../sass'),
  dest: path.join(__dirname, '../public/css'),
  indentedSyntax: true, // true = .sass and false = .scss
  outputStyle: 'expanded', // compressed, nested, compact
  prefix: '/css',
  debug: env('NODE_ENV', 'production') === 'production'
}