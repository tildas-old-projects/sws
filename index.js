const ex = require('express')
const s = require('serve-static')
const p = require('path')
const e = ex()

function listen(port) {
  // We can assume the user has a views directory
  e.use(s(path.join(__dirname, 'views')))
  // If not, that's fine! We can use the current dir.
  e.use(s(__dirname))
  e.listen(port)
}
module.exports = listen
