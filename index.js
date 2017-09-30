const e = require('express')
const s = require('serve-static')
const p = require('path')

function initExpress() {
  const ex = e()
}

function useServe() {
  // We can assume the user has a views directory
  ex.use(s(path.join(__dirname, 'views'))
  // If not, that's fine! We can use the current dir.
  ex.use(s(__dirname))

function listen(port) {
  initExpress()
  useServe()
  e.listen(port)
}
