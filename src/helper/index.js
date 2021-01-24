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
    ? process.env[key] : defaultVal
}
