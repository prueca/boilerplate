import crypto from 'crypto'
import bcrypt from 'bcrypt'
import Hashids from 'hashids'
import slugify from 'slugify'
import nodemailer from 'nodemailer'
import sequelize from '../models'
import mailerConfig from '../configs/smtp'
import { APP_NAME, HASHIDS_LENGTH, HASHIDS_SALT } from '../configs/core'

export default class BaseController {
  /**
   * Dependencies
   */
  constructor() {
    this.models = sequelize.models,
    this._hashids = new Hashids(HASHIDS_SALT, HASHIDS_LENGTH)
    this._mailer = nodemailer.createTransport(mailerConfig)
  }

  /**
   * Returns the hash for the given integers
   *
   * @param  {...Number} int
   *
   * @returns {String}
   */
  encrypt(...int) {
    const num = [...int, Date.now()]

    return this._hashids.encode(...num)
  }

  /**
   * Returns the numbers from decoded hash
   *
   * @param {String} hash
   * @param {Boolean} all
   *
   * @returns {Number|Array<Number>}
   */
  decrypt(hash, all = false) {
    const num = this._hashids.decode(hash)
    num.pop()

    return all ? num : num[0]
  }

  /**
   * Generate random integer within range (both inclusive).
   * Min defaults to 1.
   * Max defaults to 100.
   *
   * @param {Number} min
   * @param {Number} max
   *
   * @returns {Number}
   */
  randInt(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
  }

  /**
   * Generate random string. Size defaults to 8.
   *
   * @param {Number} size
   *
   * @returns {String}
   */
  randStr(size = 8) {
    const len = Math.floor(size / 2)

    return crypto.randomBytes(len).toString('hex')
  }

  /**
   * Hash string
   *
   * @param {String} str
   *
   * @returns {String}
   */
  hash(str) {
    return bcrypt.hash(str, this.randInt(1, 10))
  }

  /**
   * Compare raw string to hash
   *
   * @param {String} raw
   * @param {String} hash
   *
   * @returns {Promise<Boolean>}
   */
  compare(raw, hash) {
    return bcrypt.compare(raw, hash)
  }

  /**
   * Send email
   *
   * @param {String} recipient
   * @param {String} subject
   * @param {String} html
   *
   * @returns {Promise<Any>}
   */
  mail(recipient, subject, html) {
    const from = `"${APP_NAME}" <${mailerConfig.auth.user}>`
    const to = recipient

    return this._mailer.sendMail({ from, to, subject, html })
  }

  /**
   * format string to url
   *
   * @param {String} str
   *
   * @returns {String}
   */
  toUrl(str) {
    return `/${slugify(str, { lower: true })}`
  }
}
