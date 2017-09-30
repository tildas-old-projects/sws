/**
 * A simple web server
 * @version 1.0.0
 * @license MIT
 * @file Simple server
 * @copyright S Stewart, 2017
 */
const ex = require('express')
const s = require('serve-static')
const p = require('path')
const e = ex()

function listen(port) {
  /**
   * Starts a web server on the specified port.
   * @constructor
   * @param {number} Port to be used
   */
  // We can assume the user has a views directory
  e.use(s(path.join(__dirname, 'views')))
  // If not, that's fine! We can use the current dir.
  e.use(s(__dirname))
  e.listen(port)
}
module.exports = listen
