/**
 * A simple demo of sws
 * @copyright S Stewart, 2017
 * @license MIT
 * @file Example file
 */
const sws = require('../index')

console.log('Hey hey! This is a demo of sws, a simple web server')
sws(3000).catch(console.error)
