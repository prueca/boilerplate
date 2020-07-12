import nodemailer from 'nodemailer';
import MAILER_CONFIG from '../configs/smtp';

/**
 * Returns env variable
 *
 * @param {String} key
 * @param {String} defaultVal
 *
 * @returns {*}
 */
export const env = (key, defaultVal) => {
  return process.env[key] !== undefined
    ? process.env[key] : defaultVal;
};

/**
 * Mail sender
 *
 * @param {Object} opt
 *
 * @returns {Object<Promise>}
 */
export const sendMail = (opt) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport(MAILER_CONFIG);

    transporter.sendMail(opt, (error, info) => {
      if (error) reject(error);
      else resolve(info.response);
    });
  });
};