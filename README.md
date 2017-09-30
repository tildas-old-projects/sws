# sws :rocket:
A simple web server in JavaScript powered by `express` and `serve`, inspired by [/r/tinycode](https://tinycode.reddit.com).

# Usage
To use sws, simply drop it into your deps, and `require('sws')`.
After defining sws, you can simply use it as a function (for example `sws(3000)`)!

# Minification
This project includes a build step that uses UglifyJS to convert index.js into a file named sws.min.js.

May be useful for super cramped environments (where you need fast fast load).

# License
MIT License
